import React, { useState } from 'react';
import { AGENVO_PILLARS, AGENVO_PROJECTS, ProjectItem } from '../data/interiorData';
import { ArrowRight, Layers, Cpu, Sparkles, Building2, Eye, EyeOff } from 'lucide-react';

interface AgenvoSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onRequestQuote: (spaceTitle?: string) => void;
}

export const AgenvoSection: React.FC<AgenvoSectionProps> = ({
  onSelectProject,
  onRequestQuote,
}) => {
  const [isWireframeMode, setIsWireframeMode] = useState(false);
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'engineering':
        return (
          <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 text-[#fae2a5]">
            <polygon points="20,4 36,34 4,34" stroke="currentColor" strokeWidth="2" />
            <polygon points="20,14 30,31 10,31" stroke="#d4a359" strokeWidth="1.5" />
            <line x1="20" y1="4" x2="20" y2="34" stroke="#fae2a5" strokeWidth="1" strokeDasharray="2 2" />
          </svg>
        );
      case 'concept':
        return (
          <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 text-[#fae2a5]">
            <rect x="6" y="6" width="28" height="28" rx="2" stroke="currentColor" strokeWidth="2" />
            <circle cx="20" cy="20" r="8" stroke="#d4a359" strokeWidth="1.5" />
            <line x1="6" y1="20" x2="34" y2="20" stroke="#fae2a5" strokeWidth="1" />
            <line x1="20" y1="6" x2="20" y2="34" stroke="#fae2a5" strokeWidth="1" />
          </svg>
        );
      case 'sustainable':
        return (
          <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 text-[#fae2a5]">
            <circle cx="20" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="26" r="5" stroke="currentColor" strokeWidth="2" />
            <circle cx="28" cy="26" r="5" stroke="currentColor" strokeWidth="2" />
            <line x1="18" y1="16" x2="14" y2="22" stroke="#d4a359" strokeWidth="1.5" />
            <line x1="22" y1="16" x2="26" y2="22" stroke="#d4a359" strokeWidth="1.5" />
            <line x1="17" y1="26" x2="23" y2="26" stroke="#d4a359" strokeWidth="1.5" />
          </svg>
        );
      default:
        return <Layers className="w-8 h-8 text-[#fae2a5]" />;
    }
  };

  return (
    <section id="agenvo" className="relative py-24 sm:py-32 bg-[#08090c] border-t border-[#1d1f27] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#d4a359]/7 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#223344]/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* AGENVO Brand Header (Exact replica from Image 1) */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            {/* Geometric Triangle Monogram Icon */}
            <div className="w-9 h-9 border border-[#d4a359]/60 rounded-sm bg-[#12141c] flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(212,163,89,0.25)]">
              <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-[#fae2a5]">
                <polygon points="16,3 29,27 3,27" stroke="currentColor" strokeWidth="2" />
                <polyline points="16,11 23,24 9,24" stroke="#c49548" strokeWidth="1.5" />
                <line x1="16" y1="3" x2="16" y2="24" stroke="#fae2a5" strokeWidth="1.2" />
              </svg>
            </div>
            <span className="font-brand tracking-[0.32em] text-[#fae2a5] font-semibold text-lg sm:text-xl uppercase">
              AGENVO
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#fcfbf9] tracking-tight leading-[1.1] max-w-4xl">
            Advancing Architectural
            <span className="block mt-1 sm:mt-2 italic font-cormorant gold-gradient-text drop-shadow-[0_4px_30px_rgba(212,163,89,0.35)]">
              Excellence
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base font-sans tracking-wide text-[#b8b0a1] max-w-xl">
            Innovative design & engineering solutions for the future.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onRequestQuote('Agenvo Architectural Commission')}
              className="gold-gradient-bg hover:gold-gradient-bg-hover text-[#110e08] font-semibold text-xs sm:text-sm tracking-wider uppercase px-8 py-3.5 rounded-sm shadow-[0_8px_30px_rgba(212,163,89,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5 cursor-pointer font-sans"
            >
              <span>Discover More</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Interactive Blueprint Wireframe CAD Switcher */}
            <button
              onClick={() => setIsWireframeMode(!isWireframeMode)}
              className="px-4 py-3 rounded-sm bg-[#14161f] border border-[#2e313d] hover:border-[#d4a359]/60 text-xs font-sans tracking-wider uppercase text-[#ded7ca] flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              {isWireframeMode ? <EyeOff className="w-4 h-4 text-[#fae2a5]" /> : <Eye className="w-4 h-4 text-[#fae2a5]" />}
              <span>{isWireframeMode ? 'Photo Realism View' : 'CAD Wireframe View'}</span>
            </button>
          </div>
        </div>

        {/* Hero Architectural Visual from Image 1: Cantilevered Glass Villa over Water */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-[#2b2d38] shadow-2xl mb-16 sm:mb-20 bg-[#0c0d12]">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
            alt="Agenvo Cantilevered Luxury Villa over Waters"
            className={`w-full h-full object-cover transition-all duration-700 ${
              isWireframeMode ? 'brightness-[0.35] contrast-150 filter invert' : 'brightness-[0.88] contrast-[1.08]'
            }`}
          />

          {/* Wireframe Architectural CAD Grid Overlay if active */}
          {isWireframeMode && (
            <div className="absolute inset-0 bg-[#07131d]/60 bg-[radial-gradient(#00e5ff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none flex flex-col justify-between p-6">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#00e5ff] tracking-widest uppercase">
                <span>[AGENVO STRUCTURAL CAD MATRIX: VERIFIED]</span>
                <span>CANTILEVER LOAD: 420 kN/m² · DEFLECTION: 0.002%</span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-[#00e5ff] tracking-widest uppercase">
                <span>POST-TENSIONED HIGH TENSILITY STEEL CORE</span>
                <span>SEISMIC GRADE: ZONE 4 EQUIPPED</span>
              </div>
            </div>
          )}

          {/* Dark Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-transparent to-[#08090c]/50 pointer-events-none" />

          {/* Floating Architectural Badge */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0c0e14]/85 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-[#2a2c37]">
            <div>
              <span className="text-[10px] font-sans tracking-widest uppercase text-[#fae2a5] flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#fae2a5]" />
                Agenvo Landmark Villa Residence • Lake Como
              </span>
              <p className="text-xs sm:text-sm font-sans text-[#ded8cc] mt-0.5">
                12,500 sq.ft Cantilevered Structural Glass • Post-Tensioned Steel Frame
              </p>
            </div>
            <button
              onClick={() => onSelectProject(AGENVO_PROJECTS[0])}
              className="gold-gradient-bg text-[#110e08] text-xs font-semibold px-4 py-2 rounded-sm tracking-wider uppercase font-sans shrink-0 cursor-pointer shadow"
            >
              Examine Structural Spec
            </button>
          </div>
        </div>

        {/* 3 Core Engineering Pillars (Exact replica from Image 1) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {AGENVO_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              onClick={() => setSelectedPillar(selectedPillar === pillar.id ? null : pillar.id)}
              className="group relative p-7 sm:p-8 rounded-xl bg-gradient-to-b from-[#13151c]/95 to-[#0d0e13]/98 border border-[#252833] hover:border-[#d4a359]/70 transition-all duration-300 shadow-xl flex flex-col cursor-pointer hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="mb-6 w-14 h-14 rounded-lg bg-[#181a24] border border-[#d4a359]/30 flex items-center justify-center group-hover:border-[#fae2a5] group-hover:shadow-[0_0_20px_rgba(212,163,89,0.25)] transition-all">
                {getPillarIcon(pillar.icon)}
              </div>

              {/* Title & Subtitle from Image 1 */}
              <h3 className="text-xl font-display font-medium text-[#fcfbf9] group-hover:text-[#fae2a5] transition-colors leading-snug">
                {pillar.title}
              </h3>
              <p className="mt-1 text-xs font-sans tracking-wider uppercase text-[#9e9587]">
                {pillar.subtitle}
              </p>

              <div className="w-8 h-[1px] bg-[#d4a359]/40 my-4 group-hover:w-16 transition-all" />

              <p className="text-xs sm:text-[13px] text-[#bcb5a7] font-sans leading-relaxed">
                {pillar.description}
              </p>

              {/* Metric Badge */}
              <div className="mt-5 pt-4 border-t border-[#1f212a] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#fae2a5] tracking-wide">
                  {pillar.metric}
                </span>
                <span className="text-[10px] uppercase font-sans tracking-widest text-[#888] group-hover:text-white">
                  Learn More
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Featured Projects Grid from Image 1: Corporate Tower, Futuristic Pavilion, Sculptural Landmark */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[10px] font-sans tracking-widest uppercase text-[#e5b869]">
                Portfolio of Landmarks
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#fcfbf9] mt-1">
                Agenvo Engineering Showcase
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {AGENVO_PROJECTS.slice(1, 4).map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative rounded-xl overflow-hidden cursor-pointer bg-[#11131a] border border-[#272935] hover:border-[#d4a359]/70 transition-all duration-400 shadow-2xl flex flex-col hover:-translate-y-1.5"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#161820]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.88] contrast-[1.08]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-transparent to-transparent opacity-90" />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#0a0b0e]/80 text-[10px] font-sans tracking-wider uppercase text-[#fae2a5] border border-[#d4a359]/30">
                    {project.categoryLabel}
                  </div>
                </div>

                <div className="p-6 text-center flex flex-col items-center">
                  <h4 className="text-xl font-display font-medium text-[#fcfbf9] group-hover:text-[#fae2a5] transition-colors">
                    {project.title}
                  </h4>
                  <p className="mt-1 text-xs font-sans tracking-widest uppercase text-[#9e9587]">
                    {project.subtitle}
                  </p>
                  <p className="mt-2 text-xs text-[#a2998a] font-sans">
                    {project.location} • {project.area}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
