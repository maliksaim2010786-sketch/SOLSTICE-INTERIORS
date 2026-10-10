import React, { useState } from 'react';
import { FLOORPLAN_ZONES, FloorplanZone } from '../data/interiorData';
import { Compass, Sparkles, Volume2, Lightbulb, Layers, Maximize2 } from 'lucide-react';

interface FloorplanViewerProps {
  onSelectZoneForRender: (zoneName: string) => void;
}

export const FloorplanViewer: React.FC<FloorplanViewerProps> = ({
  onSelectZoneForRender,
}) => {
  const [activeZone, setActiveZone] = useState<FloorplanZone>(FLOORPLAN_ZONES[0]);

  return (
    <section id="floorplan" className="relative py-24 sm:py-32 bg-[#08090c] border-t border-[#1d1f27] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151720] border border-[#d4a359]/30 mb-3 text-[11px] font-sans tracking-widest uppercase text-[#fae2a5]">
            <Compass className="w-3.5 h-3.5" />
            Architectural Schematics
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#fcfbf9] tracking-tight">
            Interactive Spatial Blueprint
          </h2>
          <p className="mt-3 text-xs sm:text-sm font-sans tracking-wider uppercase text-[#9e9587] max-w-xl mx-auto">
            Click any spatial quadrant to examine acoustics, square footage, and lighting parameters
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Blueprint Canvas */}
          <div className="lg:col-span-7 bg-[#0b0e14] border border-[#2b3140] rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Architectural Grid Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e3047_1px,transparent_1px)] [background-size:20px_20px] opacity-70 pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-[#202838] relative z-10 text-[11px] font-mono text-[#829bb8]">
              <span>[LEVEL 48 PENTHOUSE • NORTH AXIS 34°]</span>
              <span>TOTAL VOLUMETRIC FOOTPRINT: 3,790 SQ.FT</span>
            </div>

            {/* Interactive Blueprint Schematic Container */}
            <div className="relative aspect-[16/11] w-full my-6 bg-[#090c12]/95 border-2 border-[#1e2a3a] rounded-xl overflow-hidden p-4">
              {/* Perimeter Walls SVG Blueprint */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
                <rect x="5" y="5" width="90" height="90" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="1 1" />
                <line x1="52" y1="5" x2="52" y2="95" stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="2 2" />
                <line x1="5" y1="58" x2="95" y2="58" stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="2 2" />
              </svg>

              {/* Interactive Clickable Quadrant Zones */}
              {FLOORPLAN_ZONES.map((zone) => {
                const isSelected = activeZone.id === zone.id;
                return (
                  <div
                    key={zone.id}
                    onClick={() => setActiveZone(zone)}
                    style={{
                      left: `${zone.coords.x}%`,
                      top: `${zone.coords.y}%`,
                      width: `${zone.coords.w}%`,
                      height: `${zone.coords.h}%`
                    }}
                    className={`absolute rounded-lg p-3 flex flex-col justify-between cursor-pointer transition-all duration-300 border ${
                      isSelected
                        ? 'bg-[#d4a359]/20 border-[#fae2a5] shadow-[0_0_25px_rgba(212,163,89,0.35)] scale-102 z-20'
                        : 'bg-[#131924]/80 border-[#2b394f] hover:border-[#d4a359]/60 hover:bg-[#1a2333]/90 z-10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-display font-medium ${isSelected ? 'text-[#fae2a5]' : 'text-[#cfd7e3]'}`}>
                        {zone.name.split(' & ')[0]}
                      </span>
                      <span className="text-[10px] font-mono text-[#8a9bb0]">{zone.area}</span>
                    </div>

                    <div className="flex items-center justify-between text-[9px] font-sans tracking-widest uppercase mt-auto">
                      <span className={isSelected ? 'text-[#fae2a5]' : 'text-[#6c7d94]'}>{zone.category}</span>
                      <span className="text-emerald-400 font-mono">ACTIVE</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[#202838] relative z-10 text-[10px] text-[#718299] font-sans">
              <span>* Compliant with International Building Code & ASHRAE 90.1</span>
              <span>All Dimensions Verified by Agenvo Structural CAD</span>
            </div>
          </div>

          {/* Right: Selected Zone Detailed Architecture Specs */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#151722] to-[#0c0d12] border border-[#2b2d39] rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between min-h-[460px]">
            <div>
              <span className="text-[10px] font-sans tracking-widest uppercase text-[#e5b869] flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#fae2a5]" />
                Spatial Quadrant Specification
              </span>

              <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#fcfbf9] mt-2">
                {activeZone.name}
              </h3>

              <p className="mt-2 text-xs font-mono text-[#fae2a5]">
                Area: {activeZone.area} • Category: {activeZone.category}
              </p>

              <p className="mt-4 text-xs sm:text-sm text-[#beb5a5] font-sans leading-relaxed">
                {activeZone.description}
              </p>

              {/* Technical Specifications */}
              <div className="mt-6 space-y-3 pt-4 border-t border-[#232532]">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#11131a] border border-[#242633]">
                  <Volume2 className="w-4 h-4 text-[#fae2a5] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#888] font-sans">Acoustic Attenuation</span>
                    <p className="text-xs font-mono text-[#ded8cc] mt-0.5">{activeZone.acousticRating}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#11131a] border border-[#242633]">
                  <Lightbulb className="w-4 h-4 text-[#fae2a5] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#888] font-sans">Photometric Lighting Spec</span>
                    <p className="text-xs font-mono text-[#ded8cc] mt-0.5">{activeZone.lightingSpec}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#11131a] border border-[#242633]">
                  <Layers className="w-4 h-4 text-[#fae2a5] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#888] font-sans">Specified Materials</span>
                    <p className="text-xs text-[#ded8cc] font-sans mt-0.5">{activeZone.materials.join(' • ')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#232532]">
              <button
                onClick={() => onSelectZoneForRender(activeZone.name)}
                className="w-full gold-gradient-bg hover:gold-gradient-bg-hover text-[#110e08] font-semibold text-xs tracking-wider uppercase py-3.5 rounded-sm shadow-md font-sans cursor-pointer transition-all flex items-center justify-center gap-2"
              >
                <span>Commission {activeZone.name} Layout</span>
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
