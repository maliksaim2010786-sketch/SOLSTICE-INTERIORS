import React, { useState, useEffect, useRef } from 'react';
import { X, Volume2, VolumeX, Sun, Moon, Sunset, Info, Sparkles } from 'lucide-react';

interface WatchTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
}

interface TourRoom {
  id: string;
  name: string;
  division: 'Solstice' | 'Agenvo' | 'Royal Crest';
  subtitle: string;
  image: string;
  hotspots: {
    x: number;
    y: number;
    title: string;
    description: string;
  }[];
}

const TOUR_ROOMS: TourRoom[] = [
  {
    id: 'living',
    name: 'Tribeca Grand Salon',
    division: 'Solstice',
    subtitle: 'Living Room & Ambient Cove',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
    hotspots: [
      {
        x: 48,
        y: 18,
        title: 'Architectural Cove Channel',
        description: 'Concealed 2700K high-CRI LED channel casting zero harsh shadows across Venetian plaster ceiling.'
      },
      {
        x: 72,
        y: 35,
        title: 'Bookmatched Calacatta Feature',
        description: 'Italian marble monolith slab flanked by warm perimeter backlight.'
      },
      {
        x: 45,
        y: 65,
        title: 'Low-Profile Modular Seating',
        description: 'Bespoke Italian modular sofa upholstered in Belgian linen and bouclé.'
      }
    ]
  },
  {
    id: 'agenvo-villa',
    name: 'Lake Como Cantilever Villa',
    division: 'Agenvo',
    subtitle: 'Waterfront Structural Glass Architecture',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    hotspots: [
      {
        x: 55,
        y: 30,
        title: '18m Post-Tensioned Cantilever',
        description: 'Floating concrete and steel slab projecting over mirror-surface infinity pools.'
      },
      {
        x: 75,
        y: 45,
        title: 'Triple Low-E Acoustic Glazing',
        description: 'Thermally isolated acoustic glass panels with hidden flush motorization.'
      }
    ]
  },
  {
    id: 'royal-penthouse',
    name: 'Royal Crest Presidential Suite',
    division: 'Royal Crest',
    subtitle: 'Master Palatial Accommodations',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1800&q=85',
    hotspots: [
      {
        x: 50,
        y: 42,
        title: 'Floating Suede Acoustic Wall',
        description: 'Acoustic suede padded headboard with integrated concealed reading luminescence.'
      },
      {
        x: 80,
        y: 55,
        title: 'Smoked Walnut Joinery',
        description: 'Hand-rubbed organic oiled walnut with wireless charging integration.'
      }
    ]
  },
  {
    id: 'kitchen',
    name: 'Kensington Culinary Monolith',
    division: 'Solstice',
    subtitle: 'Minimal & Functional Kitchen',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1800&q=85',
    hotspots: [
      {
        x: 52,
        y: 55,
        title: 'Floating Island Light Bar',
        description: 'Warm gold under-counter strip creating zero-gravity architectural illusion.'
      },
      {
        x: 35,
        y: 30,
        title: 'Concealed Pocket Joinery',
        description: 'Handleless matte black aluminum cabinetry concealing appliances.'
      }
    ]
  }
];

