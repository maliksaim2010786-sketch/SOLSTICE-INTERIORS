import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { ArrowRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#07080a] border-t border-[#1a1b22] text-[#8e8576] font-sans pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1c1d25]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="md" />
            <p className="text-xs text-[#a39b8c] leading-relaxed max-w-sm mt-3">
              Solstice Interiors is an international architecture and interior atelier specializing in high-end private estates, penthouses, and bespoke commercial destinations.
            </p>
            <div className="pt-2 text-xs text-[#ded7ca]">
              <span className="text-[#888]">Inquiries:</span>{' '}
              <a href="mailto:atelier@solstice-interiors.com" className="text-[#fae2a5] hover:underline">
                atelier@solstice-interiors.com
              </a>
            </div>
          </div>

          {/* Ateliers */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#ded7ca] font-medium mb-3">
              Global Ateliers
            </h4>
            <ul className="text-xs space-y-2.5 text-[#9e9687]">
              <li>
                <strong className="text-[#cfc8b8] block">New York</strong>
                540 Hudson St, Tribeca
              </li>
              <li>
                <strong className="text-[#cfc8b8] block">London</strong>
                18 Berkeley Sq, Mayfair
              </li>
              <li>
                <strong className="text-[#cfc8b8] block">Zurich</strong>
                Gotthardstrasse 26
              </li>
              <li>
                <strong className="text-[#cfc8b8] block">Dubai</strong>
                DIFC Gate Precinct 4
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#ded7ca] font-medium mb-3">
              Portfolio
            </h4>
            <ul className="text-xs space-y-2 text-[#9e9687]">
              <li><a href="#projects" className="hover:text-[#fae2a5] transition-colors">Living Rooms</a></li>
              <li><a href="#projects" className="hover:text-[#fae2a5] transition-colors">Culinary Architecture</a></li>
              <li><a href="#projects" className="hover:text-[#fae2a5] transition-colors">Master Suites</a></li>
              <li><a href="#services" className="hover:text-[#fae2a5] transition-colors">Lighting Design</a></li>
              <li><a href="#materials" className="hover:text-[#fae2a5] transition-colors">Artisanal Finishes</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#ded7ca] font-medium mb-3">
              The Solstice Monograph
            </h4>
            <p className="text-xs text-[#9a9182] mb-3">
              Curated architectural dissertations and private salon invitations.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-[#fae2a5] p-2 bg-[#14161f] rounded border border-[#2b2d38]">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Subscribed with distinction.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter private email"
                  className="w-full px-3 py-2 bg-[#12141a] border border-[#262833] rounded text-xs text-white focus:outline-none focus:border-[#fae2a5]"
                />
                <button
                  type="submit"
                  className="w-full gold-gradient-bg text-[#110e08] font-medium text-xs tracking-wider uppercase py-2 rounded-sm flex items-center justify-center gap-1.5 cursor-pointer shadow"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Quiet Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#716a5e] gap-4">
          <p>© {new Date().getFullYear()} Solstice Interiors Atelier Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#a09787] cursor-pointer">Privacy Charter</span>
            <span>·</span>
            <span className="hover:text-[#a09787] cursor-pointer">Commission Terms</span>
            <span>·</span>
            <span className="hover:text-[#a09787] cursor-pointer">Press Inquiries</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
