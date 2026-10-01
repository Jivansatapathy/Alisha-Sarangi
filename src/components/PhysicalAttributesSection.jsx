import React from 'react';

/**
 * PhysicalAttributesSection Component
 * Architectural Editorial Specification Grid for Alisha Sarangi (Lishu).
 */
export default function PhysicalAttributesSection({ onContactClick = null }) {
  return (
    <section 
      id="attributes" 
      className="relative w-full bg-[#0a0d14] text-[#f4efea] py-24 sm:py-32 lg:py-40 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden border-t border-[#182030] z-20 select-none"
    >
      {/* Subtle brand ambient lighting */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(34, 48, 74, 0.35) 0%, rgba(10, 13, 20, 0) 70%)'
        }}
      />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#c9ada7]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Editorial fine grain */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        
        {/* ========================================================================= */}
        {/* 1. HEADER: MODEL PROFILE & PHYSICAL ATTRIBUTES                            */}
        {/* ========================================================================= */}
        <div className="mb-14 sm:mb-20 space-y-3">
          <div className="flex items-center space-x-3">
            <span className="text-[11px] sm:text-[12px] tracking-[0.42em] uppercase font-sans font-semibold text-[#8f9bb3]">
              PROFILE & SPECIFICATIONS
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#182030] text-[10px] font-mono tracking-widest text-[#c9ada7]">
              LISHU
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[58px] font-normal text-[#f4efea] tracking-tight leading-none">
            Physical Attributes
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* 2. ARCHITECTURAL 4-COLUMN SPECIFICATION GRID                              */}
        {/* ========================================================================= */}
        <div className="w-full border-t border-[#1e2738]">
          
          {/* ROW 1: Height | Dress Size | Hair Colour | Eye Colour */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-b border-[#1e2738]">
            
            {/* HEIGHT */}
            <div className="py-8 sm:py-10 px-3 sm:px-6 md:px-8 md:border-r border-[#1e2738] flex flex-col justify-center space-y-2.5 group hover:bg-[#121927]/40 transition-colors duration-300">
              <span className="text-[10.5px] sm:text-[11px] tracking-[0.32em] uppercase font-sans font-medium text-[#7d8b9f] group-hover:text-[#c9ada7] transition-colors">
                HEIGHT
              </span>
              <div className="font-serif text-2xl sm:text-3xl lg:text-[32px] text-[#f4efea] tracking-tight font-normal">
                5'5" <span className="font-sans font-light text-[#8f9bb3] text-xl sm:text-2xl">· 165cm</span>
              </div>
            </div>

            {/* DRESS SIZE */}
            <div className="py-8 sm:py-10 px-3 sm:px-6 md:px-8 md:border-r border-[#1e2738] flex flex-col justify-center space-y-2.5 group hover:bg-[#121927]/40 transition-colors duration-300 border-t sm:border-t-0 border-[#1e2738]">
              <span className="text-[10.5px] sm:text-[11px] tracking-[0.32em] uppercase font-sans font-medium text-[#7d8b9f] group-hover:text-[#c9ada7] transition-colors">
                DRESS SIZE
              </span>
              <div className="font-serif text-2xl sm:text-3xl lg:text-[32px] text-[#f4efea] tracking-tight font-normal">
                S <span className="font-sans font-light text-[#8f9bb3] text-lg sm:text-xl">(Small)</span>
              </div>
            </div>

            {/* HAIR COLOUR */}
            <div className="py-8 sm:py-10 px-3 sm:px-6 md:px-8 md:border-r border-[#1e2738] flex flex-col justify-center space-y-2.5 group hover:bg-[#121927]/40 transition-colors duration-300 border-t md:border-t-0 border-[#1e2738]">
              <span className="text-[10.5px] sm:text-[11px] tracking-[0.32em] uppercase font-sans font-medium text-[#7d8b9f] group-hover:text-[#c9ada7] transition-colors">
                HAIR COLOUR
              </span>
              <div className="font-serif text-2xl sm:text-3xl lg:text-[32px] text-[#f4efea] tracking-tight font-normal">
                Black
              </div>
            </div>

            {/* EYE COLOUR */}
            <div className="py-8 sm:py-10 px-3 sm:px-6 md:px-8 flex flex-col justify-center space-y-2.5 group hover:bg-[#121927]/40 transition-colors duration-300 border-t sm:border-t-0 border-[#1e2738]">
              <span className="text-[10.5px] sm:text-[11px] tracking-[0.32em] uppercase font-sans font-medium text-[#7d8b9f] group-hover:text-[#c9ada7] transition-colors">
                EYE COLOUR
              </span>
              <div className="font-serif text-2xl sm:text-3xl lg:text-[32px] text-[#f4efea] tracking-tight font-normal">
                Black
              </div>
            </div>

          </div>

          {/* ROW 2: Skin Colour | City & Origin | Moniker | Brand Association */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-b border-[#1e2738]">
            
            {/* SKIN COLOUR */}
            <div className="py-8 sm:py-10 px-3 sm:px-6 md:px-8 md:border-r border-[#1e2738] flex flex-col justify-center space-y-2.5 group hover:bg-[#121927]/40 transition-colors duration-300">
              <span className="text-[10.5px] sm:text-[11px] tracking-[0.32em] uppercase font-sans font-medium text-[#7d8b9f] group-hover:text-[#c9ada7] transition-colors">
                SKIN COLOUR
              </span>
              <div className="font-serif text-2xl sm:text-3xl lg:text-[32px] text-[#f4efea] tracking-tight font-normal">
                Medium Tan
              </div>
            </div>

            {/* CITY & BASE */}
            <div className="py-8 sm:py-10 px-3 sm:px-6 md:px-8 md:border-r border-[#1e2738] flex flex-col justify-center space-y-2.5 group hover:bg-[#121927]/40 transition-colors duration-300 border-t sm:border-t-0 border-[#1e2738]">
              <span className="text-[10.5px] sm:text-[11px] tracking-[0.32em] uppercase font-sans font-medium text-[#7d8b9f] group-hover:text-[#c9ada7] transition-colors">
                CITY / ORIGIN
              </span>
              <div className="font-serif text-2xl sm:text-3xl lg:text-[32px] text-[#f4efea] tracking-tight font-normal">
                Bargarh, Odisha
              </div>
            </div>

            {/* BRAND FEATURE */}
            <div className="py-8 sm:py-10 px-3 sm:px-6 md:px-8 md:border-r border-[#1e2738] flex flex-col justify-center space-y-2.5 group hover:bg-[#121927]/40 transition-colors duration-300 border-t md:border-t-0 border-[#1e2738]">
              <span className="text-[10.5px] sm:text-[11px] tracking-[0.32em] uppercase font-sans font-medium text-[#7d8b9f] group-hover:text-[#c9ada7] transition-colors">
                BRAND FACE
              </span>
              <div className="font-serif text-xl sm:text-2xl lg:text-[26px] text-[#f4efea] tracking-tight font-normal">
                Model of SHEFORMAL
              </div>
            </div>

            {/* ACTING SPECIALTY */}
            <div className="py-8 sm:py-10 px-3 sm:px-6 md:px-8 flex flex-col justify-center space-y-2.5 group hover:bg-[#121927]/40 transition-colors duration-300 border-t sm:border-t-0 border-[#1e2738]">
              <span className="text-[10.5px] sm:text-[11px] tracking-[0.32em] uppercase font-sans font-medium text-[#7d8b9f] group-hover:text-[#c9ada7] transition-colors">
                SCREEN DEBUT
              </span>
              <div className="font-serif text-xl sm:text-2xl lg:text-[26px] text-[#f4efea] tracking-tight font-normal">
                "THE GUEST" (Short Film)
              </div>
            </div>

          </div>

          {/* ROW 3: Skills | Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* SKILLS & TALENTS */}
            <div className="py-8 sm:py-10 px-3 sm:px-6 md:px-8 md:border-r border-[#1e2738] flex flex-col justify-center space-y-2.5 group hover:bg-[#121927]/40 transition-colors duration-300 border-b border-[#1e2738]">
              <span className="text-[10.5px] sm:text-[11px] tracking-[0.32em] uppercase font-sans font-medium text-[#7d8b9f] group-hover:text-[#c9ada7] transition-colors">
                SKILLS & TALENTS
              </span>
              <div className="font-serif text-xl sm:text-2xl lg:text-[26px] text-[#f4efea] tracking-tight font-normal leading-snug">
                Singing · Acting · Dance · Art · Guitarist
              </div>
            </div>

            {/* LANGUAGES */}
            <div className="py-8 sm:py-10 px-3 sm:px-6 md:px-8 flex flex-col justify-center space-y-2.5 group hover:bg-[#121927]/40 transition-colors duration-300 border-b border-[#1e2738]">
              <span className="text-[10.5px] sm:text-[11px] tracking-[0.32em] uppercase font-sans font-medium text-[#7d8b9f] group-hover:text-[#c9ada7] transition-colors">
                LANGUAGES
              </span>
              <div className="font-serif text-xl sm:text-2xl lg:text-[26px] text-[#f4efea] tracking-tight font-normal leading-snug">
                Hindi · English · Odia
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
