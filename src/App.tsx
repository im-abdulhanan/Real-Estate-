import React, { useState } from 'react';
import { useLenis } from './hooks/useLenis';
import { useImageSequence } from './hooks/useImageSequence';
import { Navbar } from './components/Navbar';
import { CinematicHero } from './components/CinematicHero';
import { PropertyInfo } from './components/PropertyInfo';
import { Architecture } from './components/Architecture';
import { Features } from './components/Features';
import { FloorPlan } from './components/FloorPlan';
import { Gallery } from './components/Gallery';
import { CTA } from './components/CTA';
import { InquiryModal } from './components/InquiryModal';

export const App: React.FC = () => {
  // Initialize Lenis smooth scroll engine
  useLenis();

  // Initialize frame sequence preloading hook
  const { isFirstFrameLoaded, loadedProgress, totalFrames, getFrame } = useImageSequence();

  // Inquiry Modal state
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false);

  const openInquiryModal = () => setIsInquiryOpen(true);
  const closeInquiryModal = () => setIsInquiryOpen(false);

  // Calculate preloading percentage
  const loadPercentage = Math.min(
    100,
    Math.floor((loadedProgress / totalFrames) * 100)
  );

  return (
    <div className="relative bg-[#080808] text-[#e5e5e5] min-h-screen">
      
      {/* Subtle Film Grain Texture Overlay */}
      <div className="grain-overlay" />

      {/* --- CINEMATIC INTRO PRELOADER --- */}
      <div
        className={`fixed inset-0 z-50 bg-[#080808] flex flex-col justify-between p-12 transition-all duration-1000 ${
          isFirstFrameLoaded
            ? 'opacity-0 pointer-events-none translate-y-[-100%]'
            : 'opacity-100 pointer-events-auto'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="w-8 h-8 rounded-full border border-[#c5a059] flex items-center justify-center font-serif text-xs font-semibold text-[#c5a059]">
            R
          </span>
          <span className="text-[10px] font-mono tracking-widest text-stone-500 uppercase">
            PESHAWAR · ESTATE
          </span>
        </div>

        <div className="max-w-md mx-auto text-center space-y-4">
          <p className="text-[#c5a059] text-xs font-mono tracking-[0.3em] uppercase">
            Private Residence
          </p>
          <h1 className="font-serif text-3xl font-light text-white tracking-wide">
            Loading Experience
          </h1>

          {/* Progress Bar */}
          <div className="w-full bg-white/10 h-[2px] rounded-full overflow-hidden mt-6">
            <div
              className="bg-[#c5a059] h-full transition-all duration-300 ease-out"
              style={{ width: `${Math.max(5, loadPercentage)}%` }}
            />
          </div>

          <div className="text-xs font-mono text-stone-400">
            {loadPercentage}% Loaded ({loadedProgress}/{totalFrames} frames)
          </div>
        </div>

        <div className="text-[10px] font-mono text-stone-600 text-center">
          HIGH-DEFINITION CANVAS SEQUENCE ENGINE
        </div>
      </div>

      {/* --- MAIN WEBSITE BODY --- */}
      {/* Navigation */}
      <Navbar onOpenInquiry={openInquiryModal} />

      {/* 1. Hero Section (Scroll-Driven Frame Sequence) */}
      <CinematicHero
        getFrame={getFrame}
        isLoaded={isFirstFrameLoaded}
        loadedProgress={loadedProgress}
        onExploreClick={() => {
          const residenceEl = document.getElementById('residence');
          if (residenceEl) {
            residenceEl.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* 2. Property Info Section ("The Residence") */}
      <PropertyInfo />

      {/* 3. Architecture & Materiality Section */}
      <Architecture />

      {/* 4. Property Features & Amenities Section */}
      <Features />

      {/* 5. Interactive Floor Plan Section */}
      <FloorPlan />

      {/* 6. Gallery Section */}
      <Gallery />

      {/* 7. Final Grand CTA Section (Contains integrated bottom footer) */}
      <CTA onOpenInquiry={openInquiryModal} />

      {/* Tour Inquiry Modal */}
      <InquiryModal isOpen={isInquiryOpen} onClose={closeInquiryModal} />

    </div>
  );
};

export default App;
