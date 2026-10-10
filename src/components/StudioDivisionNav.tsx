import React from 'react';
import { Home, Building2, Crown, Calculator, Sparkles } from 'lucide-react';

interface StudioDivisionNavProps {
  activeDivision: string;
  onSelectDivision: (divId: string) => void;
}

export const StudioDivisionNav: React.FC<StudioDivisionNavProps> = ({
  activeDivision,
  onSelectDivision,
}) => {
  const divisions = [
    {
      id: 'all',
      label: 'All Portfolios',
      icon: Sparkles,
      tag: 'Grand Collection'
    },
    {
      id: 'solstice',
      label: 'Solstice Interiors',
      icon: Home,
      tag: 'Haute Residences'
    },
    {
      id: 'agenvo',
      label: 'Agenvo Engineering',
      icon: Building2,
      tag: 'Architectural Pavilions'
    },
    {
      id: 'royal-crest',
      label: 'Royal Crest Suites',
      icon: Crown,
      tag: '5-Star Hospitality'
    },
    {
      id: 'calculator',
      label: 'Spatial Estimator',
      icon: Calculator,
      tag: 'Investment ROI'
    }
  ];

  return (
    <div className="sticky top-[68px] z-30 bg-[#0a0b0e]/92 backdrop-blur-md border-b border-[#21232d] py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 sm:gap-2">
          {divisions.map((div) => {
            const Icon = div.icon;
            const isActive = activeDivision === div.id;
            return (
              <button
                key={div.id}
                onClick={() => onSelectDivision(div.id)}
                className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-sans tracking-wide flex items-center gap-2 transition-all cursor-pointer shrink-0 border ${
                  isActive
                    ? 'gold-gradient-bg text-[#110e08] font-semibold shadow-[0_2px_12px_rgba(212,163,89,0.3)] border-transparent'
                    : 'bg-[#12141c] border-[#252834] text-[#a49a89] hover:text-[#fae2a5] hover:border-[#d4a359]/40'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#110e08]' : 'text-[#d4a359]'}`} />
                <span>{div.label}</span>
                <span className={`text-[10px] hidden md:inline px-1.5 py-0.2 rounded ${
                  isActive ? 'bg-black/20 text-[#110e08]' : 'bg-[#181a24] text-[#8e8576]'
                }`}>
                  {div.tag}
                </span>
              </button>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-2 text-[11px] text-[#938a7c] font-sans">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Ateliers Open: NYC • LND • ZUR • DXB</span>
        </div>
      </div>
    </div>
  );
};
