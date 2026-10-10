import React, { useState } from 'react';
import { Sparkles, Palette, Sun, Moon, Sliders, Check, ArrowRight } from 'lucide-react';

interface MoodboardDesignerProps {
  onInquireWithPalette: (details: string) => void;
}

export const MoodboardDesigner: React.FC<MoodboardDesignerProps> = ({
  onInquireWithPalette,
}) => {
  const [selectedStone, setSelectedStone] = useState<'viola' | 'nero' | 'travertine' | 'basalt'>('viola');
  const [selectedWood, setSelectedWood] = useState<'smoked-oak' | 'walnut' | 'bleached-ash'>('smoked-oak');
  const [selectedMetal, setSelectedMetal] = useState<'brass' | 'blackened' | 'bronze'>('brass');
  const [lightKelvin, setLightKelvin] = useState<number>(2700);

  const stoneOptions = {
    viola: { name: 'Calacatta Viola', color: '#3d252d', origin: 'Carrara, Italy', desc: 'Dramatic deep wine breccia on milk-white field' },
    nero: { name: 'Nero Marquina', color: '#16181d', origin: 'Basque, Spain', desc: 'Monolithic charcoal stone with delicate white calcite veins' },
    travertine: { name: 'Titanium Travertine', color: '#685c4f', origin: 'Tivoli, Italy', desc: 'Tactile linear pores with silver-earth banding' },
    basalt: { name: 'Honed Lava Basalt', color: '#25272a', origin: 'Reykjavik, Iceland', desc: 'Micro-crystalline ultra-matte volcanic mineral' }
  };

  const woodOptions = {
    'smoked-oak': { name: 'Smoked French Oak', color: '#322820', desc: 'Fumed deep amber grain, wire-brushed texture' },
    walnut: { name: 'Canaletto Walnut', color: '#4a3728', desc: 'Organic chocolate heartwood with undulating swirls' },
    'bleached-ash': { name: 'Nordic Bleached Ash', color: '#8c7d6e', desc: 'Ultra-light organic pale timber with matte soap finish' }
  };

  const metalOptions = {
    brass: { name: 'Brushed Champagne Brass', color: '#d4a359', desc: 'Warm 24K satin undertone' },
    blackened: { name: 'Blackened Patina Steel', color: '#2a2b30', desc: 'Acid-etched industrial charcoal matte' },
    bronze: { name: 'Aged Gunmetal Bronze', color: '#7a6552', desc: 'Warm antiqued metallic sheen' }
  };

  // Lighting warmth simulation style
  const getLightingFilter = () => {
    if (lightKelvin <= 2400) return 'sepia(0.4) saturate(1.3) brightness(0.85)';
    if (lightKelvin <= 2700) return 'sepia(0.2) saturate(1.1) brightness(0.95)';
    if (lightKelvin <= 3200) return 'sepia(0.08) brightness(1.0)';
    return 'brightness(1.08) hue-rotate(-5deg)';
  };

  const getKelvinLabel = () => {
    if (lightKelvin <= 2400) return '2200K • Candlelight Ambiance';
    if (lightKelvin <= 2700) return '2700K • Solstice Signature Cove';
    if (lightKelvin <= 3200) return '3000K • Soft Gallery Daylight';
    return '4000K • High-Precision Architectural';
  };

  const handleSavePalette = () => {
    const summary = `Palette: ${stoneOptions[selectedStone].name} + ${woodOptions[selectedWood].name} + ${metalOptions[selectedMetal].name} (${lightKelvin}K Lighting)`;
    onInquireWithPalette(summary);
  };

  return (
    <section id="moodboard" className="relative py-24 sm:py-32 bg-[#090a0d] border-t border-[#1d1f27] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151720] border border-[#d4a359]/30 mb-3 text-[11px] font-sans tracking-widest uppercase text-[#fae2a5]">
            <Palette className="w-3.5 h-3.5" />
            Interactive Atelier Studio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#fcfbf9] tracking-tight">
            Curate Your Spatial Atmosphere
          </h2>
          <p className="mt-3 text-xs sm:text-sm font-sans tracking-wider uppercase text-[#9e9587] max-w-xl mx-auto">
            Test custom marble slabs, timber stains, and 2700K cove lumens in real time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Customizer Controls */}
          <div className="lg:col-span-6 bg-[#11131a] border border-[#252834] rounded-2xl p-6 sm:p-8 space-y-7 shadow-2xl">
            {/* 1. Stone Selection */}
            <div>
              <label className="block text-xs font-sans tracking-wider uppercase text-[#c2baaa] mb-2.5 flex items-center justify-between">
                <span>1. Architectural Stone Monolith</span>
                <span className="text-[11px] font-mono text-[#fae2a5]">{stoneOptions[selectedStone].name}</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(Object.keys(stoneOptions) as Array<keyof typeof stoneOptions>).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedStone(key)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedStone === key
                        ? 'bg-[#1e202b] border-[#fae2a5] shadow-[0_0_15px_rgba(212,163,89,0.2)]'
                        : 'bg-[#14161f] border-[#252733] hover:border-[#d4a359]/40'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full mb-1.5 border border-white/20 shadow" style={{ backgroundColor: stoneOptions[key].color }} />
                    <div className="text-[11px] font-medium text-white truncate">{stoneOptions[key].name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Timber Millwork Selection */}
            <div>
              <label className="block text-xs font-sans tracking-wider uppercase text-[#c2baaa] mb-2.5 flex items-center justify-between">
                <span>2. Oiled Timber Millwork</span>
                <span className="text-[11px] font-mono text-[#fae2a5]">{woodOptions[selectedWood].name}</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(Object.keys(woodOptions) as Array<keyof typeof woodOptions>).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedWood(key)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedWood === key
                        ? 'bg-[#1e202b] border-[#fae2a5] shadow-[0_0_15px_rgba(212,163,89,0.2)]'
                        : 'bg-[#14161f] border-[#252733] hover:border-[#d4a359]/40'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full mb-1.5 border border-white/20 shadow" style={{ backgroundColor: woodOptions[key].color }} />
                    <div className="text-[11px] font-medium text-white truncate">{woodOptions[key].name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Metallic Detailing */}
            <div>
              <label className="block text-xs font-sans tracking-wider uppercase text-[#c2baaa] mb-2.5 flex items-center justify-between">
                <span>3. Hardware & Metal Patina</span>
                <span className="text-[11px] font-mono text-[#fae2a5]">{metalOptions[selectedMetal].name}</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(Object.keys(metalOptions) as Array<keyof typeof metalOptions>).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedMetal(key)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedMetal === key
                        ? 'bg-[#1e202b] border-[#fae2a5] shadow-[0_0_15px_rgba(212,163,89,0.2)]'
                        : 'bg-[#14161f] border-[#252733] hover:border-[#d4a359]/40'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full mb-1.5 border border-white/20 shadow" style={{ backgroundColor: metalOptions[key].color }} />
                    <div className="text-[11px] font-medium text-white truncate">{metalOptions[key].name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Circadian Light Kelvin Temperature */}
            <div className="pt-2">
              <div className="flex items-center justify-between text-xs font-sans mb-2">
                <span className="tracking-wider uppercase text-[#c2baaa]">4. Circadian Cove Temperature</span>
                <span className="text-xs font-mono font-medium text-[#fae2a5]">
                  {getKelvinLabel()}
                </span>
              </div>
              <input
                type="range"
                min={2200}
                max={4000}
                step={100}
                value={lightKelvin}
                onChange={(e) => setLightKelvin(Number(e.target.value))}
                className="w-full accent-[#d4a359] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#787163] mt-1 font-sans">
                <span>2200K (Amber Candle)</span>
                <span>2700K (Golden Warmth)</span>
                <span>4000K (Clean Daylight)</span>
              </div>
            </div>
          </div>

          {/* Right: Live Room Moodboard Canvas */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#151722] to-[#0c0d12] border border-[#2b2d39] rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[460px]">
            {/* Visual Preview */}
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#2c2e3a] shadow-2xl mb-6">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                alt="Room Customizer Simulation"
                className="w-full h-full object-cover transition-all duration-500"
                style={{ filter: getLightingFilter() }}
              />

              {/* Dynamic Color Palette Swatch Overlay in Corner */}
              <div className="absolute top-4 left-4 p-2.5 rounded-lg bg-[#0a0b0e]/90 backdrop-blur-md border border-[#d4a359]/30 flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-white/40" style={{ backgroundColor: stoneOptions[selectedStone].color }} title={stoneOptions[selectedStone].name} />
                <div className="w-4 h-4 rounded-full border border-white/40" style={{ backgroundColor: woodOptions[selectedWood].color }} title={woodOptions[selectedWood].name} />
                <div className="w-4 h-4 rounded-full border border-white/40" style={{ backgroundColor: metalOptions[selectedMetal].color }} title={metalOptions[selectedMetal].name} />
                <span className="text-[10px] font-mono text-[#fae2a5] ml-1">{lightKelvin}K</span>
              </div>

              {/* Ambient Glow */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at 50% 20%, rgba(212, 163, 89, ${0.15 + (3000 - lightKelvin) * 0.00015}) 0%, transparent 70%)`
                }}
              />
            </div>

            {/* Spec Details & Action */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#11131a] border border-[#242632] space-y-1.5 text-xs font-sans">
                <div className="flex justify-between">
                  <span className="text-[#888]">Selected Stone:</span>
                  <span className="text-white font-medium">{stoneOptions[selectedStone].name} ({stoneOptions[selectedStone].origin})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#888]">Millwork Stain:</span>
                  <span className="text-white font-medium">{woodOptions[selectedWood].name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#888]">Metallic Hardware:</span>
                  <span className="text-[#fae2a5] font-medium">{metalOptions[selectedMetal].name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#888]">Photometric Temp:</span>
                  <span className="text-white font-mono">{lightKelvin} Kelvin Architectural</span>
                </div>
              </div>

              <button
                onClick={handleSavePalette}
                className="w-full gold-gradient-bg hover:gold-gradient-bg-hover text-[#110e08] font-semibold text-xs tracking-wider uppercase py-4 rounded-sm shadow-xl font-sans cursor-pointer transition-all flex items-center justify-center gap-2"
              >
                <span>Inquire With This Bespoke Atmosphere</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
