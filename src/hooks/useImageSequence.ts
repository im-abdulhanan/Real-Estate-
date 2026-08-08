import { useEffect, useState, useCallback, useRef } from 'react';
import {
  TOTAL_FRAMES,
  getCachedFrame,
  loadSingleFrame,
  preloadAllFrames,
} from '../utils/preloadFrames';

interface UseImageSequenceResult {
  isFirstFrameLoaded: boolean;
  loadedProgress: number;
  totalFrames: number;
  getFrame: (index: number) => HTMLImageElement | undefined;
}

export const useImageSequence = (): UseImageSequenceResult => {
  const [isFirstFrameLoaded, setIsFirstFrameLoaded] = useState<boolean>(false);
  const [loadedProgress, setLoadedProgress] = useState<number>(0);
  const lastRequestedFrameRef = useRef<number>(0);

  useEffect(() => {
    const cancelPreload = preloadAllFrames(
      () => {
        setIsFirstFrameLoaded(true);
      },
      (loaded, total) => {
        setLoadedProgress(loaded);
      }
    );

    return () => {
      cancelPreload();
    };
  }, []);

  /**
   * Retrieves image for frame index.
   * If exact frame is loading, returns nearest available cached frame to ensure 60fps continuous rendering without blank flashes.
   */
  const getFrame = useCallback((index: number): HTMLImageElement | undefined => {
    const clampedIndex = Math.min(Math.max(0, Math.floor(index)), TOTAL_FRAMES - 1);
    lastRequestedFrameRef.current = clampedIndex;

    // 1. Direct cache hit
    const exactFrame = getCachedFrame(clampedIndex);
    if (exactFrame) return exactFrame;

    // Trigger explicit load if somehow missed in stream
    loadSingleFrame(clampedIndex).catch(() => {});

    // 2. Fallback to nearest cached frame (search backwards then forwards)
    for (let radius = 1; radius < TOTAL_FRAMES; radius++) {
      const prev = clampedIndex - radius;
      if (prev >= 0) {
        const prevFrame = getCachedFrame(prev);
        if (prevFrame) return prevFrame;
      }

      const next = clampedIndex + radius;
      if (next < TOTAL_FRAMES) {
        const nextFrame = getCachedFrame(next);
        if (nextFrame) return nextFrame;
      }
    }

    return undefined;
  }, []);

  return {
    isFirstFrameLoaded,
    loadedProgress,
    totalFrames: TOTAL_FRAMES,
    getFrame,
  };
};
