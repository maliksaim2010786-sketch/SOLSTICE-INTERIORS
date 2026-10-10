import React, { useState, useEffect } from 'react';
import { ATELIER_CONTACTS, AtelierContact } from '../data/interiorData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';

interface AtelierContactSectionProps {
  onRequestDirectBooking: () => void;
}

export const AtelierContactSection: React.FC<AtelierContactSectionProps> = ({
  onRequestDirectBooking,
}) => {
  const [selectedAtelier, setSelectedAtelier] = useState<AtelierContact>(ATELIER_CONTACTS[0]);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <section id="ateliers" className="relative py-24 sm:py-32 bg-[#08090b] border-t border-[#1d1f27] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151720] border border-[#d4a359]/30 mb-3 text-[11px] font-sans tracking-widest uppercase text-[#fae2a5]">
            <MapPin className="w-3.5 h-3.5" />
            Global Presence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#fcfbf9] tracking-tight">
            International Ateliers & Salons
          </h2>
          <p className="mt-3 text-xs sm:text-sm font-sans tracking-wider uppercase text-[#9e9587] max-w-xl mx-auto">
            Private consultations by appointment in New York, London, Zurich, and Dubai
          </p>
        </div>

        {/* 4 Ateliers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ATELIER_CONTACTS.map((atelier) => {
            const isSelected = selectedAtelier.city === atelier.city;
            return (
              <div
                key={atelier.city}
                onClick={() => setSelectedAtelier(atelier)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#181a24] border-[#fae2a5] shadow-[0_0_25px_rgba(212,163,89,0.25)] -translate-y-1'
                    : 'bg-[#11131a] border-[#242633] hover:border-[#d4a359]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#fae2a5] tracking-wider uppercase">
                      {atelier.timezone}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>

                  <h3 className="text-xl font-display font-medium text-[#fcfbf9]">
                    {atelier.city}
                  </h3>
                  <span className="text-xs text-[#8f8576] font-sans">{atelier.country}</span>

                  <p className="mt-4 text-xs text-[#b8b0a1] font-sans leading-relaxed">
                    {atelier.address}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#20222d] space-y-2 text-xs font-sans text-[#cfc8b8]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#d4a359]" />
                    <span>{atelier.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#d4a359]" />
                    <span className="truncate">{atelier.email}</span>
                  </div>
                  <div className="text-[11px] text-[#787163] pt-1">
                    Partner: {atelier.director}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Private Direct Dispatch Form */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#141620] to-[#0d0e14] border border-[#2b2d3a] rounded-2xl p-8 sm:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-[11px] font-sans tracking-widest uppercase text-[#e5b869] flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#fae2a5]" />
              Direct Communication to {selectedAtelier.city} Atelier
            </span>
            <h3 className="text-2xl font-display font-medium text-[#fcfbf9] mt-1">
              Dispatch a Confidential Brief
            </h3>
          </div>

          {isSent ? (
            <div className="text-center py-6">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
              <h4 className="text-lg font-display text-white">Dispatched with Distinction</h4>
              <p className="text-xs text-[#a2998a] font-sans mt-2 max-w-md mx-auto">
                Your direct inquiry has been transmitted to {selectedAtelier.director} at our {selectedAtelier.city} salon. Our partners will initiate private dialogue shortly.
              </p>
              <button
                onClick={() => setIsSent(false)}
                className="mt-6 gold-gradient-bg text-[#110e08] text-xs font-semibold px-6 py-2.5 rounded-sm uppercase tracking-wider font-sans cursor-pointer"
              >
                Send Another Dispatch
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#938a7c] mb-1 font-sans">
                    Full Name & Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="Countess Vivienne Sterling"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#11131a] border border-[#272935] text-xs font-sans text-white focus:outline-none focus:border-[#fae2a5]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#938a7c] mb-1 font-sans">
                    Confidential Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="client@privateoffice.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#11131a] border border-[#272935] text-xs font-sans text-white focus:outline-none focus:border-[#fae2a5]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#938a7c] mb-1 font-sans">
                  Brief or Property Overview
                </label>
                <textarea
                  rows={3}
                  required
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  placeholder={`Inquiring regarding a project in ${selectedAtelier.city} or international region...`}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#11131a] border border-[#272935] text-xs font-sans text-white focus:outline-none focus:border-[#fae2a5]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto gold-gradient-bg hover:gold-gradient-bg-hover text-[#110e08] font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-sm shadow-md font-sans cursor-pointer transition-all flex items-center justify-center gap-2"
                >
                  <span>Transmit to {selectedAtelier.city}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={onRequestDirectBooking}
                  className="text-xs font-sans text-[#fae2a5] hover:underline cursor-pointer"
                >
                  Or schedule a live video consultation with the director →
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
