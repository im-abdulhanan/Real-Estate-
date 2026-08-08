import React, { useEffect, useRef } from 'react';

interface FrameSequenceProps {
  currentFrameIndex: number;
  getFrame: (index: number) => HTMLImageElement | undefined;
  isFirstFrameLoaded?: boolean;
  loadedProgress?: number;
  className?: string;
}

export const FrameSequence: React.FC<FrameSequenceProps> = ({
  currentFrameIndex,
  getFrame,
  isFirstFrameLoaded,
  loadedProgress,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const lastDrawnFrameRef = useRef<number | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let isSubscribed = true;

    const render = () => {
      if (!isSubscribed) return;

      const img = getFrame(currentFrameIndex);

      if (!img) {
        // Frame is currently fetching -> retry on next RAF tick until it arrives
        animationFrameIdRef.current = requestAnimationFrame(render);
        return;
      }

      const dpr = window.devicePixelRatio || 1;
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;

      // Resize canvas buffer if logical viewport size changed
      if (
        canvas.width !== displayWidth * dpr ||
        canvas.height !== displayHeight * dpr
      ) {
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
        canvas.style.width = `${displayWidth}px`;
        canvas.style.height = `${displayHeight}px`;
        lastDrawnFrameRef.current = null; // Force redraw on resize
      }

      // Skip redundant redraw if frame index and canvas dimensions are unchanged
      if (lastDrawnFrameRef.current === currentFrameIndex) return;

      // Aspect Cover Math
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgWidth = img.naturalWidth || img.width;
      const imgHeight = img.naturalHeight || img.height;

      if (!imgWidth || !imgHeight) {
        animationFrameIdRef.current = requestAnimationFrame(render);
        return;
      }

      const canvasRatio = canvasWidth / canvasHeight;
      const imageRatio = imgWidth / imgHeight;

      let drawWidth: number;
      let drawHeight: number;
      let offsetX: number;
      let offsetY: number;

      if (imageRatio > canvasRatio) {
        // Image is wider than canvas ratio -> fit height, crop width
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imageRatio;
        offsetX = (canvasWidth - drawWidth) / 2;
        offsetY = 0;
      } else {
        // Image is taller than canvas ratio -> fit width, crop height
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imageRatio;
        offsetX = 0;
        offsetY = (canvasHeight - drawHeight) / 2;
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      lastDrawnFrameRef.current = currentFrameIndex;
    };

    // Trigger immediate render attempt
    render();

    return () => {
      isSubscribed = false;
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [currentFrameIndex, getFrame, isFirstFrameLoaded, loadedProgress]);

  // Handle window resize events efficiently
  useEffect(() => {
    const handleResize = () => {
      lastDrawnFrameRef.current = null; // Force redraw
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full object-cover pointer-events-none z-0 ${className}`}
    />
  );
};
