import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md', showText = true }) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Handcrafted Geometric Gold Monogram Icon */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#9e6f28] via-[#e5b869] to-[#fae2a5] rounded-sm opacity-90 p-[1.5px] shadow-[0_0_15px_rgba(212,163,89,0.35)]">
          <div className="w-full h-full bg-[#0a0b0d] flex items-center justify-center">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4/5 h-4/5 text-[#e5b869]"
            >
              {/* Outer Hexagonal / Diamond Lines */}
              <polygon
                points="20,3 36,11 36,29 20,37 4,29 4,11"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-90"
              />
              {/* Internal Architectural Facets */}
              <path
                d="M20 3V20L36 29"
                stroke="#fae2a5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 20L4 29"
                stroke="#c49548"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 20L20 37"
                stroke="#fae2a5"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M12 7L28 15"
                stroke="#d4a359"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <circle cx="20" cy="20" r="2.2" fill="#fae2a5" />
            </svg>
          </div>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-brand tracking-[0.22em] text-[#f7e8cc] font-semibold text-base sm:text-lg leading-tight uppercase">
            SOLSTICE
          </span>
          <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.38em] text-[#a49987] font-medium uppercase mt-0.5">
            INTERIORS
          </span>
        </div>
      )}
    </div>
  );
};
