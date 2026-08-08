import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-stone-400 text-xs font-mono py-16 px-6 md:px-12 lg:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-white/5 pb-12">
          <div className="flex items-center space-x-4">
            <span className="w-10 h-10 rounded-full border border-[#c5a059] flex items-center justify-center font-serif text-sm font-semibold text-[#c5a059]">
              R
            </span>
            <div>
              <span className="font-serif text-lg text-white font-light block">
                THE RESIDENCE
              </span>
              <span className="text-[10px] text-stone-500 uppercase tracking-widest">
                Peshawar · Khyber Estate
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-8 text-stone-300">
            <a href="#residence" className="hover:text-[#c5a059] transition-colors">Residence</a>
            <a href="#architecture" className="hover:text-[#c5a059] transition-colors">Architecture</a>
            <a href="#features" className="hover:text-[#c5a059] transition-colors">Features</a>
            <a href="#floorplan" className="hover:text-[#c5a059] transition-colors">Floor Plan</a>
            <a href="#gallery" className="hover:text-[#c5a059] transition-colors">Gallery</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#c5a059] text-stone-300 hover:text-white transition-all duration-300"
            title="Return to top"
          >
            <ArrowUp className="w-4 h-4 text-[#c5a059]" />
          </button>
        </div>

        {/* Bottom Legal Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <div>
            © {new Date().getFullYear()} The Residence Peshawar. All rights reserved. Architectural IP protected.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Terms of Representation</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Security Protocol</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
