import React, { useState } from 'react';
import { RoomSuiteItem } from '../data/interiorData';
import { X, Crown, Users, Sparkles, Check, ArrowRight } from 'lucide-react';

interface SuiteDetailModalProps {
  suite: RoomSuiteItem | null;
  onClose: () => void;
  onBookSuite: (suiteTitle: string) => void;
}

export const SuiteDetailModal: React.FC<SuiteDetailModalProps> = ({
  suite,
  onClose,
  onBookSuite,
}) => {
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  if (!suite) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c0d12] border border-[#2d303b] rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#12141a] border-b border-[#232530]">
          <div className="flex items-center gap-3">
            <Crown className="w-5 h-5 text-[#fae2a5]" />
            <div>
              <span className="text-[10px] font-sans tracking-widest uppercase text-[#e5b869]">
                Royal Crest {suite.tier}
              </span>
              <h3 className="text-lg font-display font-medium text-[#fcfbf9]">
                {suite.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#181a22] text-[#8e8576] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Main Photo */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#2b2d38] shadow-xl">
            <img
              src={suite.gallery[activeImgIdx] || suite.image}
              alt={suite.title}
              className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05]"
            />
            <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded bg-[#0a0b0e]/85 backdrop-blur-md text-sm font-sans font-medium text-[#fae2a5] border border-[#d4a359]/30">
              {suite.pricePerNight} <span className="text-xs text-[#aaa]">/ night</span>
            </div>
          </div>

          {/* Gallery Thumbnails */}
          {suite.gallery.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {suite.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIdx(idx)}
                  className={`relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border transition-all cursor-pointer ${
                    activeImgIdx === idx ? 'border-[#fae2a5] scale-102 shadow-lg' : 'border-[#262832] opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Quick Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#14161f] border border-[#252834]">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#8e8576] font-sans">
                Surface Area
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#e8e2d5] mt-0.5">{suite.area}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#8e8576] font-sans">
                Capacity
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#e8e2d5] mt-0.5">{suite.capacity}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#8e8576] font-sans">
                Bedding
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#e8e2d5] mt-0.5">{suite.bedType}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#8e8576] font-sans">
                Panoramic View
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#fae2a5] mt-0.5">{suite.view}</p>
            </div>
          </div>

          {/* Narrative & Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-base font-display font-medium text-[#fcfbf9]">
                Suite Architecture & Ambience
              </h4>
              <p className="text-xs sm:text-sm text-[#beb5a5] font-sans leading-relaxed">
                {suite.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider text-[#9d9485] font-sans mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#fae2a5]" />
                Signature Amenities
              </h4>
              <div className="space-y-2">
                {suite.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2 rounded bg-[#13151c] border border-[#242631] text-xs font-sans text-[#ded8cc]"
                  >
                    <Check className="w-3.5 h-3.5 text-[#fae2a5] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#12141a] border-t border-[#232530]">
          <span className="text-xs text-[#8c8375] font-sans">
            Ready to experience Royal Crest hospitality?
          </span>
          <button
            onClick={() => {
              onClose();
              onBookSuite(suite.title);
            }}
            className="gold-gradient-bg hover:gold-gradient-bg-hover text-[#110e08] font-semibold text-xs tracking-wider uppercase px-6 py-3 rounded-sm flex items-center gap-2 cursor-pointer font-sans shadow-md"
          >
            <span>Reserve {suite.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
