/**
 * Frame Preloading & Caching Engine for Cinematic Scroll Experience
 * Total Frames: 192 WebP images (/frames/frame-0001.webp to /frames/frame-0192.webp)
 */

export const TOTAL_FRAMES = 192;

/**
 * Returns formatted frame path matching the exact asset structure
 */
export const getFramePath = (index: number): string => {
  const frameNum = Math.min(Math.max(1, index + 1), TOTAL_FRAMES);
  return `/frames/frame-${String(frameNum).padStart(4, '0')}.webp`;
};

// Global singleton image cache to prevent redundant HTTP downloads
const frameCache = new Map<number, HTMLImageElement>();
const loadingPromises = new Map<number, Promise<HTMLImageElement>>();

/**
 * Preload a single frame by index, storing in cache
 */
export const loadSingleFrame = (index: number): Promise<HTMLImageElement> => {
  if (frameCache.has(index)) {
    return Promise.resolve(frameCache.get(index)!);
  }

  if (loadingPromises.has(index)) {
    return loadingPromises.get(index)!;
  }

  const promise = new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.src = getFramePath(index);
    img.onload = () => {
      frameCache.set(index, img);
      loadingPromises.delete(index);
      resolve(img);
    };
    img.onerror = (err) => {
      loadingPromises.delete(index);
      console.warn(`[FrameSequence] Failed to load frame ${index}:`, err);
      reject(err);
    };
  });

  loadingPromises.set(index, promise);
  return promise;
};

// Eager load frame 0 immediately when JS module loads
loadSingleFrame(0).catch(() => {});

/**
 * Get a loaded image synchronously from cache if available
 */
export const getCachedFrame = (index: number): HTMLImageElement | undefined => {
  return frameCache.get(index);
};

/**
 * Progressive Preloader:
 * 1. Loads frame 0 immediately for initial display
 * 2. Loads priority neighborhood frames (0-20)
 * 3. Progressively chunk-loads remaining frames in background batch queues
 */
export const preloadAllFrames = (
  onFirstFrameReady?: () => void,
  onProgress?: (loaded: number, total: number) => void
): () => void => {
  let isCancelled = false;
  let loadedCount = 0;

  const updateProgress = () => {
    if (isCancelled) return;
    loadedCount = frameCache.size;
    if (onProgress) {
      onProgress(loadedCount, TOTAL_FRAMES);
    }
  };

  // Phase 1: Load Hero First Frame (frame 0)
  loadSingleFrame(0)
    .then(() => {
      if (isCancelled) return;
      updateProgress();
      if (onFirstFrameReady) {
        onFirstFrameReady();
      }

      // Phase 2: Load initial buffer (frames 1 to 20) rapidly
      const initialBufferPromises: Promise<HTMLImageElement>[] = [];
      for (let i = 1; i < Math.min(20, TOTAL_FRAMES); i++) {
        initialBufferPromises.push(
          loadSingleFrame(i).then((img) => {
            updateProgress();
            return img;
          })
        );
      }

      // Phase 3: Background batch loading for remaining frames
      Promise.allSettled(initialBufferPromises).then(() => {
        if (isCancelled) return;

        const remainingIndices: number[] = [];
        for (let i = 20; i < TOTAL_FRAMES; i++) {
          if (!frameCache.has(i)) {
            remainingIndices.push(i);
          }
        }

        const BATCH_SIZE = 8;
        const processBatch = async (startIndex: number) => {
          if (isCancelled || startIndex >= remainingIndices.length) return;

          const batch = remainingIndices.slice(startIndex, startIndex + BATCH_SIZE);
          await Promise.allSettled(
            batch.map(async (idx) => {
              try {
                await loadSingleFrame(idx);
                updateProgress();
              } catch (e) {
                // Ignore silent load failures during background stream
              }
            })
          );

          if (!isCancelled) {
            processBatch(startIndex + BATCH_SIZE);
          }
        };

        processBatch(0);
      });
    })
    .catch((err) => {
      console.error('[FrameSequence] Hero frame 0 failed to load:', err);
    });

  return () => {
    isCancelled = true;
  };
};
