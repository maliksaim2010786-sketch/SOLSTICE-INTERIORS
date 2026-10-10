import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Sparkles, Calendar, Calculator } from 'lucide-react';

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpace?: string;
}

export const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({
  isOpen,
  onClose,
  initialSpace = 'Residential Living Room'
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [spaceType, setSpaceType] = useState<string>(initialSpace);
  const [sqFt, setSqFt] = useState<number>(1450);
  const [stylePreference, setStylePreference] = useState<string>('Contemporary Dark Luxury');
  const [budgetTier, setBudgetTier] = useState<string>('$100,000 - $250,000');
  const [timeline, setTimeline] = useState<string>('3 - 6 Months');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const spaceOptions = [
    'Residential Living Room',
    'Culinary Architecture / Kitchen',
    'Private Master Suite',
    'Whole Penthouse / Residence',
    'Commercial Office / Boutique',
    'Architectural Lighting Commission'
  ];

  const styleOptions = [
    { title: 'Contemporary Dark Luxury', desc: 'Monolithic dark stones, 2700K ambient cove channels, brushed brass' },
    { title: 'Warm Organic Minimalist', desc: 'Travertine, bleached oak, linen bouclé, soft diffused daylight' },
    { title: 'European Classical Haute', desc: 'Bookmatched Italian marble, architectural moldings, heritage brass' },
    { title: 'Japandi Architectural', desc: 'Wabi-sabi timber slats, blackened steel, paper luminaires' }
  ];

  const budgetOptions = [
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    '$500,000+'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#0d0e13] border border-[#2e313c] rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#12141a] border-b border-[#23252f]">
          <div className="flex items-center gap-2.5">
            <Calculator className="w-5 h-5 text-[#fae2a5]" />
            <div>
              <h3 className="text-base font-display font-medium text-[#fcfbf9]">
                Architectural Consultation & Quote Estimator
              </h3>
              <p className="text-[11px] font-sans text-[#91887a]">
                Step {step} of 4 • Tailored Spatial Projection
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#181a22] text-[#8e8576] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#171922] h-1">
          <div
            className="h-full gold-gradient-bg transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#18201b] border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center mb-5">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-display font-medium text-[#fcfbf9]">
                Consultation Request Received
              </h4>
              <p className="mt-2 text-xs sm:text-sm font-sans text-[#a79f91] max-w-md mx-auto">
                Thank you, <span className="text-[#fae2a5] font-medium">{formData.name || 'valued client'}</span>. Our senior design director in{' '}
                <span className="text-[#fae2a5]">{formData.location || 'your region'}</span> will review your {sqFt} sq.ft {spaceType} brief and contact you within 24 business hours.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-[#13151c] border border-[#282a35] max-w-md mx-auto text-left text-xs font-sans space-y-1.5 text-[#cfc8b8]">
                <div className="flex justify-between">
                  <span className="text-[#888]">Space:</span>
                  <span className="text-white">{spaceType} ({sqFt} sq.ft)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#888]">Aesthetic:</span>
                  <span className="text-white">{stylePreference}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#888]">Target Budget:</span>
                  <span className="text-[#fae2a5] font-medium">{budgetTier}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="mt-8 gold-gradient-bg text-[#110e08] font-semibold text-xs tracking-wider uppercase px-7 py-3 rounded-sm font-sans cursor-pointer shadow-lg"
              >
                Return to Portfolio
              </button>
            </div>
          ) : (
            <div>
              {/* STEP 1: Space Type & Square Footage */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-sans tracking-wider uppercase text-[#c5bdae] mb-3">
                      Select Space Typology
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {spaceOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setSpaceType(opt)}
                          className={`p-3 rounded-lg text-left text-xs font-sans tracking-wide transition-all border cursor-pointer ${
                            spaceType === opt
                              ? 'bg-[#1e202b] border-[#fae2a5] text-[#fae2a5] shadow-[0_0_15px_rgba(212,163,89,0.2)]'
                              : 'bg-[#13151c] border-[#252733] text-[#a49b8d] hover:border-[#d4a359]/40 hover:text-[#e4ded2]'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs font-sans mb-2">
                      <span className="tracking-wider uppercase text-[#c5bdae]">Approximate Area</span>
                      <span className="font-semibold text-[#fae2a5]">{sqFt.toLocaleString()} sq.ft</span>
                    </div>
                    <input
                      type="range"
                      min={400}
                      max={8000}
                      step={50}
                      value={sqFt}
                      onChange={(e) => setSqFt(Number(e.target.value))}
                      className="w-full accent-[#d4a359] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-[#7d7568] mt-1 font-sans">
                      <span>400 sq.ft (Studio/Suite)</span>
                      <span>3,000 sq.ft (Penthouse)</span>
                      <span>8,000+ sq.ft (Private Estate)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Aesthetic Style */}
              {step === 2 && (
                <div className="space-y-4">
                  <label className="block text-xs font-sans tracking-wider uppercase text-[#c5bdae] mb-2">
                    Aesthetic Atmosphere Preference
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {styleOptions.map((style) => (
                      <div
                        key={style.title}
                        onClick={() => setStylePreference(style.title)}
                        className={`p-3.5 rounded-xl text-left border cursor-pointer transition-all ${
                          stylePreference === style.title
                            ? 'bg-[#1e202b] border-[#fae2a5] shadow-[0_0_15px_rgba(212,163,89,0.2)]'
                            : 'bg-[#13151c] border-[#252733] hover:border-[#d4a359]/40'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <h5 className="text-sm font-display font-medium text-[#fcfbf9]">
                            {style.title}
                          </h5>
                          {stylePreference === style.title && (
                            <Sparkles className="w-3.5 h-3.5 text-[#fae2a5]" />
                          )}
                        </div>
                        <p className="mt-1 text-xs text-[#a2998a] font-sans">
                          {style.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: Investment Tier & Timeline */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-sans tracking-wider uppercase text-[#c5bdae] mb-3">
                      Estimated Investment Tier
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudgetTier(b)}
                          className={`p-3.5 rounded-lg text-center text-xs font-sans tracking-wide transition-all border cursor-pointer ${
                            budgetTier === b
                              ? 'bg-[#1e202b] border-[#fae2a5] text-[#fae2a5] shadow-[0_0_15px_rgba(212,163,89,0.2)]'
                              : 'bg-[#13151c] border-[#252733] text-[#a49b8d] hover:border-[#d4a359]/40 hover:text-[#e4ded2]'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans tracking-wider uppercase text-[#c5bdae] mb-3">
                      Target Completion Timeline
                    </label>
                    <div className="grid grid-cols-3 gap-2 text-xs font-sans">
                      {['Immediate (< 3 Mo)', '3 - 6 Months', '6 - 12 Months'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTimeline(t)}
                          className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                            timeline === t
                              ? 'bg-[#1e202b] border-[#fae2a5] text-[#fae2a5]'
                              : 'bg-[#13151c] border-[#252733] text-[#a49b8d]'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Contact & Brief */}
              {step === 4 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#9d9586] mb-1 font-sans">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Lady Jacqueline Vance"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#14161f] border border-[#2b2d39] text-xs font-sans text-white focus:outline-none focus:border-[#fae2a5]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#9d9586] mb-1 font-sans">
                        Direct Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@luxuryestate.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#14161f] border border-[#2b2d39] text-xs font-sans text-white focus:outline-none focus:border-[#fae2a5]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#9d9586] mb-1 font-sans">
                        Telephone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (212) 555-0199"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#14161f] border border-[#2b2d39] text-xs font-sans text-white focus:outline-none focus:border-[#fae2a5]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#9d9586] mb-1 font-sans">
                        Property City / Country *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="Tribeca, New York or Zurich"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#14161f] border border-[#2b2d39] text-xs font-sans text-white focus:outline-none focus:border-[#fae2a5]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#9d9586] mb-1 font-sans">
                      Architectural Notes or Scope Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Double-height ceilings, bespoke wine cellar requirement, acoustic master bedroom..."
                      className="w-full px-3.5 py-2 rounded-lg bg-[#14161f] border border-[#2b2d39] text-xs font-sans text-white focus:outline-none focus:border-[#fae2a5]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full gold-gradient-bg hover:gold-gradient-bg-hover text-[#110e08] font-semibold text-xs tracking-wider uppercase py-3.5 rounded-sm shadow-lg font-sans cursor-pointer transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Confidential Consultation</span>
                    <Calendar className="w-4 h-4" />
                  </button>
                </form>
              )}

              {/* Navigation Steps Buttons */}
              {step < 4 && (
                <div className="mt-8 flex items-center justify-between pt-4 border-t border-[#232530]">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep((s) => (s - 1) as 1 | 2 | 3)}
                      className="px-4 py-2 rounded-lg text-xs font-sans text-[#a79f91] hover:text-white flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Previous
                    </button>
                  ) : <div />}

                  <button
                    type="button"
                    onClick={() => setStep((s) => (s + 1) as 2 | 3 | 4)}
                    className="gold-gradient-bg text-[#110e08] font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-sm flex items-center gap-2 cursor-pointer font-sans shadow-md"
                  >
                    Continue <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
