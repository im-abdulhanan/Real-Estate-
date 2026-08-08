import React, { useState } from 'react';
import { Layers, MapPin, Check, Info } from 'lucide-react';

export const FloorPlan: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<number>(0);

  const levels = [
    {
      name: 'Ground Level',
      area: '4,200 SQ FT',
      rooms: [
        { name: 'Grand Entrance Foyer', size: '420 sq ft', desc: 'Double-height 7m ceiling with travertine portal.' },
        { name: 'Formal Living Pavilion', size: '980 sq ft', desc: 'Frameless glass corner overlooking infinity pool.' },
        { name: 'Chef & Prep Kitchen', size: '540 sq ft', desc: 'Custom Gaggenau appliances & marble island.' },
        { name: 'Dining Gallery', size: '460 sq ft', desc: 'Seating for 16 guests with wine vault access.' },
        { name: 'Courtyard Fire Lounge', size: '600 sq ft', desc: 'Sunken stone hearth pit.' },
      ],
      diagramSvg: (
        <svg viewBox="0 0 800 500" className="w-full h-full stroke-stone-600 fill-none stroke-[1.5]">
          {/* Walls outer */}
          <rect x="50" y="50" width="700" height="400" rx="12" className="stroke-[#c5a059] stroke-2" />
          {/* Room Dividers */}
          <line x1="300" y1="50" x2="300" y2="450" />
          <line x1="550" y1="50" x2="550" y2="300" />
          <line x1="300" y1="250" x2="550" y2="250" />
          <line x1="50" y1="220" x2="300" y2="220" />
          
          {/* Pool outline */}
          <rect x="570" y="320" width="160" height="110" rx="8" className="stroke-cyan-500/70 fill-cyan-950/20" />

          {/* Labels */}
          <text x="175" y="140" fill="#e5e5e5" fontSize="14" fontFamily="sans-serif" textAnchor="middle">ENTRANCE FOYER</text>
          <text x="175" y="340" fill="#e5e5e5" fontSize="14" fontFamily="sans-serif" textAnchor="middle">CHEF KITCHEN</text>
          <text x="425" y="150" fill="#e5e5e5" fontSize="16" fontFamily="sans-serif" textAnchor="middle">LIVING PAVILION</text>
          <text x="425" y="360" fill="#e5e5e5" fontSize="14" fontFamily="sans-serif" textAnchor="middle">DINING GALLERY</text>
          <text x="650" y="170" fill="#e5e5e5" fontSize="14" fontFamily="sans-serif" textAnchor="middle">FIRE LOUNGE</text>
          <text x="650" y="380" fill="#06b6d4" fontSize="12" fontFamily="sans-serif" textAnchor="middle">INFINITY POOL</text>
        </svg>
      ),
    },
    {
      name: 'Upper Level',
      area: '2,800 SQ FT',
      rooms: [
        { name: 'Primary Master Suite', size: '1,100 sq ft', desc: 'Dual spa bath, dressing room & private balcony.' },
        { name: 'Guest Bedroom 02', size: '420 sq ft', desc: 'En-suite bathroom with mountain garden view.' },
        { name: 'Guest Bedroom 03', size: '400 sq ft', desc: 'En-suite bathroom & fitted wardrobes.' },
        { name: 'Executive Library / Study', size: '380 sq ft', desc: 'Oak paneling & private balcony.' },
      ],
      diagramSvg: (
        <svg viewBox="0 0 800 500" className="w-full h-full stroke-stone-600 fill-none stroke-[1.5]">
          <rect x="100" y="50" width="600" height="400" rx="12" className="stroke-[#c5a059] stroke-2" />
          <line x1="400" y1="50" x2="400" y2="450" />
          <line x1="400" y1="250" x2="700" y2="250" />
          
          <text x="250" y="250" fill="#e5e5e5" fontSize="16" fontFamily="sans-serif" textAnchor="middle">PRIMARY MASTER SUITE</text>
          <text x="550" y="150" fill="#e5e5e5" fontSize="14" fontFamily="sans-serif" textAnchor="middle">EXECUTIVE LIBRARY</text>
          <text x="550" y="350" fill="#e5e5e5" fontSize="14" fontFamily="sans-serif" textAnchor="middle">SUITES 02 & 03</text>
        </svg>
      ),
    },
    {
      name: 'Subterranean Spa & Garage',
      area: '1,500 SQ FT',
      rooms: [
        { name: 'Dolby Atmos Cinema', size: '520 sq ft', desc: '12 luxury motorized acoustic recliners.' },
        { name: 'Wellness Spa & Sauna', size: '450 sq ft', desc: 'Dry cedar sauna, steam room & ice bath.' },
        { name: 'Climate Garage', size: '530 sq ft', desc: '4-car climate-controlled showcase bays.' },
      ],
      diagramSvg: (
        <svg viewBox="0 0 800 500" className="w-full h-full stroke-stone-600 fill-none stroke-[1.5]">
          <rect x="80" y="80" width="640" height="340" rx="12" className="stroke-[#c5a059] stroke-2" />
          <line x1="320" y1="80" x2="320" y2="420" />
          <line x1="520" y1="80" x2="520" y2="420" />

          <text x="200" y="250" fill="#e5e5e5" fontSize="15" fontFamily="sans-serif" textAnchor="middle">4-CAR GARAGE BAYS</text>
          <text x="420" y="250" fill="#e5e5e5" fontSize="15" fontFamily="sans-serif" textAnchor="middle">ATMOS CINEMA</text>
          <text x="620" y="250" fill="#e5e5e5" fontSize="15" fontFamily="sans-serif" textAnchor="middle">SPA & SAUNA</text>
        </svg>
      ),
    },
  ];

  return (
    <section id="floorplan" className="relative bg-[#0a0a0a] text-white py-32 px-6 md:px-12 lg:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[#c5a059] text-xs font-mono tracking-[0.3em] uppercase mb-4 flex items-center space-x-2">
              <span className="w-8 h-[1px] bg-[#c5a059]" />
              <span>04 · Architectural Layout</span>
            </p>
            <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-white">
              Spatial Distribution
            </h2>
          </div>

          {/* Level Switcher Tabs */}
          <div className="flex bg-[#141414] p-1.5 rounded-full border border-white/10">
            {levels.map((lvl, idx) => (
              <button
                key={lvl.name}
                onClick={() => setActiveLevel(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  activeLevel === idx
                    ? 'bg-[#c5a059] text-black font-semibold shadow-md'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {lvl.name}
              </button>
            ))}
          </div>
        </div>

        {/* Blueprint Viewer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive SVG Schematic Diagram (7 Cols) */}
          <div className="lg:col-span-7 bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden min-h-[380px] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#c5a059]">
                <Layers className="w-4 h-4" />
                <span>SCHEMATIC BLUEPRINT · LEVEL 0{activeLevel + 1}</span>
              </div>
              <span className="text-xs font-mono text-stone-500">
                TOTAL: {levels[activeLevel].area}
              </span>
            </div>

            {/* Diagram */}
            <div className="w-full aspect-[16/10] my-auto">
              {levels[activeLevel].diagramSvg}
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-stone-500">
              <span>SCALE 1:100 ARCHITECTURAL</span>
              <span>VECTOR PREVIEW</span>
            </div>
          </div>

          {/* Room Breakdown List (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono text-stone-400 uppercase tracking-widest mb-4">
              Level Specifications ({levels[activeLevel].name})
            </h3>

            {levels[activeLevel].rooms.map((room) => (
              <div
                key={room.name}
                className="bg-[#121212] border border-white/10 hover:border-[#c5a059]/40 p-5 rounded-2xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-serif text-lg text-white font-light">
                    {room.name}
                  </h4>
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-[#c5a059]">
                    {room.size}
                  </span>
                </div>
                <p className="text-xs font-light text-stone-400">
                  {room.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
