import React, { useState } from 'react';
import { TESTIMONIALS_DATA, PRESS_ACCOLADES } from '../data/interiorData';
import { Star, Award, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const TestimonialsPress: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextTestimonial = () => {
    setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const t = TESTIMONIALS_DATA[currentIdx];

  return (
    <section className="relative py-20 sm:py-28 bg-[#08090b] border-t border-[#1d1f27] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Press Accolades Bar */}
        <div className="mb-16 pb-12 border-b border-[#1c1e27]">
          <div className="text-center mb-8">
            <span className="text-[10px] font-sans tracking-widest uppercase text-[#9e9587]">
              Critically Acclaimed By International Architectural Authorities
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {PRESS_ACCOLADES.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0f1117] border border-[#232530] flex flex-col items-center justify-center">
                <span className="text-sm font-display font-medium text-[#fcfbf9]">
                  {item.name}
                </span>
                <span className="text-[10px] text-[#fae2a5] font-sans mt-1">
                  {item.accolade}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative bg-[#101219] border border-[#262835] rounded-2xl p-8 sm:p-12 shadow-2xl text-center">
          <Quote className="w-10 h-10 text-[#d4a359]/30 mx-auto mb-4" />

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#fae2a5] text-[#fae2a5]" />
            ))}
          </div>

          <p className="text-lg sm:text-2xl font-serif italic text-[#f4efe4] leading-relaxed max-w-2xl mx-auto">
            "{t.quote}"
          </p>

          <div className="mt-8">
            <h4 className="text-base font-display font-medium text-[#fae2a5]">
              {t.author}
            </h4>
            <p className="text-xs font-sans text-[#a79f8f] mt-0.5">
              {t.title} • <span className="text-white">{t.project}</span>
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-[#181a24] border border-[#2b2d39] text-[#9e9587] hover:text-white hover:border-[#fae2a5] transition-colors cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-[#888]">
              {currentIdx + 1} / {TESTIMONIALS_DATA.length}
            </span>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-[#181a24] border border-[#2b2d39] text-[#9e9587] hover:text-white hover:border-[#fae2a5] transition-colors cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
