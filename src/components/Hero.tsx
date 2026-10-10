import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

interface HeroProps {
  onDiscoverProjects: () => void;
  onWatchTour: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverProjects, onWatchTour }) => {
  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 sm:pb-20">
      {/* Background Photography with Architectural Mood Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85"
          alt="Luxury modern interior with ambient architectural lighting"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-[1.08]"
        />
        {/* Dark Vignette & Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-[#0a0b0d]/70 to-[#0a0b0d]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d4a359]/12 via-transparent to-[#0a0b0d]/90" />
        
        {/* Subtle Ambient Light Glow Emitters matching the image */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#e5b869]/15 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#d4a359]/10 blur-[100px] pointer-events-none rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Luxury Ribbon Indicator */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171920]/80 border border-[#d4a359]/25 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(212,163,89,0.12)]">
          <Sparkles className="w-3.5 h-3.5 text-[#e5b869]" />
          <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#e8dfcf]">
            Haute Couture Interior Architecture
          </span>
        </div>

        {/* Main Headline reproducing the image */}
        <div className="relative my-2 sm:my-4">
          {/* Golden Light Streak Accent behind the title */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-48 sm:w-80 h-[2px] bg-gradient-to-r from-transparent via-[#fae2a5] to-transparent opacity-75 blur-[0.5px]" />
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.08] tracking-tight font-display font-medium text-[#fcfbf9]">
            Transform Your Space
            <span className="block mt-1 sm:mt-2 italic font-cormorant font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[82px] gold-gradient-text drop-shadow-[0_4px_30px_rgba(212,163,89,0.35)]">
              Into Timeless Luxury
            </span>
          </h1>

          {/* Golden Curved Luminous Underline Arc */}
          <div className="flex justify-center mt-3 sm:mt-4">
            <svg
              className="w-48 sm:w-72 h-4 text-[#e5b869]/60"
              viewBox="0 0 280 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 8C70 2 210 2 276 8"
                stroke="url(#goldCurve)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="goldCurve" x1="4" y1="8" x2="276" y2="8" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9e6f28" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#fae2a5" />
                  <stop offset="1" stopColor="#9e6f28" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Subtitle / Tagline from image */}
        <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base font-sans tracking-[0.16em] uppercase text-[#cfc8ba] flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span>Modern Design</span>
          <span className="text-[#e5b869] text-base leading-none">•</span>
          <span>Premium Quality</span>
          <span className="text-[#e5b869] text-base leading-none">•</span>
          <span>Tailored for You</span>
        </p>

        {/* CTA Buttons from the image */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* Primary Button: "Discover Projects →" */}
          <button
            onClick={onDiscoverProjects}
            className="w-full sm:w-auto group gold-gradient-bg hover:gold-gradient-bg-hover text-[#110e08] font-semibold text-sm tracking-wide px-7 py-3.5 rounded-sm shadow-[0_8px_30px_rgba(212,163,89,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer font-sans"
          >
            <span>Discover Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Secondary Button: "(▶) Watch Tour" */}
          <button
            onClick={onWatchTour}
            className="w-full sm:w-auto group bg-[#15171d]/80 hover:bg-[#1f222b]/90 text-[#f5eee1] border border-[#d4a359]/35 hover:border-[#d4a359]/70 px-6 py-3.5 rounded-sm backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer shadow-lg"
          >
            <div className="w-7 h-7 rounded-full bg-[#d4a359]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3.5 h-3.5 fill-[#fae2a5] text-[#fae2a5] ml-0.5" />
            </div>
            <span className="text-sm font-medium tracking-wide font-sans">
              Watch Tour
            </span>
          </button>
        </div>

        {/* Atmospheric Floating Specs Indicator */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-[#26282e]/60 w-full max-w-3xl grid grid-cols-3 gap-2 sm:gap-4 text-center">
          <div>
            <div className="text-[10px] sm:text-xs font-sans uppercase tracking-widest text-[#938b7d]">Style Paradigm</div>
            <div className="mt-1 text-xs sm:text-sm font-medium text-[#f0ebd9] font-sans">Contemporary Dark Warmth</div>
          </div>
          <div>
            <div className="text-[10px] sm:text-xs font-sans uppercase tracking-widest text-[#938b7d]">Lighting Curation</div>
            <div className="mt-1 text-xs sm:text-sm font-medium text-[#f0ebd9] font-sans">2700K Architectural Ambient</div>
          </div>
          <div>
            <div className="text-[10px] sm:text-xs font-sans uppercase tracking-widest text-[#938b7d]">Global Ateliers</div>
            <div className="mt-1 text-xs sm:text-sm font-medium text-[#f0ebd9] font-sans">New York • London • Dubai</div>
          </div>
        </div>
      </div>
    </section>
  );
};
