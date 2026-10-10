import React, { useState } from 'react';
import { MATERIAL_PALETTE, MaterialItem } from '../data/interiorData';
import { Sparkles, Layers } from 'lucide-react';

export const MaterialitySection: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem>(MATERIAL_PALETTE[0]);

  return (
    <section id="materials" className="relative py-20 sm:py-28 bg-[#0b0c10] overflow-hidden border-t border-[#1d1f27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151720] border border-[#d4a359]/30 mb-3 text-[11px] font-sans tracking-widest uppercase text-[#fae2a5]">
            <Layers className="w-3.5 h-3.5" />
            Tactile Materiality
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#fcfbf9] tracking-tight">
            Curated Artisanal Finishes
          </h2>
          <p className="mt-3 text-xs sm:text-sm font-sans tracking-wider uppercase text-[#9a9183] max-w-xl mx-auto">
            Direct quarry extraction and master joinery from heritage European ateliers
          </p>
        </div>

        {/* Interactive Material Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Swatches Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {MATERIAL_PALETTE.map((material) => {
              const isSelected = selectedMaterial.name === material.name;
              return (
                <div
                  key={material.name}
                  onClick={() => setSelectedMaterial(material)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'bg-[#181a24] border-[#fae2a5] shadow-[0_0_25px_rgba(212,163,89,0.25)] -translate-y-1'
                      : 'bg-[#12141a] border-[#262832] hover:border-[#d4a359]/40 hover:bg-[#161820]'
                  }`}
                >
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                    <img
                      src={material.image}
                      alt={material.name}
                      className="w-full h-full object-cover filter brightness-90 contrast-110"
                    />
                    <div
                      className="absolute bottom-2 right-2 w-4 h-4 rounded-full border border-white/40 shadow"
                      style={{ backgroundColor: material.colorHex }}
                    />
                  </div>
                  <h4 className="text-sm font-display font-medium text-[#f5eee1] leading-snug">
                    {material.name}
                  </h4>
                  <p className="text-[11px] text-[#9a9183] font-sans mt-0.5">{material.origin}</p>
                </div>
              );
            })}
          </div>

          {/* Right: Featured Material Detail Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#161822] to-[#0f1015] border border-[#2b2d39] rounded-2xl p-7 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4a359]/8 blur-[80px] pointer-events-none rounded-full" />

            <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden border border-[#373946] shadow-xl">
                <img
                  src={selectedMaterial.image}
                  alt={selectedMaterial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col text-left">
                <span className="text-[11px] font-sans tracking-widest uppercase text-[#e5b869] flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#fae2a5]" />
                  {selectedMaterial.origin}
                </span>

                <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#fcfbf9] mt-2">
                  {selectedMaterial.name}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#bcb4a4] font-sans leading-relaxed">
                  {selectedMaterial.description}
                </p>

                <div className="mt-6 pt-5 border-t border-[#2a2c37] grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8b8273] font-sans">Texture & Finish</span>
                    <p className="text-xs font-medium text-[#ded8cc] mt-0.5">{selectedMaterial.finish}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8b8273] font-sans">Certification</span>
                    <p className="text-xs font-medium text-[#ded8cc] mt-0.5">FSC / Heritage Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
