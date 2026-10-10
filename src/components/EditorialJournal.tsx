import React, { useState } from 'react';
import { EDITORIAL_ARTICLES, EditorialArticle } from '../data/interiorData';
import { BookOpen, Clock, Calendar, ArrowRight, X, Sparkles } from 'lucide-react';

export const EditorialJournal: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<EditorialArticle | null>(null);

  return (
    <section id="journal" className="relative py-24 sm:py-32 bg-[#090a0d] border-t border-[#1d1f27] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151720] border border-[#d4a359]/30 mb-3 text-[11px] font-sans tracking-widest uppercase text-[#fae2a5]">
            <BookOpen className="w-3.5 h-3.5" />
            The Architectural Monograph
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#fcfbf9] tracking-tight">
            Design Theory & Engineering Papers
          </h2>
          <p className="mt-3 text-xs sm:text-sm font-sans tracking-wider uppercase text-[#9e9587] max-w-xl mx-auto">
            Essays on circadian lighting, cantilever tensile physics, and Tuscan stone sourcing
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {EDITORIAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="group relative rounded-xl overflow-hidden cursor-pointer bg-[#11131a] border border-[#262834] hover:border-[#d4a359]/70 transition-all duration-300 shadow-xl flex flex-col hover:-translate-y-1.5"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#161820]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.88] contrast-[1.08]"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0a0b0e]/85 backdrop-blur-md text-[10px] font-sans tracking-wider uppercase text-[#fae2a5] border border-[#d4a359]/30">
                  {article.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-[11px] text-[#8e8576] font-sans mb-2">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="text-lg font-display font-medium text-[#fcfbf9] group-hover:text-[#fae2a5] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="mt-2 text-xs text-[#a79f90] font-sans leading-relaxed line-clamp-3 mb-4">
                  {article.abstract}
                </p>

                <div className="mt-auto pt-3 border-t border-[#1f222b] flex items-center justify-between text-xs font-sans text-[#fae2a5]">
                  <span>Read Monograph</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Monograph Modal Reader */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-3xl max-h-[92vh] bg-[#0c0d12] border border-[#2d303b] rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 bg-[#12141a] border-b border-[#232530]">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-sans tracking-widest uppercase text-[#e5b869] px-2 py-0.5 rounded bg-[#1e202b]">
                  {activeArticle.category}
                </span>
                <span className="text-xs text-[#8e8576] font-sans">{activeArticle.date}</span>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1.5 rounded-lg bg-[#181a22] text-[#8e8576] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 sm:p-10 space-y-6">
              <div className="relative aspect-[21/9] w-full rounded-xl overflow-hidden border border-[#282a35]">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#fcfbf9] leading-tight">
                  {activeArticle.title}
                </h3>
                <p className="mt-2 text-xs font-sans text-[#fae2a5]">
                  By {activeArticle.author} • {activeArticle.readTime}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#13151f] border-l-2 border-[#d4a359] italic text-xs sm:text-sm text-[#ded8cc] font-serif leading-relaxed">
                "{activeArticle.abstract}"
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#beb5a5] font-sans leading-relaxed">
                {activeArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between px-6 py-4 bg-[#12141a] border-t border-[#232530]">
              <span className="text-xs text-[#888] font-sans">Solstice & Agenvo Architectural Press</span>
              <button
                onClick={() => setActiveArticle(null)}
                className="gold-gradient-bg text-[#110e08] text-xs font-semibold px-4 py-2 rounded-sm uppercase tracking-wider font-sans cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
