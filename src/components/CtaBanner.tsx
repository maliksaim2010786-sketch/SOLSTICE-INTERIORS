import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  onStartJourney: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onStartJourney }) => {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#090a0d] overflow-hidden">
      {/* Dark Marble & Gold Vein Atmosphere Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2200&q=85"
          alt="Dark marble and architectural luxury interior"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-[#090a0d]/85 to-[#090a0d]/90" />
        
        {/* Golden Vein Ambient Light Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4a359]/15 blur-[120px] pointer-events-none rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Ornamental Sparkle */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b1c24]/90 border border-[#d4a359]/30 backdrop-blur-md mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#fae2a5]" />
          <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#ded7c8]">
            Private Consultation & Architectural Commissions
          </span>
        </div>

        {/* Primary CTA Button matching the image: "Start Your Journey" */}
        <div className="mb-6">
          <button
            onClick={onStartJourney}
            className="group gold-gradient-bg hover:gold-gradient-bg-hover text-[#120e06] font-semibold text-base sm:text-lg tracking-wide px-9 sm:px-11 py-4 sm:py-4.5 rounded-sm shadow-[0_8px_35px_rgba(212,163,89,0.4)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer font-sans"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
          </button>
        </div>

        {/* Signature Script Text matching the screenshot */}
        <div className="mt-4">
          <p className="font-script text-3xl sm:text-5xl md:text-6xl text-[#f5dfa5] drop-shadow-[0_2px_15px_rgba(212,163,89,0.35)] select-none">
            Let's Create Something Extraordinary
          </p>
        </div>

        <p className="mt-6 text-xs sm:text-sm font-sans tracking-widest uppercase text-[#9e9587] max-w-lg">
          Ateliers in New York • London • Zurich • Dubai
        </p>
      </div>
    </section>
  );
};
