import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FrameSequence } from './FrameSequence';
import { TOTAL_FRAMES } from '../utils/preloadFrames';
import { ChevronDown, Compass, Shield, Maximize2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface CinematicHeroProps {
  getFrame: (index: number) => HTMLImageElement | undefined;
  isLoaded: boolean;
  loadedProgress?: number;
  onExploreClick: () => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({
  getFrame,
  isLoaded,
  loadedProgress,
  onExploreClick,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentFrameIndex, setCurrentFrameIndex] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  // Synchronize ScrollTrigger with Frame Sequence Index
  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);

    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.15, // Ultra smooth response
      onUpdate: (self) => {
        const progress = self.progress;
        setScrollProgress(progress);
        const index = Math.min(
          Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 1))),
          TOTAL_FRAMES - 1
        );
        setCurrentFrameIndex(index);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  // Calculate text visibility opacities for distinct camera scroll phases
  // Phase 1: 0.00 -> 0.25 (Initial Arrival)
  const phase1Opacity = Math.max(0, 1 - Math.abs(scrollProgress - 0.08) * 6);
  const phase1TranslateY = (scrollProgress - 0.08) * -60;

  // Phase 2: 0.32 -> 0.60 (Architectural Journey)
  const phase2Opacity = Math.max(0, 1 - Math.abs(scrollProgress - 0.44) * 5);
  const phase2TranslateY = (scrollProgress - 0.44) * -50;

  // Phase 3: 0.68 -> 0.95 (Sanctuary Details)
  const phase3Opacity = Math.max(0, 1 - Math.abs(scrollProgress - 0.80) * 5);
  const phase3TranslateY = (scrollProgress - 0.80) * -50;

  // Scroll indicator opacity (fades out rapidly as user begins scrolling)
  const scrollIndicatorOpacity = Math.max(0, 1 - scrollProgress * 12);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${isReducedMotion ? 'h-screen' : 'h-[450vh]'}`}
      id="hero"
    >
      {/* Sticky Fullscreen Canvas Container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-black select-none">
        {/* HTML5 Canvas Renderer */}
        <FrameSequence
          currentFrameIndex={currentFrameIndex}
          getFrame={getFrame}
          isFirstFrameLoaded={isLoaded}
          loadedProgress={loadedProgress}
        />

        {/* Lighter, subtle overlay gradients for maximum frame visibility and vibrancy */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-[#080808]/30 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/45 via-transparent to-transparent pointer-events-none z-10 hidden md:block" />

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none z-10 shadow-[inset_0_0_80px_rgba(0,0,0,0.35)]" />

        {/* --- SCROLL PHASE TEXT OVERLAYS --- */}
        <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-between pt-20 pb-16 pointer-events-none">
          
          {/* TOP RIGHT MONOGRAM */}
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center space-x-3 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 text-xs tracking-widest uppercase text-stone-200 pointer-events-auto shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
              <span>Peshawar · Khyber Pass Estate</span>
            </div>
          </div>

          {/* CENTRAL / UPPER-LEFT EDITORIAL TYPOGRAPHY */}
          <div className="relative min-h-[240px] flex items-center">

            {/* STAGE 1: INTRO (0% - 25%) */}
            <div
              className="absolute left-0 top-0 max-w-2xl transition-all duration-75 drop-shadow-md"
              style={{
                opacity: isReducedMotion ? 1 : phase1Opacity,
                transform: isReducedMotion
                  ? 'none'
                  : `translateY(${phase1TranslateY}px)`,
                pointerEvents: phase1Opacity > 0.3 ? 'auto' : 'none',
              }}
            >
              <p className="text-[#c5a059] text-xs md:text-sm font-mono tracking-[0.3em] uppercase mb-3 flex items-center space-x-2 [text-shadow:_0_1px_8px_rgb(0_0_0_/_80%)]">
                <span className="w-6 h-[1px] bg-[#c5a059]" />
                <span>Private Residence</span>
              </p>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.05] mb-6 [text-shadow:_0_2px_16px_rgb(0_0_0_/_80%)]">
                A New Standard <br />
                <span className="italic font-normal text-stone-200">of Living</span>
              </h1>
              <p className="text-stone-200 text-sm md:text-base max-w-md font-light leading-relaxed [text-shadow:_0_1px_10px_rgb(0_0_0_/_90%)]">
                Sculpted from mountain travertine and bronze, positioned elevated over the valley with untamed vistas.
              </p>
            </div>

            {/* STAGE 2: ARCHITECTURE (30% - 60%) */}
            <div
              className="absolute left-0 top-0 max-w-2xl transition-all duration-75 drop-shadow-md"
              style={{
                opacity: isReducedMotion ? 0 : phase2Opacity,
                transform: `translateY(${phase2TranslateY}px)`,
                pointerEvents: phase2Opacity > 0.3 ? 'auto' : 'none',
              }}
            >
              <p className="text-[#c5a059] text-xs md:text-sm font-mono tracking-[0.3em] uppercase mb-3 flex items-center space-x-2 [text-shadow:_0_1px_8px_rgb(0_0_0_/_80%)]">
                <span className="w-6 h-[1px] bg-[#c5a059]" />
                <span>Architectural Vision</span>
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1] mb-5 [text-shadow:_0_2px_16px_rgb(0_0_0_/_80%)]">
                Monumental Form & <br />
                <span className="italic text-stone-200">Natural Light</span>
              </h2>
              <div className="grid grid-cols-2 gap-4 pt-3 max-w-lg border-t border-white/20 text-xs text-stone-200 font-mono bg-black/30 backdrop-blur-sm p-4 rounded-xl">
                <div>
                  <span className="block text-stone-400 uppercase">GLAZING</span>
                  <span>Triple-Pane Low-E Glass</span>
                </div>
                <div>
                  <span className="block text-stone-400 uppercase">MATERIALS</span>
                  <span>Honed Marble & Concrete</span>
                </div>
              </div>
            </div>

            {/* STAGE 3: SANCTUARY (65% - 95%) */}
            <div
              className="absolute left-0 top-0 max-w-2xl transition-all duration-75 drop-shadow-md"
              style={{
                opacity: isReducedMotion ? 0 : phase3Opacity,
                transform: `translateY(${phase3TranslateY}px)`,
                pointerEvents: phase3Opacity > 0.3 ? 'auto' : 'none',
              }}
            >
              <p className="text-[#c5a059] text-xs md:text-sm font-mono tracking-[0.3em] uppercase mb-3 flex items-center space-x-2 [text-shadow:_0_1px_8px_rgb(0_0_0_/_80%)]">
                <span className="w-6 h-[1px] bg-[#c5a059]" />
                <span>Sanctuary of Space</span>
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1] mb-5 [text-shadow:_0_2px_16px_rgb(0_0_0_/_80%)]">
                Elevated Sanctuary <br />
                <span className="italic text-stone-200">In Pure Harmony</span>
              </h2>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-stone-200">
                <span className="px-3.5 py-2 bg-black/40 backdrop-blur-md rounded-lg border border-white/20">
                  8,500 SQ FT
                </span>
                <span className="px-3.5 py-2 bg-black/40 backdrop-blur-md rounded-lg border border-white/20">
                  5 BEDROOM SUITES
                </span>
                <span className="px-3.5 py-2 bg-black/40 backdrop-blur-md rounded-lg border border-white/20">
                  INFINITY SPA
                </span>
              </div>
            </div>
          </div>

          {/* BOTTOM HERO CONTENT / SCROLL INDICATOR */}
          <div className="flex items-end justify-between border-t border-white/15 pt-6">
            
            {/* Minimal Stat Snippet */}
            <div className="hidden md:flex items-center space-x-2 text-xs font-mono text-stone-300 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <div className="flex items-center space-x-2">
                <Compass className="w-4 h-4 text-[#c5a059]" />
                <span>ORIENT: NORTH-WEST</span>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <Shield className="w-4 h-4 text-[#c5a059]" />
                <span>PRIVATE GATED ACCESS</span>
              </div>
            </div>

            {/* Scroll Indicator (Fades as user scrolls down) */}
            <div
              className="flex items-center space-x-3 text-xs tracking-widest uppercase font-mono text-stone-200 pointer-events-auto transition-opacity duration-300 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
              style={{ opacity: isReducedMotion ? 1 : scrollIndicatorOpacity }}
            >
              <span>Scroll to Explore</span>
              <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center animate-bounce">
                <ChevronDown className="w-3.5 h-3.5 text-[#c5a059]" />
              </div>
            </div>

            {/* Interactive Explore Trigger */}
            <button
              onClick={onExploreClick}
              className="px-5 py-2.5 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/25 text-xs font-mono tracking-wider uppercase text-white transition-all duration-300 pointer-events-auto flex items-center space-x-2 shadow-lg"
            >
              <span>Residence Specs</span>
              <Maximize2 className="w-3.5 h-3.5 text-[#c5a059]" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
