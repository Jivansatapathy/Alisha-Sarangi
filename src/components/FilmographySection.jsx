import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

/**
 * FilmographySection Component
 * Clean, minimalist YouTube filmography and motion video showcase.
 * Strictly adheres to design specifications:
 * - Brand luxury dark color palette (#09090b, #c9ada7, #f4efea)
 * - Minimalist 2-column layout matching reference
 * - Title + category in parentheses on left, number on right
 * - Zero badge clutter, no extra paragraphs
 * - Interactive YouTube modal video player with autoplay
 */
export default function FilmographySection() {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      id: 'v1',
      title: 'THE GUEST',
      type: 'Odia Short Film',
      number: '01',
      youtubeId: 'kJQP7kiw5Fk',
      thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80',
      alt: 'THE GUEST Odia Short Film'
    },
    {
      id: 'v2',
      title: 'SHEFORMAL Campaign',
      type: 'Brand Shoot & Lookbook',
      number: '02',
      youtubeId: 'fJ9rUzIMcZQ',
      thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
      alt: 'SHEFORMAL Fashion Brand Shoot'
    },
    {
      id: 'v3',
      title: 'Runway Fashion Showcase',
      type: 'Runway Walk',
      number: '03',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
      alt: 'Runway Fashion Show'
    },
    {
      id: 'v4',
      title: 'Acoustic & Vocals Session',
      type: 'Music & Guitar',
      number: '04',
      youtubeId: 'L_LUpnjgPso',
      thumbnail: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=1200&q=80',
      alt: 'Guitarist & Singer Showcase'
    }
  ];

  return (
    <section 
      id="filmography" 
      className="relative w-full bg-[#09090b] text-[#f4efea] py-20 sm:py-28 lg:py-32 px-6 sm:px-10 md:px-14 lg:px-20 overflow-hidden border-t border-[#182030] z-20 select-none"
    >
      {/* Dynamic ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#1a2744]/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-[#c9ada7]/8 rounded-full blur-[150px] pointer-events-none" />

      {/* Editorial film grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER (Clean layout matching reference)                       */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1c263a]/80">
          <div className="space-y-2">
            <span className="text-[11px] sm:text-[12px] tracking-[0.45em] uppercase font-sans font-semibold text-[#c9ada7] block">
              FILMOGRAPHY
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] font-normal text-[#f4efea] tracking-tight">
              Selected Work
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#8f9bb3] font-sans font-light max-w-md md:text-right leading-relaxed">
            Web series, short films, music video and advertisement, 2023–2026.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. 2-COLUMN YOUTUBE VIDEO GRID                                            */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {videos.map((vid) => (
            <div 
              key={vid.id}
              className="group flex flex-col space-y-3 cursor-pointer"
              onClick={() => setActiveVideo(vid)}
            >
              {/* Video Thumbnail Card */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#0c101a] border border-[#1e2738] group-hover:border-[#c9ada7] transition-all duration-500 shadow-xl group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
                {/* Image Poster */}
                <img 
                  src={vid.thumbnail} 
                  alt={vid.alt}
                  className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.88] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Subtle dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Centered Circular Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#f4efea]/90 group-hover:bg-[#f4efea] text-[#09090b] flex items-center justify-center transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.6)] group-hover:scale-110">
                    <Play size={22} fill="#09090b" className="ml-1 text-[#09090b]" />
                  </div>
                </div>
              </div>

              {/* Bottom Metadata: Title (Type) on Left, Number on Right */}
              <div className="flex items-baseline justify-between pt-1 px-1">
                <h3 className="font-serif text-lg sm:text-xl text-[#f4efea] group-hover:text-[#c9ada7] transition-colors">
                  {vid.title}{' '}
                  <span className="font-serif italic font-light text-[#8f9bb3] text-base sm:text-lg">
                    ({vid.type})
                  </span>
                </h3>

                <span className="font-mono text-xs text-[#8f9bb3] tracking-widest">
                  {vid.number}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 3. LUXURY YOUTUBE MODAL PLAYER                                            */}
      {/* ========================================================================= */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#09090b]/94 backdrop-blur-2xl animate-in fade-in duration-300"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-5xl bg-[#0c101a] border border-[#c9ada7]/40 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#09090b] border-b border-[#223048]">
              <div>
                <span className="text-[10px] tracking-[0.3em] text-[#c9ada7] uppercase font-mono block">
                  {activeVideo.number} · {activeVideo.type}
                </span>
                <h4 className="text-xl font-serif text-[#f4efea]">
                  {activeVideo.title}
                </h4>
              </div>

              <button
                onClick={() => setActiveVideo(null)}
                className="p-2 text-[#8f9bb3] hover:text-[#f4efea] transition-colors rounded-full hover:bg-white/10 cursor-pointer"
                aria-label="Close video player"
              >
                <X size={22} />
              </button>
            </div>

            {/* Responsive 16:9 YouTube Player Iframe */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
