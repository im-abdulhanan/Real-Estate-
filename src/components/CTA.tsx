import React from 'react';
import { ArrowUpRight, Compass, PhoneCall, Mail, ArrowUp } from 'lucide-react';

interface CTAProps {
  onOpenInquiry: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenInquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative bg-[#080808] text-white pt-28 pb-10 px-6 md:px-12 lg:px-16 overflow-hidden border-t border-white/10 min-h-screen flex flex-col justify-between">
      
      {/* Background Frame Visual (Last Frame frame-0192.webp) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/frames/frame-0192.webp"
          alt="The Residence Final Frame"
          className="w-full h-full object-cover opacity-35 filter contrast-105 brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-[#080808]/90" />
      </div>

      {/* Main CTA Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center my-auto pt-8">
        
        {/* Eyebrow */}
        <p className="text-[#c5a059] text-xs font-mono tracking-[0.4em] uppercase mb-6 flex items-center justify-center space-x-3 [text-shadow:_0_1px_8px_rgb(0_0_0_/_80%)]">
          <span className="w-8 h-[1px] bg-[#c5a059]" />
          <span>Exclusive Private Offering</span>
          <span className="w-8 h-[1px] bg-[#c5a059]" />
        </p>

        {/* Big Statement Headline */}
        <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.02] mb-8 [text-shadow:_0_2px_20px_rgb(0_0_0_/_90%)]">
          Make This <br />
          <span className="italic font-normal text-[#c5a059]">Your Address</span>
        </h2>

        <p className="text-stone-200 font-light text-base md:text-xl max-w-2xl leading-relaxed mb-12 [text-shadow:_0_1px_10px_rgb(0_0_0_/_90%)]">
          Possession available for immediate acquisition. Private viewings are conducted under strict confidentiality.
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-md mb-12">
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#c5a059] text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-white transition-all duration-500 shadow-2xl shadow-[#c5a059]/20 flex items-center justify-center space-x-3 group"
          >
            <span>Request Private Viewing</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Direct Concierge Contact Strip */}
        <div className="pt-8 border-t border-white/15 w-full max-w-3xl flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-stone-300 gap-6">
          <div className="flex items-center space-x-2">
            <Compass className="w-4 h-4 text-[#c5a059]" />
            <span>ESTATE MANAGEMENT OFFICE</span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="tel:+920918842900" className="hover:text-white transition-colors flex items-center space-x-2">
              <PhoneCall className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>+92 (091) 884-2900</span>
            </a>
            <a href="mailto:concierge@theresidence.pk" className="hover:text-white transition-colors flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>concierge@theresidence.pk</span>
            </a>
          </div>
        </div>

      </div>

      {/* Integrated Final Footer Base Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-stone-400 gap-6">
        <div className="flex items-center space-x-3">
          <span className="w-7 h-7 rounded-full border border-[#c5a059] flex items-center justify-center font-serif text-[11px] font-semibold text-[#c5a059]">
            R
          </span>
          <span>© {new Date().getFullYear()} The Residence Peshawar. All rights reserved.</span>
        </div>

        <div className="flex items-center space-x-6 text-[11px]">
          <a href="#residence" className="hover:text-[#c5a059] transition-colors">Residence</a>
          <a href="#architecture" className="hover:text-[#c5a059] transition-colors">Architecture</a>
          <a href="#features" className="hover:text-[#c5a059] transition-colors">Features</a>
          <a href="#floorplan" className="hover:text-[#c5a059] transition-colors">Floor Plan</a>
          <a href="#gallery" className="hover:text-[#c5a059] transition-colors">Gallery</a>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-stone-200 hover:text-white transition-all border border-white/15 flex items-center justify-center"
          title="Return to top"
        >
          <ArrowUp className="w-4 h-4 text-[#c5a059]" />
        </button>
      </div>

    </section>
  );
};
