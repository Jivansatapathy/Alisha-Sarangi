import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

/**
 * AboutSection Component
 * Ultra-clean, aesthetic editorial "About" section for Alisha Sarangi (Lishu).
 * Minimalist luxury layout with spacious typography and photographic elegance.
 */
export default function AboutSection({ onExploreClick = null }) {
  return (
    <section 
      id="about" 
      className="relative w-full bg-[#f5f6f8] text-[#112338] py-20 sm:py-28 lg:py-32 px-6 sm:px-10 md:px-14 lg:px-20 overflow-hidden z-20"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f6f8] via-[#eef3f8] to-[#f5f6f8] pointer-events-none" />

      {/* Subtle ambient decorative blur circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#1e3a5f]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#c9ada7]/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* ======================================================== */}
        {/* MAIN 2-COLUMN EDITORIAL GRID                             */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: MINIMALIST TYPOGRAPHY & BIO                 */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 flex flex-col space-y-6 sm:space-y-7 z-10">
            
            {/* 1. Eyebrow Tag */}
            <div className="flex items-center space-x-3">
              <span className="text-[11px] sm:text-[12px] tracking-[0.42em] uppercase font-sans font-bold text-[#1e3a5f]">
                ABOUT
              </span>
              <div className="w-10 h-[1.5px] bg-[#1e3a5f]/40" />
            </div>

            {/* 2. Main Display Headline */}
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] leading-[1.06] font-normal text-[#0f1f33] tracking-tight">
                Model, actress &
                <br />
                creative <span className="italic font-serif font-light text-[#1e3a5f]">force.</span>
              </h2>
            </div>

            {/* 3. Refined Editorial Bio */}
            <p className="text-sm sm:text-base lg:text-[16.5px] text-[#475569] leading-relaxed font-sans font-light max-w-lg">
              <strong className="text-[#0f1f33] font-medium">Alisha Sarangi (Lishu)</strong> is a runway model and actress from Bargarh, Odisha — known as the face of <strong className="text-[#0f1f33] font-medium">SHEFORMAL</strong> and lead in the Odia film <em className="text-[#1e3a5f] font-serif">“THE GUEST”</em>. Bringing an authentic edge across high-fashion runways, cinematic roles, and musical expression.
            </p>

            {/* 4. Explore CTA Button */}
            <div className="pt-2">
              <button 
                onClick={onExploreClick}
                className="group inline-flex items-center space-x-3 px-8 py-3.5 rounded-full bg-[#0f1f33] text-white hover:bg-[#1a3354] transition-all duration-300 text-xs tracking-[0.25em] uppercase font-sans font-semibold shadow-lg shadow-[#0f1f33]/20 hover:shadow-xl hover:translate-x-1 cursor-pointer"
              >
                <span>EXPLORE WORK</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: PROMINENT MULTI-LAYERED COLLAGE            */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end pt-8 pb-12 lg:py-0">
            
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
                  src="/images/Picsart_26-09-20_09-30-54-439.png" 
                  alt="Alisha Sarangi Portrait" 
                  className="w-full h-full object-cover object-center filter contrast-[1.04] group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f33]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Secondary Floating Portrait Card (Enlarged) */}
              <div className="absolute -bottom-10 -left-6 sm:-left-10 lg:-left-14 z-20 w-44 sm:w-56 md:w-60 lg:w-64 aspect-[4/5] rounded-3xl overflow-hidden border-4 sm:border-[6px] border-white shadow-[0_25px_50px_rgba(0,0,0,0.35)] bg-neutral-900 group">
                <img 
                  src="/images/Picsart_26-04-10_14-55-41-252.jpg.jpeg" 
                  alt="Alisha Sarangi Portrait" 
                  className="w-full h-full object-cover object-top filter contrast-[1.05] group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* FLOATING QUOTE CARD */}
              <div className="absolute -bottom-10 -right-4 sm:-right-8 z-20 bg-[#eaf1f7]/98 border border-[#c8d9e8] rounded-3xl p-5 sm:p-6 shadow-2xl max-w-[240px] sm:max-w-[290px] backdrop-blur-md hover:-translate-y-1 transition-transform duration-300">
                <div className="text-[#7ea1c6] text-3xl sm:text-4xl font-serif leading-none select-none mb-1.5">
                  “
                </div>
                <p className="font-serif italic text-sm sm:text-base lg:text-[17px] text-[#0f1f33] leading-[1.38] tracking-wide">
                  Modelling and acting are channels to express the bold, the dark, and the authentic.
                </p>
                
                <div className="w-10 h-[2px] bg-[#7ea1c6]/60 rounded-full mt-3 mx-auto" />
              </div>

              {/* CURSIVE SIGNATURE - Shifted Left & Elegantly Positioned */}
              <div className="absolute top-4 sm:top-6 right-6 sm:right-10 lg:right-12 z-30 pointer-events-none select-none transform -rotate-[8deg] hidden sm:block">
                <div className="flex flex-col items-center">
                  <span className="font-['Alex_Brush',cursive] text-5xl sm:text-6xl lg:text-[62px] text-white mix-blend-difference whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                    Alisha Sarangi
                  </span>
                  <div className="w-24 h-[1.5px] bg-white mix-blend-difference -mt-2 rounded-full opacity-80" />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

