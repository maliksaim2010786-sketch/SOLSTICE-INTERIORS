import React, { useState } from 'react';
import { Calculator, Sparkles, Clock, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface ArchitecturalCostEstimatorProps {
  onRequestConsultation: (details: string) => void;
}

export const ArchitecturalCostEstimator: React.FC<ArchitecturalCostEstimatorProps> = ({
  onRequestConsultation,
}) => {
  const [typology, setTypology] = useState<'villa' | 'penthouse' | 'hospitality' | 'commercial'>('villa');
  const [area, setArea] = useState<number>(3500);
  const [finishGrade, setFinishGrade] = useState<'luxury' | 'haute'>('haute');
  const [sustainability, setSustainability] = useState<boolean>(true);

  // Base rate per square foot
  const baseRates = {
    villa: 380,
    penthouse: 290,
    hospitality: 320,
    commercial: 240,
  };

  const multiplier = finishGrade === 'haute' ? 1.35 : 1.0;
  const ecoMultiplier = sustainability ? 1.08 : 1.0;
  const totalCost = Math.round(area * baseRates[typology] * multiplier * ecoMultiplier);

  const structuralCost = Math.round(totalCost * 0.35);
  const interiorMillworkCost = Math.round(totalCost * 0.38);
  const lightingAndTechCost = Math.round(totalCost * 0.17);
  const permitsAndManagement = Math.round(totalCost * 0.10);

  const estimatedMonths = Math.round(4 + area / 800);

  return (
    <section id="calculator" className="relative py-24 sm:py-32 bg-[#08090b] border-t border-[#1d1f27] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151720] border border-[#d4a359]/30 mb-3 text-[11px] font-sans tracking-widest uppercase text-[#fae2a5]">
            <Calculator className="w-3.5 h-3.5" />
            Proprietary Spatial Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#fcfbf9] tracking-tight">
            Architectural Investment & Feasibility Estimator
          </h2>
          <p className="mt-3 text-xs sm:text-sm font-sans tracking-wider uppercase text-[#9e9587] max-w-xl mx-auto">
            Real-time projection model for private residences, commercial towers, and hotel suites
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-7 bg-[#11131a] border border-[#252834] rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            {/* Typology */}
            <div>
              <label className="block text-xs font-sans tracking-wider uppercase text-[#c2baaa] mb-2.5">
                1. Project Typology
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'villa', label: 'Cantilever Villa' },
                  { id: 'penthouse', label: 'Luxury Penthouse' },
                  { id: 'hospitality', label: '5-Star Suite' },
                  { id: 'commercial', label: 'Corporate Flagship' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTypology(t.id as any)}
                    className={`p-3 rounded-lg text-xs font-sans transition-all cursor-pointer border ${
                      typology === t.id
                        ? 'bg-[#1e202b] border-[#fae2a5] text-[#fae2a5] shadow-[0_0_15px_rgba(212,163,89,0.2)]'
                        : 'bg-[#14161f] border-[#22242f] text-[#8e8576] hover:text-[#ded8cb]'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Area Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-sans mb-2">
                <span className="tracking-wider uppercase text-[#c2baaa]">2. Spatial Area</span>
                <span className="text-sm font-mono font-medium text-[#fae2a5]">
                  {area.toLocaleString()} sq.ft
                </span>
              </div>
              <input
                type="range"
                min={800}
                max={15000}
                step={100}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full accent-[#d4a359] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#787163] mt-1 font-sans">
                <span>800 sq.ft (Boutique)</span>
                <span>6,000 sq.ft (Estate)</span>
                <span>15,000 sq.ft (Compound)</span>
              </div>
            </div>

            {/* Finish Grade */}
            <div>
              <label className="block text-xs font-sans tracking-wider uppercase text-[#c2baaa] mb-2.5">
                3. Material & Execution Grade
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  onClick={() => setFinishGrade('luxury')}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    finishGrade === 'luxury'
                      ? 'bg-[#1e202b] border-[#fae2a5]'
                      : 'bg-[#14161f] border-[#22242f] hover:border-[#d4a359]/40'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs font-display font-medium text-white">
                    <span>Haute Luxury Standard</span>
                    {finishGrade === 'luxury' && <Check className="w-3.5 h-3.5 text-[#fae2a5]" />}
                  </div>
                  <p className="text-[11px] text-[#938a7c] font-sans mt-1">
                    Honed Italian stone, brushed bronze, layered 2700K lighting.
                  </p>
                </div>

                <div
                  onClick={() => setFinishGrade('haute')}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    finishGrade === 'haute'
                      ? 'bg-[#1e202b] border-[#fae2a5]'
                      : 'bg-[#14161f] border-[#22242f] hover:border-[#d4a359]/40'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs font-display font-medium text-white">
                    <span>Museum / Palatial Grade</span>
                    {finishGrade === 'haute' && <Check className="w-3.5 h-3.5 text-[#fae2a5]" />}
                  </div>
                  <p className="text-[11px] text-[#938a7c] font-sans mt-1">
                    Bookmatched Calacatta Viola, titanium structural cantilevers.
                  </p>
                </div>
              </div>
            </div>

            {/* Sustainability Toggle */}
            <div className="pt-2">
              <label className="flex items-center justify-between p-3.5 rounded-xl bg-[#14161f] border border-[#22242f] cursor-pointer hover:border-[#d4a359]/40">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={sustainability}
                    onChange={(e) => setSustainability(e.target.checked)}
                    className="accent-[#d4a359]"
                  />
                  <div>
                    <div className="text-xs font-medium text-white font-sans">
                      Agenvo Net-Zero Energy & Geothermal Loop
                    </div>
                    <div className="text-[11px] text-[#8e8576] font-sans">
                      Closed-loop deep bore ground source heat pump + BIPV solar glass.
                    </div>
                  </div>
                </div>
                <span className="text-xs text-[#fae2a5] font-mono">+8% Capex</span>
              </label>
            </div>
          </div>

          {/* Projection Results Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#161822] to-[#0f1015] border border-[#2d303d] rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div>
              <span className="text-[11px] font-sans tracking-widest uppercase text-[#e5b869] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#fae2a5]" />
                Projected Turnkey Capital Investment
              </span>
              <div className="text-3xl sm:text-4xl font-display font-medium text-[#fcfbf9] mt-2">
                <span className="gold-gradient-text">${totalCost.toLocaleString()}</span>
                <span className="text-xs text-[#8e8576] font-sans ml-2">USD</span>
              </div>
              <p className="text-xs text-[#9d9486] font-sans mt-1">
                Avg. ${(Math.round(totalCost / area)).toLocaleString()} / sq.ft fully realized
              </p>
            </div>

            {/* Breakdown Categories */}
            <div className="space-y-3 pt-4 border-t border-[#252834]">
              <div className="flex justify-between text-xs font-sans">
                <span className="text-[#a49b8a]">Structural & Civil Engineering (35%)</span>
                <span className="text-white font-mono">${structuralCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs font-sans">
                <span className="text-[#a49b8a]">Bespoke Joinery & Materials (38%)</span>
                <span className="text-white font-mono">${interiorMillworkCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs font-sans">
                <span className="text-[#a49b8a]">Architectural Lighting & Smart Tech (17%)</span>
                <span className="text-white font-mono">${lightingAndTechCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs font-sans">
                <span className="text-[#a49b8a]">Permits, Code & White-Glove PM (10%)</span>
                <span className="text-white font-mono">${permitsAndManagement.toLocaleString()}</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#11131a] border border-[#262834]">
              <Clock className="w-5 h-5 text-[#fae2a5]" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#888] font-sans">
                  Estimated Handover Window
                </span>
                <p className="text-xs sm:text-sm font-medium text-[#e4ded3] font-sans">
                  {estimatedMonths} - {estimatedMonths + 3} Months (Turnkey Completion)
                </p>
              </div>
            </div>

            <button
              onClick={() => onRequestConsultation(`Calculated Project: ${area} sq.ft ${typology.toUpperCase()} ($${totalCost.toLocaleString()})`)}
              className="w-full gold-gradient-bg hover:gold-gradient-bg-hover text-[#110e08] font-semibold text-xs tracking-wider uppercase py-4 rounded-sm shadow-xl font-sans cursor-pointer transition-all flex items-center justify-center gap-2"
            >
              <span>Commission Architectural Feasibility Study</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#7a7265] font-sans">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Certified Cost Modeling • AIA & RIBA Standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
