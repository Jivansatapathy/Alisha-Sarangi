import React from 'react';
import { 
  Calendar, 
  Award, 
  Globe, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';

/**
 * AboutSection Component
 * High-fashion editorial "About Me" section tailored for Alisha Sarangi (Lishu).
 */
export default function AboutSection({ onExploreClick = null }) {
  const tickerItems = [
    "MODEL OF SHEFORMAL",
    "THE GUEST (ODIA SHORT FILM)",
    "RUNWAY FASHION SHOWS",
    "BOLD & DARK CINEMATIC ROLES",
    "GUITARIST & PASSIONATE SINGER",
    "OFFICE-WEAR BRAND CAMPAIGN",
    "BARGARH · ODISHA"
  ];

  return (
    <section 
      id="about" 
      className="relative w-full bg-[#f5f6f8] text-[#112338] py-20 sm:py-28 lg:py-36 px-5 sm:px-10 md:px-14 lg:px-20 overflow-hidden z-20"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f6f8] via-[#eef3f8] to-[#f5f6f8] pointer-events-none" />

      {/* Subtle ambient decorative blur circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#1e3a5f]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#c9ada7]/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* ======================================================== */}
        {/* MAIN 2-COLUMN GRID                                       */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: HEADLINE, BIO, REDESIGNED STAT CARDS & CTA  */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 flex flex-col space-y-7 sm:space-y-8 z-10">
            
            {/* 1. Eyebrow Tag with Moniker Badge */}
            <div className="flex items-center space-x-3.5">
              <span className="text-[12px] tracking-[0.42em] uppercase font-sans font-bold text-[#1e3a5f]">
                ABOUT ME
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#1e3a5f]/10 text-[10px] font-mono tracking-widest text-[#1e3a5f] font-semibold">
                LISHU
              </span>
              <div className="w-12 h-[2px] bg-[#1e3a5f]/40 rounded-full" />
            </div>

            {/* 2. Main Display Headline */}
            <div className="space-y-1">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] leading-[1.05] font-normal text-[#0f1f33] tracking-tight">
                Model, actress &
                <br />
                creative <span className="italic font-serif font-normal text-[#1e3a5f]">force.</span>
              </h2>
            </div>

            {/* 3. Bio Description Paragraph */}
            <p className="text-sm sm:text-[15.5px] lg:text-[16.5px] text-[#475569] leading-relaxed font-sans font-light max-w-xl">
              <strong className="text-[#0f1f33] font-medium">Alisha Sarangi (Lishu)</strong> is a versatile model and actress from Bargarh, Odisha, with proven experience in high-fashion runway shows, brand campaigns as the official model of <strong className="text-[#0f1f33] font-medium">SHEFORMAL</strong>, and screen acting in the Odia short film <em className="text-[#1e3a5f] font-serif">“THE GUEST”</em>. Skilled across modeling, acting, and dance, she possesses a distinct passion for bold, dark, and horror-oriented characters, alongside musical artistry as a guitarist and passionate singer.
            </p>

            {/* 4. REDESIGNED STAT & CREDENTIAL CARDS (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 max-w-xl">
              
              {/* Card 1: RUNWAY & SCREEN */}
              <div className="group bg-white/95 backdrop-blur-md border border-[#d9e2ec] hover:border-[#1e3a5f]/40 rounded-2xl p-4.5 sm:p-5 shadow-[0_4px_20px_rgba(15,31,51,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,51,0.09)] hover:-translate-y-0.5 transition-all duration-300 flex items-start space-x-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1e3a5f]/10 to-[#1e3a5f]/5 border border-[#1e3a5f]/15 text-[#1e3a5f] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Calendar size={22} className="stroke-[1.9]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10.5px] tracking-[0.25em] uppercase font-sans font-bold text-[#1e3a5f] truncate">
                    SCREEN WORK
                  </span>
                  <span className="text-base sm:text-[17px] font-sans font-bold text-[#0f1f33] mt-0.5 truncate">
                    “THE GUEST”
                  </span>
                  <span className="text-xs text-[#64748b] font-sans font-normal mt-0.5 truncate">
                    Odia Short Film & Runway
                  </span>
                </div>
              </div>

              {/* Card 2: BRAND FACE */}
              <div className="group bg-white/95 backdrop-blur-md border border-[#d9e2ec] hover:border-[#1e3a5f]/40 rounded-2xl p-4.5 sm:p-5 shadow-[0_4px_20px_rgba(15,31,51,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,51,0.09)] hover:-translate-y-0.5 transition-all duration-300 flex items-start space-x-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1e3a5f]/10 to-[#1e3a5f]/5 border border-[#1e3a5f]/15 text-[#1e3a5f] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Award size={22} className="stroke-[1.9]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10.5px] tracking-[0.25em] uppercase font-sans font-bold text-[#1e3a5f] truncate">
                    BRAND MODEL
                  </span>
                  <span className="text-base sm:text-[17px] font-sans font-bold text-[#0f1f33] mt-0.5 truncate">
                    SHEFORMAL
                  </span>
                  <span className="text-xs text-[#64748b] font-sans font-normal mt-0.5 truncate">
                    Office-Wear Fashion Brand
                  </span>
                </div>
              </div>

              {/* Card 3: TALENTS & SKILLS */}
              <div className="group bg-white/95 backdrop-blur-md border border-[#d9e2ec] hover:border-[#1e3a5f]/40 rounded-2xl p-4.5 sm:p-5 shadow-[0_4px_20px_rgba(15,31,51,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,51,0.09)] hover:-translate-y-0.5 transition-all duration-300 flex items-start space-x-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1e3a5f]/10 to-[#1e3a5f]/5 border border-[#1e3a5f]/15 text-[#1e3a5f] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Sparkles size={22} className="stroke-[1.9]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10.5px] tracking-[0.25em] uppercase font-sans font-bold text-[#1e3a5f] truncate">
                    ARTS & MUSIC
                  </span>
                  <span className="text-base sm:text-[17px] font-sans font-bold text-[#0f1f33] mt-0.5 truncate">
                    Singing · Guitar
                  </span>
                  <span className="text-xs text-[#64748b] font-sans font-normal mt-0.5 truncate">
                    Acting · Dance · Fine Art
                  </span>
                </div>
              </div>

              {/* Card 4: LANGUAGES */}
              <div className="group bg-white/95 backdrop-blur-md border border-[#d9e2ec] hover:border-[#1e3a5f]/40 rounded-2xl p-4.5 sm:p-5 shadow-[0_4px_20px_rgba(15,31,51,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,51,0.09)] hover:-translate-y-0.5 transition-all duration-300 flex items-start space-x-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1e3a5f]/10 to-[#1e3a5f]/5 border border-[#1e3a5f]/15 text-[#1e3a5f] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Globe size={22} className="stroke-[1.9]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10.5px] tracking-[0.25em] uppercase font-sans font-bold text-[#1e3a5f] truncate">
                    LANGUAGES
                  </span>
                  <span className="text-base sm:text-[17px] font-sans font-bold text-[#0f1f33] mt-0.5 truncate">
                    Hindi · English
                  </span>
                  <span className="text-xs text-[#64748b] font-sans font-normal mt-0.5 truncate">
                    Odia (Native)
                  </span>
                </div>
              </div>

            </div>

            {/* 5. Explore CTA Button */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={onExploreClick}
                className="group inline-flex items-center space-x-3.5 px-8 py-4 rounded-xl bg-[#0f1f33] text-white hover:bg-[#1a3354] transition-all duration-300 text-xs tracking-[0.25em] uppercase font-sans font-semibold shadow-lg shadow-[#0f1f33]/25 hover:shadow-xl hover:translate-x-1 cursor-pointer"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              <div className="inline-flex items-center space-x-2 text-xs text-[#64748b] font-sans font-medium pl-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Bargarh, Odisha · Open for Bookings</span>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: PROMINENT MULTI-LAYERED COLLAGE            */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end pt-8 pb-16 lg:py-0">
            
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[460px] xl:max-w-[500px]">
              
              {/* Background Accent Navy Geometry */}
              <div className="absolute -top-10 -left-10 w-60 sm:w-72 h-76 sm:h-96 bg-[#1e3a5f] rounded-[36px] -z-0 transform -rotate-2 shadow-2xl" />

              {/* Decorative Dot Matrix in top-right */}
              <div className="absolute -top-6 -right-6 z-0 grid grid-cols-6 gap-2.5 opacity-30">
                {[...Array(30)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1e3a5f]" />
                ))}
              </div>

              {/* Primary Large Editorial Portrait */}
              <div className="relative z-10 aspect-[3/4] sm:aspect-[4/5] w-full rounded-[32px] overflow-hidden shadow-[0_25px_60px_rgba(15,31,51,0.22)] border-8 border-white bg-slate-200 group">
                <img 
                  src="/model-hero.jpg" 
                  alt="Alisha Sarangi Portrait" 
                  className="w-full h-full object-cover object-center filter contrast-[1.06] brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f33]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Secondary Floating B&W Portrait */}
              <div className="absolute -bottom-10 -left-6 sm:-left-12 z-20 w-40 sm:w-52 aspect-[4/5] rounded-3xl overflow-hidden border-4 sm:border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-neutral-900 group">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85" 
                  alt="Alisha Sarangi Noir" 
                  className="w-full h-full object-cover filter grayscale contrast-125 brightness-95 group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* FLOATING QUOTE CARD */}
              <div className="absolute -bottom-14 -right-4 sm:-right-8 z-20 bg-[#eaf1f7]/98 border border-[#c8d9e8] rounded-3xl p-6 sm:p-7 shadow-2xl max-w-[260px] sm:max-w-[320px] backdrop-blur-md hover:-translate-y-1 transition-transform duration-300">
                <div className="text-[#7ea1c6] text-4xl sm:text-5xl font-serif leading-none select-none mb-2">
                  “
                </div>
                <p className="font-serif italic text-base sm:text-lg lg:text-[19px] text-[#0f1f33] leading-[1.38] tracking-wide">
                  Modelling and acting are channels to express the bold, the dark, and the authentic.
                </p>
                
                <div className="w-14 h-[2px] bg-[#7ea1c6]/60 rounded-full mt-4 mx-auto" />
              </div>

              {/* CURSIVE SIGNATURE */}
              <div className="absolute top-2 sm:top-4 -right-4 sm:-right-8 lg:-right-10 z-30 pointer-events-none select-none transform -rotate-[10deg] hidden sm:block">
                <div className="flex flex-col items-center">
                  <span className="font-['Alex_Brush',cursive] text-5xl sm:text-6xl lg:text-[62px] text-[#0f1f33] drop-shadow-md whitespace-nowrap">
                    Alisha Sarangi
                  </span>
                  <div className="w-24 h-[1.5px] bg-[#1e3a5f]/40 -mt-2 rounded-full" />
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* EDITORIAL RUNWAY & FASHION TICKER STRIP                  */}
        {/* ======================================================== */}
        <div className="mt-24 sm:mt-32 pt-8 border-t border-[#d9e2ec] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[11px] tracking-[0.3em] uppercase font-sans font-bold text-[#1e3a5f] shrink-0">
            HIGHLIGHTS & AFFILIATIONS:
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-3 text-xs tracking-[0.25em] font-sans font-semibold text-[#64748b]">
            {tickerItems.map((item, idx) => (
              <span key={idx} className="hover:text-[#0f1f33] transition-colors whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
