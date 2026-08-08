import React, { useState } from 'react';
import { Layers, Sun, ShieldCheck, Box } from 'lucide-react';

export const Architecture: React.FC = () => {
  const [activeMaterial, setActiveMaterial] = useState<number>(0);

  const materials = [
    {
      title: 'Khyber Travertine Stone',
      origin: 'Locally Quarried Raw Stone',
      description: 'Honed by hand to retain natural porous textures that reflect golden hour mountain sunlight with soft warm tones.',
      spec: '120mm Monolithic Blocks',
      colorBg: 'from-[#2e261f] to-[#1a1714]',
      accentColor: '#c5a059',
    },
    {
      title: 'Smoked Black Oak',
      origin: 'Black Forest Sustainable Timber',
      description: 'Fumed with natural oil finishes to accentuate deep grain patterns while offering acoustic absorption across high-ceiling galleries.',
      spec: '22mm Engineered Plank',
      colorBg: 'from-[#1c1d22] to-[#0f1014]',
      accentColor: '#a89078',
    },
    {
      title: 'Architectural Glazing',
      origin: 'Custom Swiss Low-E Glass',
      description: 'Floor-to-ceiling motorized sliding glass panels engineered to withstand extreme mountain thermal shifts while maintaining 99% UV filtration.',
      spec: '3.8m Seamless Panes',
      colorBg: 'from-[#142226] to-[#0d1618]',
      accentColor: '#6da0a8',
    },
    {
      title: 'Brushed Patinated Bronze',
      origin: 'Hand-Crafted Metalworks',
      description: 'Custom portal doors, window trim mullions, and custom hardware that develop an evolving vintage patina over generations.',
      spec: 'Solid Brass & Bronze Coating',
      colorBg: 'from-[#281f18] to-[#16120e]',
      accentColor: '#d48d53',
    },
  ];

  const pillars = [
    {
      number: '01',
      title: 'LIGHT ORIENTATION',
      description: 'Positioned precisely to capture first dawn illumination through the eastern gallery while shading western exposures from harsh summer glare.',
      icon: Sun,
    },
    {
      number: '02',
      title: 'THERMAL MASS',
      description: 'Insulated 400mm concrete envelope absorbs ambient warmth during cold desert nights, reducing HVAC load by over 65%.',
      icon: Layers,
    },
    {
      number: '03',
      title: 'STRUCTURAL PERMANENCE',
      description: 'Cast-in-place seismic post-tensioned foundation tied into solid mountain bedrock for centuries of structural integrity.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="architecture" className="relative bg-[#0a0a0a] text-white py-32 px-6 md:px-12 lg:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-[#c5a059] text-xs font-mono tracking-[0.3em] uppercase mb-4 flex items-center space-x-2">
            <span className="w-8 h-[1px] bg-[#c5a059]" />
            <span>02 · Materiality & Design</span>
          </p>
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight leading-tight max-w-3xl text-white">
            Designed Around <br />
            <span className="italic text-stone-300">Light, Space & Permanence</span>
          </h2>
        </div>

        {/* 3 Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#121212] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-[#c5a059]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#c5a059] mb-8">
                    <span>{pillar.number}</span>
                    <Icon className="w-5 h-5 text-stone-400" />
                  </div>
                  <h3 className="font-mono text-sm tracking-widest uppercase font-semibold text-white mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-stone-400 font-light text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 text-[10px] font-mono text-stone-500 uppercase tracking-widest">
                  Engineering Standard ISO-9001
                </div>
              </div>
            );
          })}
        </div>

        {/* Materiality Interactive Showcase */}
        <div className="rounded-3xl bg-[#121212] border border-white/10 p-8 md:p-12">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-white/10 pb-8 mb-10 gap-4">
            <div>
              <span className="text-[#c5a059] text-xs font-mono tracking-widest uppercase block mb-1">
                MATERIAL PALETTE
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-light">
                Tactile Luxury & Craftsmanship
              </h3>
            </div>

            {/* Material Selector Buttons */}
            <div className="flex flex-wrap gap-2">
              {materials.map((mat, i) => (
                <button
                  key={mat.title}
                  onClick={() => setActiveMaterial(i)}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                    activeMaterial === i
                      ? 'bg-[#c5a059] text-black font-semibold shadow-lg shadow-[#c5a059]/20'
                      : 'bg-white/5 text-stone-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  0{i + 1}. {mat.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Material Detail Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Material Sample Card */}
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${materials[activeMaterial].colorBg} transition-all duration-700 flex flex-col justify-between p-8`}
              >
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10 text-[10px] font-mono text-stone-300">
                    SPECIMEN 0{activeMaterial + 1}
                  </span>
                  <Box
                    className="w-6 h-6"
                    style={{ color: materials[activeMaterial].accentColor }}
                  />
                </div>

                {/* Decorative Texture Graphic Lines */}
                <div className="relative z-10">
                  <div
                    className="h-1 w-24 mb-4 rounded"
                    style={{ backgroundColor: materials[activeMaterial].accentColor }}
                  />
                  <span className="font-serif text-3xl text-white font-light block">
                    {materials[activeMaterial].title}
                  </span>
                  <span className="text-xs font-mono text-stone-400">
                    {materials[activeMaterial].origin}
                  </span>
                </div>
              </div>
            </div>

            {/* Specs & Description */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono text-[#c5a059] uppercase tracking-widest block mb-2">
                  Origin & Characteristics
                </span>
                <h4 className="font-serif text-2xl text-white font-light mb-4">
                  {materials[activeMaterial].title}
                </h4>
                <p className="text-stone-300 font-light text-base leading-relaxed">
                  {materials[activeMaterial].description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-stone-500 block uppercase mb-1">Specification</span>
                  <span className="text-white">{materials[activeMaterial].spec}</span>
                </div>
                <div>
                  <span className="text-stone-500 block uppercase mb-1">Durability Rating</span>
                  <span className="text-[#c5a059]">Grade-A Lifetime</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
