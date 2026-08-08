import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Exterior', 'Interior', 'Landscape', 'Amenities'];

  // High resolution curated architectural gallery items using high-res estate photographs
  const galleryItems = [
    {
      id: 1,
      title: 'Monolithic Facade at Dusk',
      category: 'Exterior',
      aspect: 'col-span-1 md:col-span-8 aspect-[16/10]',
      src: '/villa/villa.jpeg',
      caption: 'Khyber travertine blocks reflecting evening ambient lighting across 0.75 acres.',
    },
    {
      id: 2,
      title: 'Grand Living Gallery',
      category: 'Interior',
      aspect: 'col-span-1 md:col-span-4 aspect-[4/5]',
      src: '/Living Space/living-space.jpeg',
      caption: 'Double-height volume with floor-to-ceiling Swiss glass panels and 7m ceiling clearance.',
    },
    {
      id: 3,
      title: 'Subterranean Infinity Pool',
      category: 'Amenities',
      aspect: 'col-span-1 md:col-span-4 aspect-[4/5]',
      src: '/Spa/spa.jpeg',
      caption: '22-meter heated rimless saltwater pool with acoustic cedar baffles.',
    },
    {
      id: 4,
      title: 'Primary Master Sanctuary',
      category: 'Interior',
      aspect: 'col-span-1 md:col-span-8 aspect-[16/10]',
      src: '/Bedrooms/bedroom-1.jpeg',
      caption: 'Smoked black oak flooring with private mountain terrace access.',
    },
    {
      id: 5,
      title: 'Courtyard Fire Lounge & Subterranean Bay',
      category: 'Landscape',
      aspect: 'col-span-1 md:col-span-6 aspect-[16/10]',
      src: '/Garage/garage.jpeg',
      caption: 'Sunken granite seating pit framed by native drought-resistant flora & subterranean garage bays.',
    },
    {
      id: 6,
      title: 'Italian Calacatta Marble Spa Bath',
      category: 'Amenities',
      aspect: 'col-span-1 md:col-span-6 aspect-[16/10]',
      src: '/Bathrooms/bathroom-1.jpeg',
      caption: 'Bookmatched Italian Calacatta marble with oversized soaking stone tub.',
    },
  ];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="relative bg-[#080808] text-white py-32 px-6 md:px-12 lg:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[#c5a059] text-xs font-mono tracking-[0.3em] uppercase mb-4 flex items-center space-x-2">
              <span className="w-8 h-[1px] bg-[#c5a059]" />
              <span>05 · Visual Record</span>
            </p>
            <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-white">
              Architectural Gallery
            </h2>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#c5a059] text-black font-semibold shadow-md'
                    : 'bg-white/5 text-stone-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-[#121212] ${item.aspect}`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#c5a059]">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-[#c5a059] uppercase tracking-widest block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-light mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300 font-light">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6 sm:p-12">
          
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-8 right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev / Next Nav */}
          <button
            onClick={prevLightbox}
            className="absolute left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextLightbox}
            className="absolute right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div className="max-w-5xl w-full flex flex-col items-center">
            <div className="relative max-h-[75vh] w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl mb-6">
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                className="w-full h-full object-contain max-h-[75vh] mx-auto"
              />
            </div>

            <div className="text-center max-w-xl">
              <span className="text-xs font-mono text-[#c5a059] uppercase tracking-widest block mb-1">
                {filteredItems[lightboxIndex].category} · {lightboxIndex + 1} OF {filteredItems.length}
              </span>
              <h3 className="font-serif text-2xl text-white font-light mb-2">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-stone-300 font-light">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>

        </div>
      )}
    </section>
  );
};
