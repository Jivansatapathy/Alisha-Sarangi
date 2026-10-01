import React, { useState } from 'react';
import { Play, X, ExternalLink } from 'lucide-react';

/**
 * FilmographySection Component
 * Dedicated Motion & Video Showcase for Alisha Sarangi (Lishu).
 * Features portrait & cinematic video cards matching native vertical video & film features:
 * 1. SHEFORMAL Campaign Video (VID_20260527_061035_166.mp4) - Poster: Picsart_26-05-16_18-36-33-866.jpg.jpeg
 * 2. Fashion Show Runway (VID-20260506-WA0008.mp4) - Poster: Picsart_26-05-05_14-44-52-097.jpg.jpeg
 * 3. SHEFORMAL Editorial Work (VID-20260521-WA0018.mp4) - Poster: Screenshot_2026-07-17-01-59-59-834_com.android.chrome.jpg.jpeg
 * 4. SHEFORMAL Motion Series (VID-20260529-WA0027.mp4) - Poster: alisha-about-portrait.jpg
 * 5. THE GUEST & Motion Showcase (YouTube: QVDHz6psKRE)
 */
export default function FilmographySection() {
  const [activeVideo, setActiveVideo] = useState(null);

  const videoWorks = [
    {
      id: 'v1',
      title: 'SHEFORMAL Campaign Video',
      type: 'Official Brand Commercial',
      number: '01',
      videoSrc: '/images/VID_20260527_061035_166.mp4',
      poster: '/images/Picsart_26-05-16_18-36-33-866.jpg.jpeg',
      description: 'Official campaign commercial for SHEFORMAL featuring Alisha Sarangi.'
    },
    {
      id: 'v2',
      title: 'Fashion Show Runway',
      type: 'Runway Presentation',
      number: '02',
      videoSrc: '/images/VID-20260506-WA0008.mp4',
      poster: '/images/Picsart_26-05-05_14-44-52-097.jpg.jpeg',
      description: 'Live haute couture runway catwalk showcasing poise, styling, and presence.'
    },
    {
      id: 'v3',
      title: 'SHEFORMAL Editorial Work',
      type: 'Brand Motion & Lookbook',
      number: '03',
      videoSrc: '/images/VID-20260521-WA0018.mp4',
      poster: '/images/Screenshot_2026-07-17-01-59-59-834_com.android.chrome.jpg.jpeg',
      description: 'Dynamic editorial fashion motion study and lookbook series.'
    },
    {
      id: 'v4',
      title: 'SHEFORMAL Motion Series',
      type: 'Brand Ambassadorship',
      number: '04',
      videoSrc: '/images/VID-20260529-WA0027.mp4',
      poster: '/images/alisha-about-portrait.jpg',
      description: 'High-fashion kinetic showcase and cinematic brand presentation.'
    },
    {
      id: 'v5',
      title: 'THE GUEST & Motion Showcase',
      type: 'Cinematic Feature Film',
      number: '05',
      isYoutube: true,
      youtubeId: 'QVDHz6psKRE',
      poster: 'https://img.youtube.com/vi/QVDHz6psKRE/hqdefault.jpg',
      description: 'Odia cinematic film showcase and artistic motion spotlight on YouTube.'
    }
  ];

  return (
    <section 
      id="filmography" 
      className="relative w-full bg-[#09090b] text-[#f4efea] py-20 sm:py-28 lg:py-32 px-6 sm:px-10 md:px-14 lg:px-20 overflow-hidden border-t border-[#182030] z-20 select-none"
    >
      {/* Ambient background glows */}
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
        {/* 1. SECTION HEADER                                                         */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1c263a]/80">
          <div className="space-y-2">
            <span className="text-[11px] sm:text-[12px] tracking-[0.45em] uppercase font-sans font-semibold text-[#c9ada7] block">
              MOTION & FILMOGRAPHY
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] font-normal text-[#f4efea] tracking-tight">
              Selected Screen Work
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#8f9bb3] font-sans font-light max-w-md md:text-right leading-relaxed">
            Runway presentations, SHEFORMAL brand campaigns, and cinematic YouTube motion reels.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. TALL PORTRAIT VIDEO CARDS GRID                                         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {videoWorks.map((vid) => (
            <div 
              key={vid.id}
              className="group flex flex-col space-y-4 cursor-pointer"
              onClick={() => setActiveVideo(vid)}
            >
              {/* Tall Portrait Video Card */}
              <div className="relative aspect-[3/4] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0c101a] border border-[#1e2738] group-hover:border-[#c9ada7] transition-all duration-500 shadow-xl group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.85)] group-hover:-translate-y-1.5">
                
                {/* Full-Height Portrait Poster Image */}
                <img 
                  src={vid.poster} 
                  alt={vid.title}
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[0.88] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Subtle dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/30 pointer-events-none" />

                {/* Top Badge: Category & Number */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-[#c9ada7] border border-white/10">
                    {vid.type}
                  </span>
                  <span className="text-xs font-mono text-[#8f9bb3] tracking-widest bg-black/60 px-2.5 py-0.5 rounded-full border border-white/10">
                    {vid.number}
                  </span>
                </div>

                {/* Centered Circular Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#f4efea]/90 group-hover:bg-[#f4efea] text-[#09090b] flex items-center justify-center transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.7)] group-hover:scale-110">
                    <Play size={24} fill="#09090b" className="ml-1 text-[#09090b]" />
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-[#d4d2db] pointer-events-none">
                  <span className="font-mono text-[11px] text-[#c9ada7] tracking-wider uppercase">
                    {vid.isYoutube ? "Watch on YouTube" : "Play Full HD Video"}
                  </span>
                  <span className="font-mono text-[10px] text-[#8f9bb3]">
                    {vid.isYoutube ? "4K Video" : "HD 1080p"}
                  </span>
                </div>
              </div>

              {/* Bottom Metadata: Title & Description */}
              <div className="flex items-baseline justify-between pt-1 px-1">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#f4efea] group-hover:text-[#c9ada7] transition-colors">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-[#8f9bb3] font-sans font-light mt-0.5 max-w-xs">
                    {vid.description}
                  </p>
                </div>

                <span className="font-mono text-xs text-[#c9ada7] tracking-widest font-semibold flex-shrink-0 ml-4">
                  0{vid.number}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 3. FULL HD NATIVE VIDEO & YOUTUBE MODAL PLAYER                            */}
      {/* ========================================================================= */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#09090b]/95 backdrop-blur-2xl animate-in fade-in duration-300"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c101a] border border-[#c9ada7]/40 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#09090b] border-b border-[#223048]">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#c9ada7] animate-ping" />
                <div>
                  <span className="text-[10px] tracking-[0.3em] text-[#c9ada7] uppercase font-mono block">
                    {activeVideo.number} · {activeVideo.type}
                  </span>
                  <h4 className="text-lg sm:text-xl font-serif text-[#f4efea]">
                    {activeVideo.title}
                  </h4>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                {activeVideo.isYoutube && (
                  <a
                    href={`https://youtu.be/${activeVideo.youtubeId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#141b29] hover:bg-[#c9ada7] text-[#c9ada7] hover:text-[#09090b] border border-[#223048] text-xs font-mono transition-colors"
                    title="Open on YouTube"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink size={13} />
                  </a>
                )}

                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-2 text-[#8f9bb3] hover:text-[#f4efea] transition-colors rounded-full hover:bg-white/10 cursor-pointer"
                  aria-label="Close video player"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            {/* Video Player Canvas */}
            <div className="relative w-full max-h-[74vh] bg-black flex items-center justify-center p-2 sm:p-4 overflow-hidden">
              {activeVideo.isYoutube ? (
                <div className="relative aspect-video w-full">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0 rounded-xl"
                  />
                </div>
              ) : (
                <video
                  src={activeVideo.videoSrc}
                  poster={activeVideo.poster}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 bg-[#09090b] border-t border-[#182030] flex flex-wrap items-center justify-between text-xs text-[#8f9bb3] font-mono gap-2">
              <span className="text-[#c9ada7]">Alisha Sarangi (Lishu) · Motion Archive</span>
              <span>{activeVideo.isYoutube ? "Official YouTube Cinematic Stream" : "HD 1080p Original Video"}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
