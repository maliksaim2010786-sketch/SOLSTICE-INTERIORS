import React, { useState } from 'react';
import { ProjectItem, FEATURED_PROJECTS } from '../data/interiorData';
import { Maximize2, MapPin, Sparkles } from 'lucide-react';

interface FeaturedProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
  onRequestQuote: () => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsProps> = ({
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'living' | 'kitchen' | 'bedroom' | 'commercial'>('all');

  const filteredProjects = activeFilter === 'all'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-20 sm:py-28 bg-[#0b0c10] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#d4a359]/7 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#c49548]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching the image */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#fcfbf9] tracking-tight">
            Featured Projects
          </h2>

          {/* Elegant Gold Divider Line */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-r from-transparent via-[#d4a359]/60 to-[#d4a359]" />
            <div className="w-2 h-2 rotate-45 border border-[#fae2a5] bg-[#9e6f28]/40" />
            <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-l from-transparent via-[#d4a359]/60 to-[#d4a359]" />
          </div>

          <p className="mt-4 text-xs sm:text-sm font-sans tracking-widest uppercase text-[#9e9587]">
            Signature Residential & Commercial Portfolios
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 max-w-md mx-auto bg-[#14161c] rounded-lg border border-[#262832]">
            {(
              [
                { id: 'all', label: 'All' },
                { id: 'living', label: 'Living Room' },
                { id: 'kitchen', label: 'Kitchen' },
                { id: 'bedroom', label: 'Bedroom' },
                { id: 'commercial', label: 'Commercial' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-sans font-medium rounded-md transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'gold-gradient-bg text-[#110e08] shadow-md'
                    : 'text-[#a2998a] hover:text-[#fae2a5]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Main Cards Grid matching the screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-xl overflow-hidden cursor-pointer bg-[#12141a] border border-[#2b2d37] hover:border-[#d4a359]/70 transition-all duration-400 shadow-2xl hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container with Ambient Lighting */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#181920]">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.subtitle}`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.88] contrast-[1.05]"
                  loading="lazy"
                />

                {/* Dark Gradient Vignette for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0e] via-[#0a0b0e]/30 to-transparent opacity-90" />

                {/* Top Badge: Location & Area */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0a0b0e]/80 backdrop-blur-md text-[11px] font-sans tracking-wider uppercase text-[#e5b869] border border-[#d4a359]/30">
                    <MapPin className="w-3 h-3 text-[#fae2a5]" />
                    {project.location}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#0a0b0e]/80 border border-[#d4a359]/30 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-[#fae2a5]" />
                  </div>
                </div>

                {/* Content Overlay at bottom matching the image format */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 text-center flex flex-col items-center">
                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#fcfbf9] tracking-tight group-hover:text-[#fae2a5] transition-colors drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-sans tracking-widest text-[#cfc5b4] uppercase">
                    {project.subtitle}
                  </p>

                  {/* Gold Center Divider & Glowing underdot matching screenshot */}
                  <div className="flex items-center justify-center gap-2 mt-3 mb-1">
                    <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#d4a359]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#fae2a5] shadow-[0_0_8px_#fae2a5]" />
                    <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#d4a359]" />
                  </div>

                  {/* Hidden Details revealed on hover */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300 overflow-hidden mt-2">
                    <p className="text-[11px] text-[#bcb29f] font-sans">
                      {project.area} • {project.materials.slice(0, 2).join(' • ')}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#fae2a5] mt-1">
                      <Sparkles className="w-3 h-3" /> View Portfolio Case Study
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Warm Cove Underglow matching the image */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-36 h-6 bg-[#d4a359]/25 blur-lg rounded-full opacity-70 group-hover:opacity-100 group-hover:w-48 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
