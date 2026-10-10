import React, { useState } from 'react';
import {
  ROYAL_CREST_SUITES,
  ROYAL_CREST_AMENITIES,
  ROOM_TIER_HIGHLIGHTS,
  RoomSuiteItem
} from '../data/interiorData';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Calendar,
  Users,
  Maximize2,
  Utensils,
  Flower2,
  Waves,
  Dumbbell,
  Car,
  Plane,
  HeartHandshake,
  Briefcase
} from 'lucide-react';

interface RoyalCrestSectionProps {
  onCheckAvailability: (suiteTitle?: string) => void;
  onSelectSuite: (suite: RoomSuiteItem) => void;
}

export const RoyalCrestSection: React.FC<RoyalCrestSectionProps> = ({
  onCheckAvailability,
  onSelectSuite,
}) => {
  const [activeSuiteIdx, setActiveSuiteIdx] = useState(0);

  const nextSuite = () => {
    setActiveSuiteIdx((prev) => (prev + 1) % ROYAL_CREST_SUITES.length);
  };

  const prevSuite = () => {
    setActiveSuiteIdx((prev) => (prev - 1 + ROYAL_CREST_SUITES.length) % ROYAL_CREST_SUITES.length);
  };

  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'spa':
        return <Flower2 className="w-7 h-7 text-[#fae2a5] stroke-[1.4]" />;
      case 'dining':
        return <Utensils className="w-7 h-7 text-[#fae2a5] stroke-[1.4]" />;
      case 'pool':
        return <Waves className="w-7 h-7 text-[#fae2a5] stroke-[1.4]" />;
      case 'fitness':
        return <Dumbbell className="w-7 h-7 text-[#fae2a5] stroke-[1.4]" />;
      case 'car':
        return <Car className="w-7 h-7 text-[#fae2a5] stroke-[1.4]" />;
      case 'jet':
        return <Plane className="w-7 h-7 text-[#fae2a5] stroke-[1.4]" />;
      case 'concierge':
        return <HeartHandshake className="w-7 h-7 text-[#fae2a5] stroke-[1.4]" />;
      case 'business':
        return <Briefcase className="w-7 h-7 text-[#fae2a5] stroke-[1.4]" />;
      default:
        return <Sparkles className="w-7 h-7 text-[#fae2a5]" />;
    }
  };

  return (
    <section id="royal-crest" className="relative py-24 sm:py-32 bg-[#090a0d] border-t border-[#1e2029] overflow-hidden">
      {/* Background Soft Gold Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-[#d4a359]/7 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ROYAL CREST Brand Header & Crown Monogram (From Image 2) */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          <div className="flex flex-col items-center mb-5">
            {/* Crown Monogram Shield */}
            <div className="w-12 h-12 rounded-lg bg-gradient-to-b from-[#211d13] to-[#12141a] border border-[#d4a359]/60 flex items-center justify-center p-2 shadow-[0_0_20px_rgba(212,163,89,0.3)] mb-2">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full text-[#fae2a5]">
                {/* Crown */}
                <path d="M12 14L15 20L20 12L25 20L28 14L28 24L12 24Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="12" cy="13" r="1.5" fill="#fae2a5" />
                <circle cx="20" cy="11" r="1.5" fill="#fae2a5" />
                <circle cx="28" cy="13" r="1.5" fill="#fae2a5" />
                {/* Monogram RC */}
                <text x="20" y="32" textAnchor="middle" fill="#fae2a5" fontSize="9" fontFamily="serif" fontWeight="bold">RC</text>
              </svg>
            </div>
            <span className="font-brand tracking-[0.34em] text-[#fae2a5] font-semibold text-lg sm:text-xl uppercase">
              ROYAL CREST
            </span>
            <span className="text-[9px] font-sans tracking-[0.4em] text-[#9c9182] uppercase mt-0.5">
              Luxury Hotels & Private Residences
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#fcfbf9] tracking-tight leading-[1.1] max-w-4xl">
            Welcome To
            <span className="block mt-1 sm:mt-2 italic font-cormorant gold-gradient-text drop-shadow-[0_4px_30px_rgba(212,163,89,0.35)]">
              The Epitome of Luxury
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base font-sans tracking-wide text-[#b8af9f] max-w-2xl leading-relaxed">
            Immerse yourself in unrivaled hospitality, bespoke presidential suites, and Michelin-starred dining calibrated to your exacting standards.
          </p>

          <div className="mt-7">
            <button
              onClick={() => onCheckAvailability()}
              className="gold-gradient-bg hover:gold-gradient-bg-hover text-[#110e08] font-semibold text-xs sm:text-sm tracking-wider uppercase px-9 py-4 rounded-sm shadow-[0_8px_30px_rgba(212,163,89,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5 cursor-pointer font-sans"
            >
              <Calendar className="w-4 h-4" />
              <span>Check Availability</span>
            </button>
          </div>
        </div>

        {/* Room Category Highlights: 3-column horizontal strip (From Image 2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-[#12141a]/90 border border-[#252834] mb-20 shadow-xl">
          {ROOM_TIER_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 flex flex-col items-center text-center ${
                idx !== 0 ? 'md:border-l md:border-[#262833]' : ''
              }`}
            >
              <span className="text-base sm:text-lg font-display font-medium text-[#fae2a5]">
                {item.tier}
              </span>
              <p className="mt-2 text-xs text-[#a49a8a] font-sans leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Section: "Discover Our Luxury Accommodations" (From Image 2) */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#fcfbf9] tracking-tight">
              Discover Our Luxury Accommodations
            </h3>
            <p className="mt-2 text-xs sm:text-sm font-sans tracking-widest uppercase text-[#9e9587]">
              Handcrafted Master Suites & Private Sanctuaries
            </p>
          </div>

          {/* Suites Grid / Carousel matching Image 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {ROYAL_CREST_SUITES.map((suite, idx) => {
              const isCurrent = activeSuiteIdx === idx;
              return (
                <div
                  key={suite.id}
                  onClick={() => onSelectSuite(suite)}
                  className={`group relative rounded-xl overflow-hidden cursor-pointer bg-[#11131a] border transition-all duration-400 shadow-2xl flex flex-col hover:-translate-y-1.5 ${
                    isCurrent ? 'border-[#fae2a5] shadow-[0_0_30px_rgba(212,163,89,0.2)]' : 'border-[#262834] hover:border-[#d4a359]/60'
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#161820]">
                    <img
                      src={suite.image}
                      alt={suite.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.9] contrast-[1.05]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090a0d] via-transparent to-transparent opacity-90" />
                    
                    {/* Price Tag */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded bg-[#0a0b0e]/85 backdrop-blur-md text-xs font-sans font-medium text-[#fae2a5] border border-[#d4a359]/30">
                      {suite.pricePerNight} <span className="text-[10px] text-[#aaa]">/ night</span>
                    </div>

                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0a0b0e]/85 backdrop-blur-md text-[10px] font-sans tracking-wider uppercase text-[#e5b869] border border-[#d4a359]/30">
                      {suite.tier}
                    </div>
                  </div>

                  <div className="p-6 text-center flex flex-col items-center flex-1">
                    <h4 className="text-xl font-display font-medium text-[#fcfbf9] group-hover:text-[#fae2a5] transition-colors">
                      {suite.title}
                    </h4>

                    {/* Dots indicator matching Image 2 */}
                    <div className="flex items-center justify-center gap-1.5 my-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#fae2a5]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#71695c]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#71695c]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#71695c]" />
                    </div>

                    <div className="flex items-center justify-center gap-3 text-xs text-[#9c9383] font-sans mb-4">
                      <span>{suite.area}</span>
                      <span>•</span>
                      <span>{suite.capacity}</span>
                      <span>•</span>
                      <span>{suite.bedType.split(' ')[0]} Bed</span>
                    </div>

                    <p className="text-xs text-[#b5ad9e] font-sans line-clamp-2 mb-5">
                      {suite.description}
                    </p>

                    <div className="mt-auto w-full pt-3 border-t border-[#1f222b] flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onCheckAvailability(suite.title);
                        }}
                        className="gold-gradient-bg text-[#110e08] text-xs font-medium px-4 py-2 rounded-sm tracking-wide font-sans cursor-pointer shadow hover:brightness-110 transition-all"
                      >
                        Reserve Suite
                      </button>
                      <span className="text-[11px] font-sans tracking-wider uppercase text-[#fae2a5] group-hover:underline">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section: "Hotel Amenities & Services" (8 Luxury Cards from Image 2) */}
        <div>
          <div className="text-center mb-14">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#fcfbf9] tracking-tight">
              Hotel Amenities & Services
            </h3>

            {/* Gold Divider */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-r from-transparent via-[#d4a359]/60 to-[#d4a359]" />
              <div className="w-2 h-2 rotate-45 border border-[#fae2a5] bg-[#9e6f28]/40" />
              <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-l from-transparent via-[#d4a359]/60 to-[#d4a359]" />
            </div>

            <p className="mt-3 text-xs sm:text-sm font-sans tracking-widest uppercase text-[#9e9587]">
              Uncompromising 5-Star Palatial Hospitality
            </p>
          </div>

          {/* 8 Amenities Grid matching Image 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROYAL_CREST_AMENITIES.map((amenity) => (
              <div
                key={amenity.id}
                className="group relative p-6 sm:p-7 rounded-xl bg-gradient-to-b from-[#13151d] to-[#0c0d12] border border-[#232631] hover:border-[#d4a359]/60 transition-all duration-300 shadow-xl flex flex-col items-center text-center hover:-translate-y-1"
              >
                {/* Subtle golden underglow on hover */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#d4a359]/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="mb-5 w-14 h-14 rounded-xl bg-[#191c26] border border-[#d4a359]/30 flex items-center justify-center group-hover:border-[#fae2a5] group-hover:shadow-[0_0_20px_rgba(212,163,89,0.25)] transition-all">
                  {getAmenityIcon(amenity.icon)}
                </div>

                <h4 className="text-lg font-display font-medium text-[#fcfbf9] group-hover:text-[#fae2a5] transition-colors">
                  {amenity.title}
                </h4>

                <span className="text-[11px] font-sans tracking-wider uppercase text-[#8f8576] mt-0.5">
                  {amenity.subtitle}
                </span>

                <div className="w-6 h-[1px] bg-[#d4a359]/40 my-3" />

                <p className="text-xs text-[#b1a99a] font-sans leading-relaxed">
                  {amenity.description}
                </p>

                <div className="mt-auto pt-4 text-[10px] font-mono text-[#d4a359] tracking-wider">
                  {amenity.hours}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
