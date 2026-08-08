import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollPercentage(Math.min(100, Math.max(0, progress)));
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Residence', href: '#residence' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Features', href: '#features' },
    { name: 'Floor Plan', href: '#floorplan' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[50px] flex items-center transition-all duration-500 border-none ${
          isScrolled
            ? 'bg-white/[0.03] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]'
            : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* BRAND LOGO */}
          <a
            href="#"
            className="group flex items-center space-x-2.5 text-white transition-opacity hover:opacity-80"
          >
            <span className="w-7 h-7 rounded-full border border-[#c5a059] flex items-center justify-center font-serif text-[11px] font-semibold text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-black transition-all duration-300">
              R
            </span>
            <div className="flex flex-col">
              <span className="font-serif tracking-widest text-xs uppercase font-light text-white leading-none">
                THE RESIDENCE
              </span>
              <span className="text-[8px] font-mono tracking-widest text-stone-400 uppercase mt-0.5">
                Peshawar · Estate
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-mono tracking-widest uppercase text-stone-200 hover:text-[#c5a059] transition-colors relative py-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#c5a059] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT ACTIONS (TOUR BUTTON + MOBILE TOGGLE) */}
          <div className="flex items-center space-x-3">
            
            {/* Private Inquiry Button */}
            <button
              onClick={onOpenInquiry}
              className="hidden sm:flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-[#c5a059] text-black font-mono text-[10px] font-semibold tracking-wider uppercase hover:bg-white transition-all duration-300 shadow-md shadow-[#c5a059]/10"
            >
              <span>Request Tour</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* GOLD SCROLL PROGRESS INDICATOR LINE (FIXED AT NAVBAR BOTTOM) */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 overflow-hidden pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-[#c5a059] via-[#e8c57b] to-[#c5a059] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(197,160,89,0.9)]"
            style={{ width: `${scrollPercentage}%` }}
          />
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-[#080808]/98 backdrop-blur-2xl z-40 lg:hidden flex flex-col justify-between px-8 py-20 transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-8'
        }`}
      >
        <div className="flex flex-col space-y-8">
          <p className="text-xs font-mono tracking-widest text-[#c5a059] uppercase">
            Navigation Menu
          </p>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-3xl font-light text-white hover:text-[#c5a059] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col space-y-6">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenInquiry();
            }}
            className="w-full py-4 rounded-full bg-[#c5a059] text-black font-mono text-xs font-bold tracking-widest uppercase flex items-center justify-center space-x-2"
          >
            <span>Request Private Viewing</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <div className="text-xs font-mono text-stone-500 text-center">
            Peshawar, Pakistan · +92 (091) 884-2900
          </div>
        </div>
      </div>
    </>
  );
};
