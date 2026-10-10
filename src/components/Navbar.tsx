import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowUpRight, Crown } from 'lucide-react';

interface NavbarProps {
  onRequestQuote: () => void;
  onBookSuite: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuote, onBookSuite }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Solstice Interiors', href: '#services' },
    { label: 'Agenvo Engineering', href: '#agenvo' },
    { label: 'Royal Crest Suites', href: '#royal-crest' },
    { label: 'Materials', href: '#materials' },
    { label: 'Estimator', href: '#calculator' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0b0d]/92 backdrop-blur-md border-b border-[#26282e]/80 py-3 shadow-2xl shadow-black/60'
          : 'bg-[#0a0b0d]/60 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Mark */}
          <a href="#home" className="group flex items-center gap-3">
            <BrandLogo size="md" />
            <div className="hidden xl:flex items-center gap-2 pl-3 border-l border-[#2e313d] text-[10px] font-sans tracking-widest uppercase text-[#9e9587]">
              <span>Architecture</span>
              <span>•</span>
              <span>Engineering</span>
              <span>•</span>
              <span>Hospitality</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-sans tracking-widest uppercase text-[#c2bcaf] hover:text-[#fae2a5] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4a359] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Dual CTA Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onBookSuite}
              className="px-3.5 py-2 rounded-sm bg-[#161822] hover:bg-[#1f2230] border border-[#d4a359]/40 hover:border-[#fae2a5] text-xs font-sans tracking-wider uppercase text-[#fae2a5] flex items-center gap-1.5 transition-all cursor-pointer shadow"
            >
              <Crown className="w-3.5 h-3.5" />
              <span>Book Suite</span>
            </button>

            <button
              onClick={onRequestQuote}
              className="gold-gradient-bg hover:gold-gradient-bg-hover text-[#120e06] font-semibold text-xs tracking-wide px-4 py-2 rounded-sm shadow-[0_4px_20px_rgba(212,163,89,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5 cursor-pointer font-sans"
            >
              <span>Request Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onBookSuite}
              className="px-2.5 py-1.5 rounded-sm bg-[#161822] border border-[#d4a359]/40 text-[11px] font-sans text-[#fae2a5]"
            >
              Book
            </button>
            <button
              onClick={onRequestQuote}
              className="gold-gradient-bg text-[#120e06] text-[11px] font-medium px-2.5 py-1.5 rounded-sm font-sans"
            >
              Quote
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-[#dcd7cb] hover:text-[#fae2a5] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0d11]/98 border-b border-[#2a2b33] px-6 py-6 transition-all duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-sans tracking-widest uppercase text-[#dad5cb] hover:text-[#fae2a5] py-2 border-b border-[#1c1d24]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookSuite();
                }}
                className="w-full bg-[#161822] border border-[#d4a359]/50 text-[#fae2a5] font-medium text-xs tracking-wider uppercase py-2.5 rounded-sm text-center shadow cursor-pointer"
              >
                Book Suite
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full gold-gradient-bg text-[#120e06] font-medium text-xs tracking-wider uppercase py-2.5 rounded-sm text-center shadow cursor-pointer"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
