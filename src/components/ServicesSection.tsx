import React from 'react';
import { ServiceItem, SOLSTICE_SERVICES } from '../data/interiorData';
import { Home, Building2, Lightbulb, Armchair, ChevronRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onRequestQuote: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home className="w-6 h-6 sm:w-7 sm:h-7 text-[#fae2a5] stroke-[1.4]" />;
      case 'building':
        return <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#fae2a5] stroke-[1.4]" />;
      case 'lamp':
        return <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-[#fae2a5] stroke-[1.4]" />;
      case 'armchair':
        return <Armchair className="w-6 h-6 sm:w-7 sm:h-7 text-[#fae2a5] stroke-[1.4]" />;
      default:
        return <Home className="w-6 h-6 text-[#fae2a5]" />;
    }
  };

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#0a0b0d] overflow-hidden">
      {/* Background Soft Glow Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-[#d4a359]/6 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching the image */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#fcfbf9] tracking-tight">
            Our Services
          </h2>

          {/* Elegant Gold Divider Line with Center Diamond Motif */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-r from-transparent via-[#d4a359]/60 to-[#d4a359]" />
            <div className="w-2 h-2 rotate-45 border border-[#fae2a5] bg-[#9e6f28]/40" />
            <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-l from-transparent via-[#d4a359]/60 to-[#d4a359]" />
          </div>

          <p className="mt-4 text-xs sm:text-sm font-sans tracking-widest uppercase text-[#9e9587] max-w-xl mx-auto">
            Comprehensive Architectural & Curatorial Disciplines
          </p>
        </div>

        {/* 4 Cards Grid - Matches layout and styling in the image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {SOLSTICE_SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group relative rounded-xl p-7 sm:p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-400 bg-gradient-to-b from-[#181a20]/90 to-[#101115]/95 border border-[#2d2f38] hover:border-[#d4a359]/60 hover:-translate-y-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.45)] hover:shadow-[0_15px_35px_rgba(212,163,89,0.18)]"
            >
              {/* Warm Golden Cove Glow Underneath Card on hover/rest */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#d4a359]/25 blur-lg rounded-full opacity-60 group-hover:opacity-100 group-hover:w-36 transition-all duration-400" />

              {/* Icon Container with subtle warm gold aura */}
              <div className="relative mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-b from-[#252833]/80 to-[#171920]/90 border border-[#d4a359]/30 flex items-center justify-center transition-all duration-300 group-hover:border-[#fae2a5] group-hover:shadow-[0_0_20px_rgba(212,163,89,0.3)]">
                  {getServiceIcon(service.iconName)}
                </div>
              </div>

              {/* Title & Subtitle matching the screenshot */}
              <h3 className="text-lg sm:text-xl font-display font-medium text-[#fcfbf8] group-hover:text-[#fae2a5] transition-colors leading-snug">
                {service.title}
              </h3>
              <p className="mt-1 text-xs sm:text-[13px] font-sans tracking-wide text-[#9d9486]">
                {service.subtitle}
              </p>

              {/* Gold Micro-Divider inside card */}
              <div className="w-8 h-[1px] bg-[#d4a359]/40 my-4 group-hover:w-14 transition-all duration-300" />

              {/* Short Description */}
              <p className="text-xs text-[#bcb5a7] font-sans leading-relaxed line-clamp-3 mb-4">
                {service.description}
              </p>

              {/* Action Hint */}
              <div className="mt-auto pt-2 flex items-center gap-1 text-[11px] font-sans tracking-wider uppercase text-[#d4a359] group-hover:text-[#fae2a5]">
                <span>Explore Scope</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
