import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Film, Waves, Cpu, Eye, ShieldCheck, Wine, Flame } from 'lucide-react';

export const Features: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(0);

  const featureList = [
    {
      id: '01',
      name: 'Private Dolby Atmos Cinema',
      tagline: '12-Seat Acoustic Sanctuary',
      description: 'Custom 4K Laser Projection paired with acoustically tuned fabric walls and plush motorized Italian leather recliners.',
      icon: Film,
      bgGradient: 'from-[#1e1724] to-[#0f0c13]',
      image: '/frames/frame-0060.webp',
    },
    {
      id: '02',
      name: 'Outdoor Infinity Pool & Spa',
      tagline: 'Heated Saltwater Horizon',
      description: '22-meter continuous rimless saltwater pool equipped with submerged hydrotherapy jets and underwater illumination.',
      icon: Waves,
      bgGradient: 'from-[#13222e] to-[#0c131a]',
      image: '/Spa/spa.jpeg',
    },
    {
      id: '03',
      name: 'Crestron Home Automation',
      tagline: 'Intelligent Space Control',
      description: 'Automated bio-adaptive circadian lighting, motorized window shades, and multi-zone HVAC controlled via touch panels or phone.',
      icon: Cpu,
      bgGradient: 'from-[#18261e] to-[#0d1611]',
      image: '/Living Space/living-space.jpeg',
    },
    {
      id: '04',
      name: '360° Panoramic Glazing',
      tagline: 'Swiss Minimal Frames',
      description: 'Ultra-clear low-iron glass panels spanning floor-to-ceiling with hidden floor tracks for true seamless indoor-outdoor flow.',
      icon: Eye,
      bgGradient: 'from-[#1f242e] to-[#11141b]',
      image: '/frames/frame-0010.webp',
    },
    {
      id: '05',
      name: '24/7 Biometric Security Perimeter',
      tagline: 'Military-Grade Privacy',
      description: 'Facial recognition entry gates, thermal infrared perimeter sensing, safe room infrastructure, and dedicated guardhouse quarters.',
      icon: ShieldCheck,
      bgGradient: 'from-[#2b1f1a] to-[#17110e]',
      image: '/villa/villa.jpeg',
    },
    {
      id: '06',
      name: 'Sommelier Wine Vault',
      tagline: '600-Bottle Climate Controlled',
      description: 'Precision temperature (12°C) and humidity management with custom oak rack displays behind UV-proof glass doors.',
      icon: Wine,
      bgGradient: 'from-[#291717] to-[#170c0c]',
      image: '/Bathrooms/bathroom-1.jpeg',
    },
    {
      id: '07',
      name: 'Courtyard Fire Lounge',
      tagline: 'Sunken Open-Air Hearth',
      description: 'Sunken granite seating pit framed by natural stone walls and gas-fired flame element for year-round evening gatherings.',
      icon: Flame,
      bgGradient: 'from-[#261f18] to-[#14100c]',
      image: '/Garage/garage.jpeg',
    },
  ];

  return (
    <section id="features" className="relative bg-[#080808] text-white py-32 px-6 md:px-12 lg:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-white/10 pb-12">
          <div>
            <p className="text-[#c5a059] text-xs font-mono tracking-[0.3em] uppercase mb-4 flex items-center space-x-2">
              <span className="w-8 h-[1px] bg-[#c5a059]" />
              <span>03 · Estate Amenities</span>
            </p>
            <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight leading-tight text-white">
              Curated Features
            </h2>
          </div>
          <p className="text-stone-400 font-mono text-xs max-w-xs">
            Every amenity has been engineered to luxury hospitality standards.
          </p>
        </div>

        {/* Layout: Left List + Right Dynamic Interactive Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Typography List (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/10">
            {featureList.map((item, index) => {
              const isSelected = hoveredFeature === index;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onClick={() => setHoveredFeature(index)}
                  className={`group cursor-pointer py-6 transition-all duration-300 flex items-center justify-between px-4 rounded-xl ${
                    isSelected ? 'bg-white/5' : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center space-x-6">
                    <span className="font-mono text-xs text-[#c5a059]">
                      [{item.id}]
                    </span>
                    <div>
                      <h3
                        className={`font-serif text-xl sm:text-2xl font-light transition-colors ${
                          isSelected ? 'text-[#c5a059]' : 'text-white group-hover:text-stone-200'
                        }`}
                      >
                        {item.name}
                      </h3>
                      <span className="text-xs font-mono text-stone-500 block mt-0.5">
                        {item.tagline}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <ArrowUpRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isSelected
                          ? 'text-[#c5a059] translate-x-1 -translate-y-1'
                          : 'text-stone-600 group-hover:text-stone-400'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic Preview Card (5 Cols) */}
          <div className="lg:col-span-5 sticky top-32">
            {hoveredFeature !== null && (
              <div
                className={`relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/20 bg-gradient-to-br ${featureList[hoveredFeature].bgGradient} p-8 flex flex-col justify-between shadow-2xl transition-all duration-500`}
              >
                {/* Background Image Preview */}
                {featureList[hoveredFeature].image && (
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={featureList[hoveredFeature].image}
                      alt={featureList[hoveredFeature].name}
                      className="w-full h-full object-cover opacity-45 filter contrast-105 brightness-90 scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-[#080808]/40" />
                  </div>
                )}

                {/* Header Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono text-stone-200 flex items-center space-x-2 shadow-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>VERIFIED AMENITY</span>
                  </div>
                  <span className="font-mono text-xs text-stone-300 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {featureList[hoveredFeature].id} / 07
                  </span>
                </div>

                {/* Center Icon Graphic */}
                <div className="relative z-10 my-auto flex justify-center py-8">
                  <div className="p-5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 shadow-xl">
                    {React.createElement(featureList[hoveredFeature].icon, {
                      className: 'w-16 h-16 text-[#c5a059] opacity-90 animate-pulse',
                    })}
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="relative z-10 space-y-3 bg-black/75 backdrop-blur-xl p-6 rounded-2xl border border-white/15 shadow-2xl">
                  <span className="text-[10px] font-mono tracking-widest text-[#c5a059] uppercase block">
                    {featureList[hoveredFeature].tagline}
                  </span>
                  <h4 className="font-serif text-2xl text-white font-light">
                    {featureList[hoveredFeature].name}
                  </h4>
                  <p className="text-xs text-stone-300 font-light leading-relaxed">
                    {featureList[hoveredFeature].description}
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
