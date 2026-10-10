import React, { useState } from 'react';
import { ROYAL_CREST_SUITES, RoomSuiteItem } from '../data/interiorData';
import { X, Calendar, CheckCircle2, Crown, Sparkles, CreditCard, ShieldCheck } from 'lucide-react';

interface SuiteBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSuiteTitle?: string;
}

export const SuiteBookingModal: React.FC<SuiteBookingModalProps> = ({
  isOpen,
  onClose,
  initialSuiteTitle = 'Deluxe Suite'
}) => {
  const [selectedSuiteId, setSelectedSuiteId] = useState<string>(() => {
    const found = ROYAL_CREST_SUITES.find((s) => s.title.toLowerCase().includes(initialSuiteTitle.toLowerCase()));
    return found ? found.id : ROYAL_CREST_SUITES[0].id;
  });

  const [checkIn, setCheckIn] = useState('2026-11-15');
  const [checkOut, setCheckOut] = useState('2026-11-18');
  const [guests, setGuests] = useState('2 Guests');
  const [rollsRoyceTransfer, setRollsRoyceTransfer] = useState(true);
  const [michelinDining, setMichelinDining] = useState(false);
  const [inSuiteSpa, setInSuiteSpa] = useState(false);

  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const currentSuite = ROYAL_CREST_SUITES.find((s) => s.id === selectedSuiteId) || ROYAL_CREST_SUITES[0];
  const priceNum = parseInt(currentSuite.pricePerNight.replace(/[^0-9]/g, '')) || 1450;
  const nights = 3;
  const suiteSubtotal = priceNum * nights;
  const transferFee = rollsRoyceTransfer ? 350 : 0;
  const diningFee = michelinDining ? 450 : 0;
  const spaFee = inSuiteSpa ? 280 : 0;
  const total = suiteSubtotal + transferFee + diningFee + spaFee;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = 'RC-' + Math.floor(1000 + Math.random() * 9000) + '-VIP';
    setBookingRef(randomCode);
    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#0c0d12] border border-[#2d303b] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#12141a] border-b border-[#232530]">
          <div className="flex items-center gap-2.5">
            <Crown className="w-5 h-5 text-[#fae2a5]" />
            <div>
              <h3 className="text-base font-display font-medium text-[#fcfbf9]">
                Royal Crest Reservation Concierge
              </h3>
              <p className="text-[11px] font-sans text-[#8f8576]">
                VIP Palatial Accommodation & Hospitality Booking
              </p>
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
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isBooked ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#18201a] border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="text-[11px] font-sans tracking-widest uppercase text-[#fae2a5]">
                Reservation Confirmed
              </span>
              <h4 className="text-2xl font-display font-medium text-[#fcfbf9] mt-1">
                Welcome to Royal Crest, {guestName || 'Valued Guest'}
              </h4>

              <div className="mt-4 inline-block px-4 py-1.5 rounded-md bg-[#161822] border border-[#d4a359]/40 text-xs font-mono text-[#fae2a5]">
                Booking Reference: {bookingRef}
              </div>

              <p className="mt-4 text-xs sm:text-sm text-[#aba292] font-sans max-w-md mx-auto leading-relaxed">
                Your reservation for the <strong className="text-white">{currentSuite.title}</strong> has been confirmed. Our Chief Concierge has dispatched your arrival itinerary to <span className="text-[#fae2a5]">{guestEmail || 'your email'}</span>.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-[#13151c] border border-[#262833] max-w-md mx-auto text-left text-xs font-sans space-y-2 text-[#cfc8b8]">
                <div className="flex justify-between">
                  <span className="text-[#888]">Suite:</span>
                  <span className="text-white">{currentSuite.title} ({currentSuite.area})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#888]">Dates:</span>
                  <span className="text-white">{checkIn} to {checkOut} ({nights} Nights)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#888]">Guests:</span>
                  <span className="text-white">{guests}</span>
                </div>
                {rollsRoyceTransfer && (
                  <div className="flex justify-between text-emerald-400">
                    <span>VIP Chauffeur:</span>
                    <span>Rolls-Royce Airport Fleet Included</span>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-[#232530] text-sm font-semibold">
                  <span className="text-white">Total Amount:</span>
                  <span className="text-[#fae2a5]">${total.toLocaleString()} USD</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="mt-7 gold-gradient-bg text-[#110e08] font-semibold text-xs tracking-wider uppercase px-8 py-3 rounded-sm font-sans cursor-pointer shadow-lg"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-6">
              {/* Suite Selection */}
              <div>
                <label className="block text-xs font-sans tracking-wider uppercase text-[#c2baaa] mb-2.5">
                  Select Suite Typology
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {ROYAL_CREST_SUITES.map((suite) => (
                    <div
                      key={suite.id}
                      onClick={() => setSelectedSuiteId(suite.id)}
                      className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                        selectedSuiteId === suite.id
                          ? 'bg-[#1e202b] border-[#fae2a5] text-white shadow-[0_0_15px_rgba(212,163,89,0.2)]'
                          : 'bg-[#12141a] border-[#252834] text-[#a49a8a] hover:border-[#d4a359]/40'
                      }`}
                    >
                      <div className="text-xs font-display font-medium text-[#fcfbf9]">{suite.title}</div>
                      <div className="text-[11px] font-mono text-[#fae2a5] mt-0.5">{suite.pricePerNight}</div>
                      <div className="text-[10px] text-[#7d7568] font-sans mt-0.5">{suite.area}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#938a7c] mb-1 font-sans">
                    Check-In Date
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#14161f] border border-[#2b2d39] text-xs font-sans text-white focus:outline-none focus:border-[#fae2a5]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#938a7c] mb-1 font-sans">
                    Check-Out Date
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#14161f] border border-[#2b2d39] text-xs font-sans text-white focus:outline-none focus:border-[#fae2a5]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#938a7c] mb-1 font-sans">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#14161f] border border-[#2b2d39] text-xs font-sans text-white focus:outline-none focus:border-[#fae2a5]"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4 Guests">4 Guests (Penthouse)</option>
                  </select>
                </div>
              </div>

              {/* VIP Bespoke Add-ons */}
              <div>
                <label className="block text-xs font-sans tracking-wider uppercase text-[#c2baaa] mb-2">
                  Bespoke Hospitality Add-Ons
                </label>
                <div className="space-y-2">
                  <label className="flex items-center justify-between p-3 rounded-lg bg-[#13151c] border border-[#232530] text-xs font-sans text-[#ded8cc] cursor-pointer hover:border-[#d4a359]/40">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={rollsRoyceTransfer}
                        onChange={(e) => setRollsRoyceTransfer(e.target.checked)}
                        className="accent-[#d4a359]"
                      />
                      <span>Rolls-Royce Phantom Chauffeur Airport Transit</span>
                    </div>
                    <span className="text-[#fae2a5] font-mono">+$350</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-lg bg-[#13151c] border border-[#232530] text-xs font-sans text-[#ded8cc] cursor-pointer hover:border-[#d4a359]/40">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={michelinDining}
                        onChange={(e) => setMichelinDining(e.target.checked)}
                        className="accent-[#d4a359]"
                      />
                      <span>3-Michelin Star Sommelier Pairing Dinner for Two</span>
                    </div>
                    <span className="text-[#fae2a5] font-mono">+$450</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-lg bg-[#13151c] border border-[#232530] text-xs font-sans text-[#ded8cc] cursor-pointer hover:border-[#d4a359]/40">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={inSuiteSpa}
                        onChange={(e) => setInSuiteSpa(e.target.checked)}
                        className="accent-[#d4a359]"
                      />
                      <span>In-Suite Sensory Hydrotherapy & Botanical Massage</span>
                    </div>
                    <span className="text-[#fae2a5] font-mono">+$280</span>
                  </label>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#938a7c] mb-1 font-sans">
                    Guest Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Baron Alexander Ward"
                    className="w-full px-3 py-2 rounded-lg bg-[#14161f] border border-[#2b2d39] text-xs font-sans text-white focus:outline-none focus:border-[#fae2a5]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#938a7c] mb-1 font-sans">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    placeholder="ward@privateoffice.com"
                    className="w-full px-3 py-2 rounded-lg bg-[#14161f] border border-[#2b2d39] text-xs font-sans text-white focus:outline-none focus:border-[#fae2a5]"
                  />
                </div>
              </div>

              {/* Price Calculation Summary Bar */}
              <div className="p-4 rounded-xl bg-[#13151e] border border-[#282b38] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#888] font-sans">
                    Estimated Investment ({nights} Nights)
                  </span>
                  <div className="text-xl font-display font-medium text-[#fae2a5] mt-0.5">
                    ${total.toLocaleString()} <span className="text-xs text-[#888]">USD</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#a2998a] font-sans">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>White-Glove Guarantee</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full gold-gradient-bg hover:gold-gradient-bg-hover text-[#110e08] font-semibold text-xs tracking-wider uppercase py-4 rounded-sm shadow-lg font-sans cursor-pointer transition-all flex items-center justify-center gap-2"
              >
                <span>Confirm Palatial Reservation</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
