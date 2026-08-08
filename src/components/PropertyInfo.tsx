import React from 'react';
import { BedDouble, Bath, Maximize, Trees, Car, Sparkles } from 'lucide-react';

export const PropertyInfo: React.FC = () => {
  const stats = [
    { label: 'Bedrooms', value: '05', detail: 'En-suite Luxury Suites', icon: BedDouble },
    { label: 'Bathrooms', value: '06', detail: 'Italian Marble Finishes', icon: Bath },
    { label: 'Living Space', value: '8,500', detail: 'Square Feet Built-Up', icon: Maximize },
    { label: 'Private Grounds', value: '0.75', detail: 'Acres Landscaped Estate', icon: Trees },
    { label: 'Subterranean Garage', value: '04', detail: 'Climate-Controlled Bays', icon: Car },
    { label: 'Wellness Spa', value: '01', detail: 'Heated Infinity Pool', icon: Sparkles },
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
            return (
              <div
                key={stat.label}
                className="group relative bg-[#0f0f0f] border border-white/10 hover:border-[#c5a059]/50 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#c5a059]/5"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="text-stone-500 font-mono text-xs">[{String(idx + 1).padStart(2, '0')}]</span>
                  <div className="p-3 rounded-full bg-white/5 border border-white/10 text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-black transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="font-serif text-5xl sm:text-6xl font-light text-white tracking-tight mb-3 group-hover:text-[#c5a059] transition-colors">
                  {stat.value}
                </div>

                <div className="text-sm font-medium text-stone-200 uppercase tracking-wider mb-1">
                  {stat.label}
                </div>

                <div className="text-xs font-mono text-stone-500">
                  {stat.detail}
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
    </section>
  );
};
