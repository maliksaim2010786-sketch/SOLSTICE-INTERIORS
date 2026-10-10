import React, { useState } from 'react';
import { Crown, Sparkles, X, Calendar, Phone, ArrowUpRight, Compass } from 'lucide-react';

interface FloatingConciergeProps {
  onOpenBooking: () => void;
  onOpenQuote: () => void;
  onOpenTour: () => void;
}

export const FloatingConcierge: React.FC<FloatingConciergeProps> = ({
  onOpenBooking,
  onOpenQuote,
  onOpenTour,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Quick Menu Popover */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 rounded-2xl bg-[#0e1017]/96 backdrop-blur-xl border border-[#d4a359]/50 shadow-2xl p-5 text-left animate-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#232532]">
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-[#fae2a5]" />
              <span className="text-xs font-brand tracking-widest text-[#fae2a5] font-semibold">
                ROYAL CONCIERGE
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded text-[#888] hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="mt-2.5 text-[11px] text-[#b8b0a0] font-sans leading-relaxed">
            Welcome. How may our ateliers and palatial hospitality team assist you today?
          </p>

          <div className="mt-4 space-y-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="w-full p-2.5 rounded-lg bg-[#151822] hover:bg-[#1f2230] border border-[#2b2e3d] hover:border-[#fae2a5] text-left text-xs font-sans text-white flex items-center justify-between transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#d4a359]" />
                <span>Reserve Royal Crest Suite</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#888]" />
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenQuote();
              }}
              className="w-full p-2.5 rounded-lg bg-[#151822] hover:bg-[#1f2230] border border-[#2b2e3d] hover:border-[#fae2a5] text-left text-xs font-sans text-white flex items-center justify-between transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#d4a359]" />
                <span>Request Architectural Quote</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#888]" />
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenTour();
              }}
              className="w-full p-2.5 rounded-lg bg-[#151822] hover:bg-[#1f2230] border border-[#2b2e3d] hover:border-[#fae2a5] text-left text-xs font-sans text-white flex items-center justify-between transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#d4a359]" />
                <span>Launch 3D Cinematic Tour</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#888]" />
            </button>
          </div>

          <div className="mt-4 pt-3 border-t border-[#232532] flex items-center justify-between text-[10px] text-[#8e8576] font-sans">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Concierge Desk Online
            </span>
            <a href="tel:+12125550199" className="text-[#fae2a5] hover:underline flex items-center gap-1">
              <Phone className="w-3 h-3" /> Direct Call
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative gold-gradient-bg hover:gold-gradient-bg-hover text-[#110e08] p-3 sm:px-4 sm:py-3 rounded-full sm:rounded-full shadow-[0_8px_30px_rgba(212,163,89,0.45)] transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer font-sans"
        aria-label="Open Royal Concierge"
      >
        <Crown className="w-4 h-4 text-[#110e08]" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wider uppercase font-sans">
          Royal Concierge
        </span>
      </button>
    </div>
  );
};