export const WatchTourModal: React.FC<WatchTourModalProps> = ({ isOpen, onClose, onRequestQuote }) => {
  const [activeRoomIdx, setActiveRoomIdx] = useState(0);
  const [activeLighting, setActiveLighting] = useState<'night' | 'dusk' | 'day'>('night');
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRefs = useRef<OscillatorNode[]>([]);

  const currentRoom = TOUR_ROOMS[activeRoomIdx];

  const toggleAmbientSound = () => {
    if (isAudioPlaying) {
      stopAmbientSound();
      setIsAudioPlaying(false);
    } else {
      startAmbientSound();
      setIsAudioPlaying(true);
    }
  };

  const startAmbientSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.04, ctx.currentTime);
      masterGain.connect(ctx.destination);

      const freqs = [110, 164.81, 220, 329.63];
      oscillatorRefs.current = freqs.map((f) => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, ctx.currentTime);
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start();
        return osc;
      });
    } catch {
      // handled
    }
  };

  const stopAmbientSound = () => {
    if (oscillatorRefs.current.length > 0) {
      oscillatorRefs.current.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // ignore
        }
      });
      oscillatorRefs.current = [];
    }
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      stopAmbientSound();
    };
  }, []);

  if (!isOpen) return null;

  const lightingFilterClass = {
    night: 'brightness-[0.78] contrast-[1.08] hue-rotate-[-3deg]',
    dusk: 'brightness-[0.92] contrast-[1.05] sepia-[0.2]',
    day: 'brightness-[1.05] contrast-[1.02]'
  }[activeLighting];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-6xl max-h-[92vh] flex flex-col bg-[#0b0c10] border border-[#2e313c] rounded-2xl overflow-hidden shadow-2xl">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 bg-[#111319] border-b border-[#23252f]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#fae2a5] animate-pulse" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-sans tracking-widest uppercase px-1.5 py-0.5 rounded bg-[#1e202b] text-[#fae2a5] border border-[#d4a359]/30">
                  {currentRoom.division}
                </span>
                <h3 className="text-sm sm:text-base font-display font-medium text-[#fcfbf9]">
                  {currentRoom.name}
                </h3>
              </div>
              <p className="text-[11px] font-sans text-[#978e7f] mt-0.5">{currentRoom.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleAmbientSound}
              className={`p-2 rounded-lg border text-xs font-sans flex items-center gap-1.5 transition-colors cursor-pointer ${
                isAudioPlaying
                  ? 'bg-[#d4a359]/20 border-[#fae2a5] text-[#fae2a5]'
                  : 'bg-[#181a22] border-[#2b2d38] text-[#8e8576] hover:text-[#dcd6c8]'
              }`}
              title="Toggle ambient atmospheric audio"
            >
              {isAudioPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden sm:inline">{isAudioPlaying ? 'Mute Ambiance' : 'Play Ambiance'}</span>
            </button>

            <button
              onClick={() => {
                stopAmbientSound();
                onClose();
              }}
              className="p-2 rounded-lg bg-[#181a22] border border-[#2b2d38] text-[#cfc8b8] hover:text-white hover:bg-[#232632] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Tour Viewer */}
        <div className="relative flex-1 min-h-[380px] sm:min-h-[500px] overflow-hidden bg-black select-none">
          <img
            src={currentRoom.image}
            alt={currentRoom.name}
            className={`w-full h-full object-cover transition-all duration-700 ${lightingFilterClass}`}
          />

          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/60 pointer-events-none" />

          {/* Hotspots */}
          {currentRoom.hotspots.map((hotspot, idx) => {
            const isSelected = activeHotspot === idx;
            return (
              <div
                key={idx}
                className="absolute z-20"
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
              >
                <button
                  onClick={() => setActiveHotspot(isSelected ? null : idx)}
                  className="relative group p-2 -translate-x-1/2 -translate-y-1/2 focus:outline-none cursor-pointer"
                >
                  <span className="absolute inset-0 rounded-full bg-[#fae2a5] opacity-50 animate-ping" />
                  <div className="relative w-7 h-7 rounded-full bg-[#101217]/90 border border-[#fae2a5] text-[#fae2a5] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Info className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isSelected && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-9 w-64 p-3.5 rounded-lg bg-[#111319]/95 backdrop-blur-md border border-[#d4a359]/60 shadow-2xl text-left z-30 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-1.5 border-b border-[#242632]">
                      <span className="text-[11px] font-sans font-medium text-[#fae2a5] tracking-wide">
                        {hotspot.title}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveHotspot(null);
                        }}
                        className="text-[#888] hover:text-white"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="mt-1.5 text-[11px] text-[#cfc8b8] font-sans leading-relaxed">
                      {hotspot.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}

          {/* Lighting Controls */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 p-1 rounded-lg bg-[#101217]/85 backdrop-blur-md border border-[#2b2d38]">
            <button
              onClick={() => setActiveLighting('night')}
              className={`p-2 rounded-md text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeLighting === 'night'
                  ? 'gold-gradient-bg text-[#110e08] font-medium'
                  : 'text-[#968e7f] hover:text-white'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span className="text-[11px]">2700K Night</span>
            </button>
            <button
              onClick={() => setActiveLighting('dusk')}
              className={`p-2 rounded-md text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeLighting === 'dusk'
                  ? 'gold-gradient-bg text-[#110e08] font-medium'
                  : 'text-[#968e7f] hover:text-white'
              }`}
            >
              <Sunset className="w-3.5 h-3.5" />
              <span className="text-[11px]">Dusk Glow</span>
            </button>
            <button
              onClick={() => setActiveLighting('day')}
              className={`p-2 rounded-md text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeLighting === 'day'
                  ? 'gold-gradient-bg text-[#110e08] font-medium'
                  : 'text-[#968e7f] hover:text-white'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span className="text-[11px]">Natural Daylight</span>
            </button>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 sm:px-7 py-4 bg-[#111319] border-t border-[#23252f]">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {TOUR_ROOMS.map((room, idx) => (
              <button
                key={room.id}
                onClick={() => {
                  setActiveRoomIdx(idx);
                  setActiveHotspot(null);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-sans tracking-wide shrink-0 transition-colors cursor-pointer border ${
                  activeRoomIdx === idx
                    ? 'bg-[#1e202b] border-[#fae2a5] text-[#fae2a5]'
                    : 'bg-[#15171f] border-[#252833] text-[#8e8576] hover:text-[#ded8cb]'
                }`}
              >
                {room.name.split(' ')[0]} ({room.division})
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onRequestQuote();
              }}
              className="w-full sm:w-auto gold-gradient-bg hover:gold-gradient-bg-hover text-[#110e08] font-medium text-xs tracking-wider uppercase px-5 py-2.5 rounded-sm shadow-md transition-all cursor-pointer font-sans"
            >
              Commission Similar Space
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
