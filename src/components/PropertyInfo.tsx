import React, { useState, useEffect } from 'react';
import { BedDouble, Bath, Maximize, Trees, Car, Sparkles, X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

export const PropertyInfo: React.FC = () => {
  const [selectedBedroomIndex, setSelectedBedroomIndex] = useState<number | null>(null);

  const bedroomImages = [
    {
      src: '/Bedrooms/bedroom-1.jpeg',
      title: 'Primary Master Suite',
      subtitle: '1,100 SQ FT · Level 02',
      description: 'Features smoked black oak flooring, motor-driven frameless glass corner walls, and a private north-facing balcony overlooking the valley.',
    },
    {
      src: '/Bedrooms/bedroom-2.jpeg',
      title: 'East Horizon Suite',
      subtitle: '450 SQ FT · Level 02',
      description: 'Positioned to catch natural morning light with custom acoustic linen wall wraps and an integrated Italian marble writing desk.',
    },
    {
      src: '/Bedrooms/bedroom-3.jpeg',
      title: 'Penthouse Garden Suite',
      subtitle: '500 SQ FT · Level 02',
      description: 'Direct private access to the upper zen rooftop garden, double-height ceilings, and an en-suite freestanding stone bathtub.',
    },
    {
      src: '/Bedrooms/bedroom-4.jpeg',
      title: 'VIP Guest Sanctuary',
      subtitle: '420 SQ FT · Level 01',
      description: 'Ground floor guest sanctuary with secluded garden terrace entry, full biometric smart lock access, and automated blackout shades.',
    },
  ];

  // Handle keyboard navigation inside bedroom gallery modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedBedroomIndex === null) return;
      if (e.key === 'Escape') setSelectedBedroomIndex(null);
      if (e.key === 'ArrowRight') nextBedroom();
      if (e.key === 'ArrowLeft') prevBedroom();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedBedroomIndex]);

  const nextBedroom = () => {
    if (selectedBedroomIndex !== null) {
      setSelectedBedroomIndex((selectedBedroomIndex + 1) % bedroomImages.length);
    }
  };

  const prevBedroom = () => {
    if (selectedBedroomIndex !== null) {
      setSelectedBedroomIndex((selectedBedroomIndex - 1 + bedroomImages.length) % bedroomImages.length);
    }
  };

  const stats = [
    {
      label: 'Bedrooms',
      value: '05',
      detail: 'En-suite Luxury Suites',
      icon: BedDouble,
      isInteractive: true,
      badge: 'View 4 Suites Gallery',
    },
    { label: 'Bathrooms', value: '06', detail: 'Italian Marble Finishes', icon: Bath, isInteractive: false },
    { label: 'Living Space', value: '8,500', detail: 'Square Feet Built-Up', icon: Maximize, isInteractive: false },
    { label: 'Private Grounds', value: '0.75', detail: 'Acres Landscaped Estate', icon: Trees, isInteractive: false },
    { label: 'Subterranean Garage', value: '04', detail: 'Climate-Controlled Bays', icon: Car, isInteractive: false },
    { label: 'Wellness Spa', value: '01', detail: 'Heated Infinity Pool', icon: Sparkles, isInteractive: false },
  ];

  return (
    <section id="residence" className="relative bg-[#080808] text-white py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
      
      {/* Subtle Background Glow Leaks */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/10 pb-16 mb-20 gap-10">
          <div>
            <p className="text-[#c5a059] text-xs font-mono tracking-[0.3em] uppercase mb-4 flex items-center space-x-2">
              <span className="w-8 h-[1px] bg-[#c5a059]" />
              <span>01 · Overview</span>
            </p>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] text-white max-w-3xl">
              The Residence
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-stone-300 font-light text-base md:text-lg leading-relaxed mb-6">
              An architectural statement designed around natural light, soaring ceiling heights, and monolithic raw materials that age with grace.
            </p>
            <div className="inline-flex items-center space-x-3 text-xs font-mono text-stone-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#c5a059]" />
              <span>Completed 2025 · Private Possession</span>
            </div>
          </div>
        </div>

        {/* Editorial Key Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const isClickable = stat.isInteractive;

            return (
              <div
                key={stat.label}
                onClick={() => {
                  if (isClickable) setSelectedBedroomIndex(0);
                }}
                className={`group relative bg-[#0f0f0f] border rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                  isClickable
                    ? 'cursor-pointer border-[#c5a059]/40 hover:border-[#c5a059] hover:shadow-[#c5a059]/10 bg-gradient-to-b from-[#161410] to-[#0f0f0f]'
                    : 'border-white/10 hover:border-[#c5a059]/40'
                }`}
              >
                {/* Header Row */}
                <div className="flex items-start justify-between mb-8">
                  <span className="text-stone-500 font-mono text-xs">[{String(idx + 1).padStart(2, '0')}]</span>
                  
                  <div className="flex items-center space-x-2">
                    {isClickable && (
                      <span className="px-2.5 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/40 text-[#c5a059] text-[10px] font-mono uppercase tracking-wider flex items-center space-x-1.5 animate-pulse">
                        <Images className="w-3 h-3" />
                        <span>View Gallery</span>
                      </span>
                    )}
                    <div className="p-3 rounded-full bg-white/5 border border-white/10 text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-black transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="font-serif text-5xl sm:text-6xl font-light text-white tracking-tight mb-3 group-hover:text-[#c5a059] transition-colors">
                  {stat.value}
                </div>

                <div className="text-sm font-medium text-stone-200 uppercase tracking-wider mb-1">
                  {stat.label}
                </div>

                <div className="text-xs font-mono text-stone-500 flex items-center justify-between">
                  <span>{stat.detail}</span>
                  {isClickable && (
                    <span className="text-[#c5a059] font-semibold text-[11px] group-hover:underline">
                      Click to explore →
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* High-Impact Editorial Statement Quote */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#121212] via-[#161616] to-[#121212] border border-white/10 p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <span className="text-[#c5a059] text-xs font-mono tracking-widest uppercase block mb-3">
              Design Intent
            </span>
            <blockquote className="font-serif text-2xl sm:text-3xl font-light italic text-stone-200 leading-snug">
              "We didn't build a house to frame a view. We sculpted an environment where the boundary between shelter and landscape dissolves completely."
            </blockquote>
          </div>
          <div className="flex flex-col items-start lg:items-end border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-10 text-xs font-mono text-stone-400">
            <span className="text-white font-semibold text-sm mb-1">TARIQ HASAN ARCHITECTS</span>
            <span>Principal Lead Designer</span>
            <span className="text-[#c5a059] mt-2">AIA INTERNATIONAL AWARD</span>
          </div>
        </div>

      </div>

      {/* --- BEDROOM SUITES GALLERY MODAL --- */}
      {selectedBedroomIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8">
          
          {/* Close Button */}
          <button
            onClick={() => setSelectedBedroomIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            title="Close modal (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Image Button */}
          <button
            onClick={prevBedroom}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-black/50 hover:bg-white/20 text-white border border-white/20 transition-colors z-50"
            title="Previous Suite"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Image Button */}
          <button
            onClick={nextBedroom}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-black/50 hover:bg-white/20 text-white border border-white/20 transition-colors z-50"
            title="Next Suite"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Card Content Container */}
          <div className="max-w-5xl w-full bg-[#111111] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row my-auto">
            
            {/* Left: Large Suite Photograph */}
            <div className="relative lg:w-3/5 aspect-[4/3] lg:aspect-auto overflow-hidden bg-black">
              <img
                src={bedroomImages[selectedBedroomIndex].src}
                alt={bedroomImages[selectedBedroomIndex].title}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-md border border-white/10 text-xs font-mono text-[#c5a059]">
                SUITE 0{selectedBedroomIndex + 1} OF 04
              </div>
            </div>

            {/* Right: Suite Architectural Specs & Thumbnail Strip */}
            <div className="lg:w-2/5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              
              <div>
                <span className="text-xs font-mono text-[#c5a059] uppercase tracking-widest block mb-2">
                  {bedroomImages[selectedBedroomIndex].subtitle}
                </span>
                <h3 className="font-serif text-3xl text-white font-light mb-4">
                  {bedroomImages[selectedBedroomIndex].title}
                </h3>
                <p className="text-stone-300 font-light text-sm leading-relaxed">
                  {bedroomImages[selectedBedroomIndex].description}
                </p>
              </div>

              {/* Thumbnail Selector Strip */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest block">
                  Select Bedroom Suite
                </span>
                <div className="grid grid-cols-4 gap-2">
                  {bedroomImages.map((b, idx) => (
                    <button
                      key={b.title}
                      onClick={() => setSelectedBedroomIndex(idx)}
                      className={`relative aspect-[4/3] rounded-lg overflow-hidden border transition-all duration-300 ${
                        selectedBedroomIndex === idx
                          ? 'border-[#c5a059] ring-2 ring-[#c5a059]/40 opacity-100 scale-105'
                          : 'border-white/10 opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img src={b.src} alt={b.title} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

    </section>
  );
};
