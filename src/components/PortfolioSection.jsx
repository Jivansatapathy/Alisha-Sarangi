import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

/**
 * PortfolioSection Component
 * Recreates the editorial lookbook collage & portrait grid from the reference image.
 * Features:
 * - Base state: Fine-grain Black & White high-fashion portraits
 * - Hover state: Smoothly lights up into rich, vibrant full-color with soft glow & zoom
 * - 100% clean hover: NO text overlay, NO badges, NO icons on hover — pure photo illumination
 * - Category filter tabs (All, Haute Couture, Editorial Covers, Runway, Campaigns)
 * - Interactive high-res lightbox modal
 */
export default function PortfolioSection({ onInquireClick = null }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const categories = [
    { id: 'all', name: 'All Works' },
    { id: 'couture', name: 'Haute Couture' },
    { id: 'editorial', name: 'Editorial Covers' },
    { id: 'runway', name: 'Runway' },
    { id: 'campaigns', name: 'Global Campaigns' }
  ];

  // Curated high-fashion editorial portraits matching the reference collage structure
  const collageHero = [
    {
      id: 'h1',
      title: "Vogue Paris — 'Nocturne Silhouette'",
      category: 'editorial',
      categoryLabel: "Editorial Cover",
      season: "Fall / Winter 2026",
      location: "Paris, France",
      photographer: "Jean-Luc Dubois",
      image: "/images/alisha-about-portrait.jpg",
      spanClass: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[3/4]"
    },
    {
      id: 'h2',
      title: "Saint Laurent — Architectural Line",
      category: 'campaigns',
      categoryLabel: "Global Campaign",
      season: "Spring 2026",
      location: "New York, USA",
      photographer: "Helena Vance",
      image: "/images/Picsart_26-04-09_14-07-49-049.jpg.jpeg",
      spanClass: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[3/4]"
    },
    {
      id: 'h3',
      title: "Chanel Haute Couture Grand Palais",
      category: 'couture',
      categoryLabel: "Haute Couture",
      season: "Spring / Summer 2026",
      location: "Paris, France",
      photographer: "Marco Rossi",
      image: "/images/Picsart_26-04-10_14-55-41-252.jpg.jpeg",
      spanClass: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[3/4]"
    },
    {
      id: 'h4',
      title: "Harper's Bazaar — Motion Study",
      category: 'editorial',
      categoryLabel: "Editorial Spread",
      season: "Winter 2025/26",
      location: "Milan, Italy",
      photographer: "Sofia Alessi",
      image: "/images/Picsart_26-04-10_15-44-29-698.jpg.jpeg",
      spanClass: "col-span-6 sm:col-span-6 lg:col-span-6 aspect-[4/5] sm:aspect-[3/4]"
    },
    {
      id: 'h5',
      title: "Céline Silhouette Study",
      category: 'campaigns',
      categoryLabel: "Campaign Lookbook",
      season: "Spring 2026",
      location: "London, UK",
      photographer: "Arthur Pendelton",
      image: "/images/Picsart_26-04-11_15-34-54-313.jpg.jpeg",
      spanClass: "col-span-6 sm:col-span-6 lg:col-span-6 aspect-[4/5] sm:aspect-[3/4]"
    }
  ];

  // 10 Curated High-Fashion Editorial Plates (Pure high-end model imagery)
  const portraitGrid = [
    {
      id: 'p1',
      title: "High-Key Studio Portrait I",
      category: 'editorial',
      categoryLabel: "Studio Lookbook",
      season: "SS '26",
      location: "Paris Studio",
      photographer: "Jean-Luc Dubois",
      image: "/images/Picsart_26-05-05_14-44-52-097.jpg.jpeg"
    },
    {
      id: 'p2',
      title: "Shadow & Angle Study II",
      category: 'couture',
      categoryLabel: "Haute Couture",
      season: "SS '26",
      location: "Milan Runway",
      photographer: "Sofia Alessi",
      image: "/images/Picsart_26-05-15_18-57-58-330.jpg.jpeg"
    },
    {
      id: 'p3',
      title: "Motion Blur & Kinetic III",
      category: 'editorial',
      categoryLabel: "Cinematic Motion",
      season: "FW '26",
      location: "London Set",
      photographer: "Arthur Pendelton",
      image: "/images/Picsart_26-05-16_18-36-33-866.jpg.jpeg"
    },
    {
      id: 'p4',
      title: "Gaze & Profile IV",
      category: 'campaigns',
      categoryLabel: "Global Campaign",
      season: "SS '26",
      location: "New York",
      photographer: "Helena Vance",
      image: "/images/Picsart_26-05-24_16-36-05-886.jpg.jpeg"
    },
    {
      id: 'p5',
      title: "Runway Light & Stride V",
      category: 'runway',
      categoryLabel: "Runway Presentation",
      season: "SS '26",
      location: "Paris Fashion Week",
      photographer: "Marco Rossi",
      image: "/images/Picsart_26-06-12_01-19-49-258.png"
    },
    {
      id: 'p6',
      title: "Monochrome Grain Expression",
      category: 'editorial',
      categoryLabel: "Editorial Focus",
      season: "SS '26",
      location: "Milan",
      photographer: "Sofia Alessi",
      image: "/images/Picsart_26-07-11_21-02-48-535.jpg.jpeg"
    },
    {
      id: 'p7',
      title: "Editorial Lighting Angle",
      category: 'couture',
      categoryLabel: "Haute Couture",
      season: "SS '26",
      location: "Paris Atelier",
      photographer: "Jean-Luc Dubois",
      image: "/images/Picsart_26-09-20_09-30-54-439.png"
    },
    {
      id: 'p8',
      title: "Haute Couture Headpiece",
      category: 'couture',
      categoryLabel: "Couture Campaign",
      season: "SS '26",
      location: "Paris Grand Palais",
      photographer: "Marco Rossi",
      image: "/images/Picsart_26-09-24_16-40-04-328.png"
    },
    {
      id: 'p9',
      title: "Minimalist Geometry",
      category: 'campaigns',
      categoryLabel: "Lookbook",
      season: "SS '26",
      location: "New York Studio",
      photographer: "Helena Vance",
      image: "/images/Picsart_26-09-24_17-12-59-882.jpg.jpeg"
    },
    {
      id: 'p10',
      title: "Cinematic Close-Up Frame",
      category: 'runway',
      categoryLabel: "Beauty Editorial",
      season: "SS '26",
      location: "Milan Fashion Week",
      photographer: "Sofia Alessi",
      image: "/images/IMG-20260603-WA0030.jpg.jpeg"
    }
  ];

  const filteredCollage = activeCategory === 'all' 
    ? collageHero 
    : collageHero.filter(item => item.category === activeCategory);

  const filteredGrid = activeCategory === 'all' 
    ? portraitGrid 
    : portraitGrid.filter(item => item.category === activeCategory);

  return (
    <section 
      id="portfolio" 
      className="relative w-full bg-[#09090b] text-[#f4efea] py-24 sm:py-32 lg:py-40 px-5 sm:px-10 md:px-14 lg:px-20 overflow-hidden border-t border-[#181820] z-20 select-none"
    >
      {/* Dynamic ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#22223B]/30 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#c9ada7]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Editorial film grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER & CATEGORY FILTER BAR                                   */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#1c263a]">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center space-x-3">
              <span className="text-[11px] sm:text-[12px] tracking-[0.45em] uppercase font-sans font-bold text-[#c9ada7]">
                05 · EDITORIAL PORTFOLIO & ARCHIVE
              </span>
              <div className="w-12 h-[1px] bg-[#c9ada7]/40" />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[62px] leading-[1.05] font-normal text-[#f4efea] tracking-tight">
              Selected Works & <span className="italic font-serif font-light text-[#9A8C98]">Lookbook</span>
            </h2>

            <p className="text-sm sm:text-base text-[#8f9bb3] font-sans font-light leading-relaxed">
              Curated editorial covers, high-fashion campaigns, and runway spreads. Hover over any plate to light up in full color.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs tracking-[0.18em] uppercase font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#c9ada7] text-[#09090b] font-semibold shadow-lg shadow-black/40 scale-105'
                    : 'bg-[#121622]/80 text-[#8f9bb3] hover:text-[#f4efea] border border-[#223048] hover:border-[#c9ada7]/40'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. TOP MASONRY LOOKBOOK COLLAGE (Clean B&W to Color hover)                */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-12 gap-4 sm:gap-5">
          {filteredCollage.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-[#1e2738] hover:border-[#c9ada7] transition-all duration-700 bg-[#0c101a] shadow-lg hover:shadow-[0_16px_40px_rgba(201,173,167,0.2)] ${item.spanClass}`}
            >
              {/* Photo Image with B&W to Color Light-Up Hover Effect — NO text on hover */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover filter grayscale contrast-[1.12] brightness-[0.92] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-105 group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* 3. 5-COLUMN EDITORIAL PORTRAIT GALLERY (Pure Photo Illumination on Hover)  */}
        {/* ========================================================================= */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#1c263a]">
            <span className="text-[11px] tracking-[0.3em] uppercase font-mono text-[#8f9bb3]">
              STUDIO ARCHIVE & EXPRESSION STUDIES
            </span>
            <span className="text-xs font-mono text-[#c9ada7]">
              {filteredGrid.length} PLATES
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {filteredGrid.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer border border-[#1e2738] hover:border-[#c9ada7] transition-all duration-700 bg-[#0c101a] shadow-lg hover:shadow-[0_16px_40px_rgba(201,173,167,0.25)] hover:-translate-y-1"
              >
                {/* Photo Image with B&W to Color Light-Up Hover Effect — 100% CLEAN */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover filter grayscale contrast-[1.12] brightness-[0.92] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-105 group-hover:scale-108 transition-all duration-700 ease-out"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. BOTTOM ACTION & COMP CARD DOWNLOAD CTA                                 */}
        {/* ========================================================================= */}
        <div className="pt-6 border-t border-[#1c263a] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-[#8f9bb3] font-light">
            All images © 2026 Alisha Sarangi (Lishu). Runway Model & Actress · Bargarh, Odisha.
          </div>

          <button
            onClick={onInquireClick}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#f4efea] hover:bg-[#c9ada7] text-[#09090b] text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-xl cursor-pointer hover:scale-105 self-start sm:self-auto"
          >
            <span>Request Full Comp Card & Rates</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 5. LIGHTBOX MODAL (When clicking any photo)                              */}
      {/* ========================================================================= */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#09090b]/94 backdrop-blur-2xl animate-in fade-in duration-300"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0e121a] border border-[#c9ada7]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#223048] bg-[#09090b]">
              <div>
                <span className="text-[10px] tracking-[0.3em] text-[#c9ada7] uppercase font-mono font-semibold block">
                  {selectedPhoto.categoryLabel} · {selectedPhoto.season}
                </span>
                <h3 className="text-xl font-serif text-[#f4efea]">
                  {selectedPhoto.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-2 text-[#8f9bb3] hover:text-[#f4efea] transition-colors rounded-full hover:bg-white/10 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image Viewport */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-[#09090b] overflow-hidden flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain filter brightness-100"
              />
            </div>

            {/* Modal Footer Metadata */}
            <div className="px-6 py-4 bg-[#09090b] border-t border-[#223048] flex flex-wrap items-center justify-between gap-3 text-xs text-[#8f9bb3]">
              <div className="flex items-center space-x-4">
                <span>Location: <strong className="text-[#f4efea] font-normal">{selectedPhoto.location}</strong></span>
                <span>Photographer: <strong className="text-[#c9ada7] font-normal">{selectedPhoto.photographer || "Editorial Studio"}</strong></span>
              </div>

              <button
                onClick={() => {
                  setSelectedPhoto(null);
                  if (onInquireClick) onInquireClick();
                }}
                className="text-[#f4efea] hover:text-[#c9ada7] underline underline-offset-4 cursor-pointer font-medium"
              >
                Inquire About Editorial Rights →
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
