import React from 'react';
import { ServiceItem } from '../data/interiorData';
import { X, Check, Clock, Sparkles, ArrowRight } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuote,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#0c0d12] border border-[#2d303b] rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#12141a] border-b border-[#232530]">
          <div>
            <span className="text-[10px] font-sans tracking-widest uppercase text-[#e5b869]">
              Specialized Discipline
            </span>
            <h3 className="text-xl font-display font-medium text-[#fcfbf9] mt-0.5">
              {service.title} • {service.subtitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#181a22] text-[#8e8576] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm text-[#c8c0b0] font-sans leading-relaxed">
            {service.description}
          </p>

          {/* Timeline and highlights */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#14161f] border border-[#262833]">
            <Clock className="w-5 h-5 text-[#d4a359]" />
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#8b8274] font-sans">
                Typical Turnaround
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#ece5d8]">
                {service.startingTimeline}
              </p>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#9d9485] font-sans mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#fae2a5]" />
              Architectural Deliverables & Scope
            </h4>
            <div className="space-y-2.5">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[#13151c] border border-[#232530] text-xs font-sans text-[#ded8cc]"
                >
                  <div className="w-4 h-4 rounded-full bg-[#d4a359]/20 text-[#fae2a5] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#12141a] border-t border-[#232530]">
          <span className="text-xs text-[#8c8375] font-sans">
            Ready to initiate a brief?
          </span>
          <button
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="gold-gradient-bg hover:gold-gradient-bg-hover text-[#110e08] font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-sm flex items-center gap-2 cursor-pointer font-sans shadow-md"
          >
            <span>Commission {service.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
