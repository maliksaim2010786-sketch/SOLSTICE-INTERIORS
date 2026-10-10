import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(52);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  return (
    <section className="relative py-20 sm:py-28 bg-[#090a0d] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151720] border border-[#d4a359]/30 mb-3 text-[11px] font-sans tracking-widest uppercase text-[#fae2a5]">
            <Sparkles className="w-3.5 h-3.5" />
            The Spatial Transformation
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#fcfbf9] tracking-tight">
            Before & Timeless Luxury
          </h2>
          <p className="mt-3 text-xs sm:text-sm font-sans tracking-wider uppercase text-[#9a9183]">
            Drag the slider to reveal the Solstice architectural metamorphosis
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div
          ref={containerRef}
          onMouseDown={() => (isDragging.current = true)}
          onMouseUp={() => (isDragging.current = false)}
          onMouseLeave={() => (isDragging.current = false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[640px] rounded-xl overflow-hidden cursor-ew-resize select-none border border-[#2e303b] shadow-2xl"
        >
          {/* AFTER Image (Full width background) */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
              alt="Solstice Timeless Luxury Interior"
              className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05]"
            />
            {/* Tag label */}
            <div className="absolute top-5 right-5 px-3.5 py-1.5 rounded-sm bg-[#0a0b0e]/85 backdrop-blur-md border border-[#d4a359]/40 text-xs font-sans tracking-widest uppercase text-[#fae2a5] shadow-lg">
              Solstice Luxury Finished
            </div>
          </div>

          {/* BEFORE Image (Clipped overlay) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute inset-0 w-full h-full" style={{ width: containerRef.current?.offsetWidth || '100%' }}>
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80"
                alt="Raw Unfinished Interior Shell"
                className="w-full h-full object-cover filter grayscale contrast-125"
                style={{ width: containerRef.current?.offsetWidth || '100%' }}
              />
              <div className="absolute inset-0 bg-[#000]/40" />
            </div>
            {/* Tag label */}
            <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-sm bg-[#151720]/85 backdrop-blur-md border border-white/20 text-xs font-sans tracking-widest uppercase text-[#ded7c8] shadow-lg">
              Raw Outdated Shell
            </div>
          </div>

          {/* Draggable Divider Line & Handle */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#fae2a5] via-[#d4a359] to-[#fae2a5] shadow-[0_0_12px_#fae2a5]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#12141a] border-2 border-[#fae2a5] shadow-[0_0_20px_rgba(212,163,89,0.7)] flex items-center justify-center text-[#fae2a5]">
              <MoveHorizontal className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="mt-6 flex flex-wrap items-center justify-between text-xs text-[#8d8474] font-sans px-2">
          <span>Tribeca Residence • 3,200 sq.ft Complete Structural Reprogramming</span>
          <span className="text-[#d4a359]">Duration: 14 Weeks Turnkey</span>
        </div>
      </div>
    </section>
  );
};
