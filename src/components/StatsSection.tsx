import React from 'react';
import { ClipboardCheck, Box, Award } from 'lucide-react';
import { STATS_DATA } from '../data/interiorData';

export const StatsSection: React.FC = () => {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'clipboard':
        return <ClipboardCheck className="w-8 h-8 sm:w-10 sm:h-10 text-[#fae2a5] stroke-[1.4]" />;
      case 'cube':
        return <Box className="w-8 h-8 sm:w-10 sm:h-10 text-[#fae2a5] stroke-[1.4]" />;
      case 'shield':
        return <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#fae2a5] stroke-[1.4]" />;
      default:
        return <Award className="w-8 h-8 text-[#fae2a5]" />;
    }
  };

  return (
    <section className="relative py-14 sm:py-20 bg-[#090a0d] border-t border-b border-[#21232b]">
      {/* Subtle Warm Backdrop Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4a359]/8 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#2a2c36]/70">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-center gap-4 sm:gap-5 ${
                idx !== 0 ? 'pt-6 sm:pt-0 sm:pl-6 lg:pl-10' : ''
              }`}
            >
              {/* Golden Icon */}
              <div className="p-3 rounded-lg bg-[#15171f] border border-[#d4a359]/30 shadow-[0_0_20px_rgba(212,163,89,0.15)] shrink-0">
                {getStatIcon(stat.icon)}
              </div>

              {/* Counter & Label matching the screenshot */}
              <div className="text-left">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#fcfbf9] tracking-tight">
                  <span className="gold-gradient-text">{stat.value}</span>
                </div>
                <div className="text-xs sm:text-sm font-sans font-medium uppercase tracking-wider text-[#d2cbbe] mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#8e8576] font-sans hidden sm:block mt-0.5">
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
