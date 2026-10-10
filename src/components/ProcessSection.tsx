import React from 'react';
import { PROCESS_STEPS } from '../data/interiorData';
import { Compass } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#090a0d] border-t border-[#1d1f27] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151720] border border-[#d4a359]/30 mb-3 text-[11px] font-sans tracking-widest uppercase text-[#fae2a5]">
            <Compass className="w-3.5 h-3.5" />
            The Architectural Journey
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#fcfbf9] tracking-tight">
            Our Architectural Method
          </h2>
          <p className="mt-3 text-xs sm:text-sm font-sans tracking-wider uppercase text-[#9a9183] max-w-xl mx-auto">
            From preliminary volumetric sketches to turnkey white-glove handover
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative p-7 rounded-xl bg-gradient-to-b from-[#161820] to-[#0f1014] border border-[#262833] hover:border-[#d4a359]/50 transition-all duration-300 flex flex-col group"
            >
              {/* Step Number in Gold Display font */}
              <div className="text-3xl sm:text-4xl font-display font-semibold gold-gradient-text mb-4">
                {step.step}
              </div>

              <h3 className="text-lg font-display font-medium text-[#fcfbf9] group-hover:text-[#fae2a5] transition-colors">
                {step.title}
              </h3>

              <div className="w-8 h-[1px] bg-[#d4a359]/40 my-3" />

              <p className="text-xs sm:text-sm text-[#aba394] font-sans leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
