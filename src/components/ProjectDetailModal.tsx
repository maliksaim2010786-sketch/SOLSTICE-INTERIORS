import React, { useState } from 'react';
import { ProjectItem } from '../data/interiorData';
import { X, MapPin, Calendar, Layers, Sparkles, ArrowRight } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestQuoteForProject: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onRequestQuoteForProject
}) => {
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c0d12] border border-[#2d303b] rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#12141a] border-b border-[#232530]">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-sans tracking-widest uppercase text-[#e5b869] px-2.5 py-1 rounded bg-[#1e202b] border border-[#d4a359]/30">
              {project.categoryLabel}
            </span>
            <h3 className="text-lg font-display font-medium text-[#fcfbf9]">
              {project.title} • {project.subtitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#181a22] text-[#8e8576] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Main Hero Photo */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#2b2d38] shadow-xl">
            <img
              src={project.gallery[activeImgIdx] || project.image}
              alt={project.title}
              className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05]"
            />
          </div>

          {/* Gallery Thumbnails */}
          {project.gallery.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIdx(idx)}
                  className={`relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border transition-all cursor-pointer ${
                    activeImgIdx === idx ? 'border-[#fae2a5] scale-102 shadow-lg' : 'border-[#262832] opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#14161f] border border-[#252834]">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#8e8576] font-sans flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#d4a359]" /> Location
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#e8e2d5] mt-0.5">{project.location}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#8e8576] font-sans flex items-center gap-1">
                <Layers className="w-3 h-3 text-[#d4a359]" /> Surface Area
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#e8e2d5] mt-0.5">{project.area}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#8e8576] font-sans flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#d4a359]" /> Completion
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#e8e2d5] mt-0.5">{project.year}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#8e8576] font-sans flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#d4a359]" /> Lighting Curation
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#fae2a5] mt-0.5">2700K Architectural</p>
            </div>
          </div>

          {/* Narrative & Materials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-base font-display font-medium text-[#fcfbf9]">
                Architectural Narrative
              </h4>
              <p className="text-xs sm:text-sm text-[#beb5a5] font-sans leading-relaxed">
                {project.description}
              </p>
              <div className="p-4 rounded-lg bg-[#151720]/80 border-l-2 border-[#d4a359] italic text-xs text-[#fae2a5] font-serif">
                {project.quote}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider text-[#9d9485] font-sans mb-3">
                Key Material Palette
              </h4>
              <div className="space-y-2">
                {project.materials.map((m) => (
                  <div
                    key={m}
                    className="p-2 rounded bg-[#13151c] border border-[#242631] text-xs font-sans text-[#ded8cc]"
                  >
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#12141a] border-t border-[#232530]">
          <span className="text-xs text-[#8c8375] font-sans">
            Ready to commission an interior of this caliber?
          </span>
          <button
            onClick={() => {
              onClose();
              onRequestQuoteForProject(project.title);
            }}
            className="gold-gradient-bg hover:gold-gradient-bg-hover text-[#110e08] font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-sm flex items-center gap-2 cursor-pointer font-sans shadow-md"
          >
            <span>Commission Similar Design</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
