import React, { useState } from 'react';
import { FAQ_DATA, FaqItem } from '../data/interiorData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Process', 'Materials', 'Timeline', 'Hospitality'];

  const filteredFaqs = activeCategory === 'All'
    ? FAQ_DATA
    : FAQ_DATA.filter((f) => f.category === activeCategory);

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#090a0d] border-t border-[#1d1f27] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151720] border border-[#d4a359]/30 mb-3 text-[11px] font-sans tracking-widest uppercase text-[#fae2a5]">
            <HelpCircle className="w-3.5 h-3.5" />
            Client Inquiries & Clarifications
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#fcfbf9] tracking-tight">
            Frequently Addressed Questions
          </h2>
          <p className="mt-3 text-xs sm:text-sm font-sans tracking-wider uppercase text-[#9e9587]">
            Understanding our global procurement, civil engineering standards, and turnkey deliverables
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-sans transition-all cursor-pointer border ${
                  activeCategory === c
                    ? 'gold-gradient-bg text-[#110e08] font-semibold border-transparent shadow'
                    : 'bg-[#12141a] border-[#252834] text-[#9c9384] hover:text-[#fae2a5]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#11131a] border border-[#232532] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-display font-medium text-[#fcfbf9] leading-snug">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full bg-[#181a24] text-[#fae2a5] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#b5ad9e] font-sans leading-relaxed border-t border-[#1d1f2b]">
                    <p>{faq.a}</p>
                    <div className="mt-3 text-[10px] uppercase font-sans tracking-widest text-[#d4a359]">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
