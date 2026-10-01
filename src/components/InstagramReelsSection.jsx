import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowUpRight, Sparkles, ExternalLink, X } from 'lucide-react';

/**
 * InstagramReelsSection Component
 * Pure High-Fashion Direct Video Showcase for Alisha Sarangi (@the__leeeesu).
 * Renders direct, native high-resolution vertical MP4 videos with zero iframe or post clutter.
 */
export default function InstagramReelsSection() {
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [mutedStates, setMutedStates] = useState({
    'reel-1': true,
    'reel-2': true,
    'reel-3': true,
    'reel-4': true
  });

  const reels = [
    {
      id: 'reel-1',
      title: 'SHEFORMAL Office & Retro Campaign',
      category: 'Brand Commercial',
      number: '01',
      videoSrc: '/images/VID_20260527_061035_166.mp4',
      instagramUrl: 'https://www.instagram.com/the__leeeesu'
    },
    {
      id: 'reel-2',
      title: 'Fashion Show Runway Catwalk',
      category: 'Runway Presentation',
      number: '02',
      videoSrc: '/images/VID-20260506-WA0008.mp4',
      instagramUrl: 'https://www.instagram.com/the__leeeesu'
    },
    {
      id: 'reel-3',
      title: 'SHEFORMAL Editorial Motion Study',
      category: 'Editorial Lookbook',
      number: '03',
      videoSrc: '/images/VID-20260521-WA0018.mp4',
      instagramUrl: 'https://www.instagram.com/the__leeeesu'
    },
    {
      id: 'reel-4',
      title: 'SHEFORMAL Backstage & Lens Motion',
      category: 'Behind The Scenes',
      number: '04',
      videoSrc: '/images/VID-20260529-WA0027.mp4',
      instagramUrl: 'https://www.instagram.com/the__leeeesu'
    }
  ];

  const toggleMute = (reelId, e) => {
    e.stopPropagation();
    setMutedStates((prev) => ({
      ...prev,
      [reelId]: !prev[reelId]
    }));
  };

  return (
    <section 
      id="reels" 
      className="relative w-full bg-[#080b11] text-[#f4efea] py-20 sm:py-28 lg:py-32 px-6 sm:px-10 md:px-14 lg:px-20 overflow-hidden border-t border-[#182030] z-20 select-none"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#e1306c]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-[#c9ada7]/8 rounded-full blur-[150px] pointer-events-none" />

      {/* Editorial film grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1c263a]/80">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#121622] border border-[#223048] text-[11px] font-mono tracking-[0.35em] text-[#c9ada7] uppercase">
              <Sparkles size={12} className="text-[#e1306c]" />
              <span>INSTAGRAM REELS SHOWCASE</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] font-normal text-[#f4efea] tracking-tight">
              Motion <span className="italic text-[#c9ada7] font-normal">& Moments</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-xs sm:text-sm text-[#8f9bb3] font-sans font-light max-w-xs md:text-right leading-relaxed">
              Curated short-form vertical reels from <span className="text-[#f4efea] font-medium">@the__leeeesu</span>
            </p>
            
            <a 
              href="https://instagram.com/the__leeeesu" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#121622] hover:bg-[#c9ada7] text-[#c9ada7] hover:text-[#09090b] border border-[#223048] hover:border-[#c9ada7] text-xs font-mono tracking-wider transition-all duration-300 shadow-md group cursor-pointer"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-[#e1306c]"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              <span>Follow @the__leeeesu</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4-COLUMN PURE DIRECT NATIVE VIDEO CARDS (9:16 VERTICAL ASPECT RATIO)      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reels.map((reel) => (
            <div 
              key={reel.id}
              onClick={() => setActiveVideoModal(reel)}
              className="group relative flex flex-col bg-[#0c101a] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#1e2738] hover:border-[#c9ada7] transition-all duration-500 shadow-2xl hover:shadow-[0_25px_60px_rgba(0,0,0,0.95)] hover:-translate-y-2 cursor-pointer"
            >
              {/* 9:16 Pure Video Display Container */}
              <div className="relative aspect-[9/16] w-full bg-black overflow-hidden">
                <video
                  src={reel.videoSrc}
                  autoPlay
                  loop
                  muted={mutedStates[reel.id]}
                  playsInline
                  className="w-full h-full object-cover filter contrast-[1.04] brightness-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />

                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/40 pointer-events-none" />

                {/* Top Toolbar: Number & Sound Toggle */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-[#c9ada7] border border-white/10">
                    0{reel.number}
                  </span>

                  <button
                    onClick={(e) => toggleMute(reel.id, e)}
                    className="w-8 h-8 rounded-full bg-black/60 hover:bg-white text-white hover:text-black border border-white/15 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg"
                    title={mutedStates[reel.id] ? "Unmute sound" : "Mute sound"}
                  >
                    {mutedStates[reel.id] ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  </button>
                </div>

                {/* Center Hover Play Indicator */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="w-14 h-14 rounded-full bg-[#f4efea]/90 text-[#09090b] flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.8)] scale-90 group-hover:scale-100 transition-transform">
                    <Play size={22} fill="#09090b" className="ml-1 text-[#09090b]" />
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 z-20 space-y-1 pointer-events-none">
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#c9ada7] block font-semibold">
                    {reel.category}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-white leading-snug line-clamp-2">
                    {reel.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="p-3.5 bg-[#0d111a] border-t border-[#182030] flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-[#c9ada7] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9ada7] animate-pulse" />
                  <span>HD Video</span>
                </span>

                <a
                  href={reel.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-3 py-1 rounded-full bg-[#141b29] hover:bg-[#c9ada7] text-[#c9ada7] hover:text-[#09090b] border border-[#223048] text-[11px] font-mono flex items-center space-x-1 transition-all"
                  title="View on Instagram"
                >
                  <span>Instagram</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* THEATER FULL-FRAME VIDEO MODAL                                            */}
      {/* ========================================================================= */}
      {activeVideoModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#09090b]/96 backdrop-blur-2xl animate-in fade-in duration-300"
          onClick={() => setActiveVideoModal(null)}
        >
          <div 
            className="relative w-full max-w-lg bg-[#0c101a] border border-[#c9ada7]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-[#09090b] border-b border-[#223048]">
              <div className="flex items-center space-x-2.5">
                <span className="w-2 h-2 rounded-full bg-[#c9ada7] animate-ping" />
                <div>
                  <span className="text-[10px] tracking-[0.25em] text-[#c9ada7] uppercase font-mono block">
                    0{activeVideoModal.number} · {activeVideoModal.category}
                  </span>
                  <h4 className="text-base font-serif text-[#f4efea] truncate max-w-[280px]">
                    {activeVideoModal.title}
                  </h4>
                </div>
              </div>

              <button
                onClick={() => setActiveVideoModal(null)}
                className="p-2 text-[#8f9bb3] hover:text-[#f4efea] transition-colors rounded-full hover:bg-white/10 cursor-pointer"
                aria-label="Close video player"
              >
                <X size={20} />
              </button>
            </div>

            {/* Native 9:16 Video Player with Controls */}
            <div className="relative w-full max-h-[72vh] bg-black flex items-center justify-center p-2 overflow-hidden">
              <video
                src={activeVideoModal.videoSrc}
                controls
                autoPlay
                playsInline
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3.5 bg-[#09090b] border-t border-[#182030] flex items-center justify-between text-xs text-[#8f9bb3] font-mono">
              <span className="text-[#c9ada7]">Alisha Sarangi (Lishu)</span>
              <a
                href={activeVideoModal.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#f4efea] hover:text-[#c9ada7] underline underline-offset-4 flex items-center gap-1"
              >
                <span>View on @the__leeeesu</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
