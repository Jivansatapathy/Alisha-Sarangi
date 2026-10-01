import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * EditorialSlideshowSection Component
 * Center-Anchored True-Circular Infinite Editorial Carousel for Alisha Sarangi.
 * - Mathematically infinite: Symmetrically wraps left & right, never leaving empty space.
 * - Active slide is always perfectly dead-center in the viewport.
 * - Pure photography: Zero text overlays on images.
 * - All images displayed with full brightness and high clarity.
 * - Big luxury navigation arrows on the left & right sides.
 */
export default function EditorialSlideshowSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(380);

  // 13 Curated local photoshoot assets (removed slides 05, 09, 10)
  const slides = [
    { id: 1, image: "/images/Picsart_26-09-24_16-40-04-328.png", alt: "Alisha Sarangi Haute Couture" },
    { id: 2, image: "/images/Picsart_26-04-09_14-07-49-049.jpg.jpeg", alt: "Alisha Sarangi Noir Portrait" },
    { id: 3, image: "/images/Picsart_26-09-20_09-30-54-439.png", alt: "Alisha Sarangi Studio Editorial" },
    { id: 4, image: "/images/Picsart_26-05-05_14-44-52-097.jpg.jpeg", alt: "Alisha Sarangi Runway" },
    { id: 5, image: "/images/Picsart_26-04-10_15-44-29-698.jpg.jpeg", alt: "Alisha Sarangi Sunlight Series" },
    { id: 6, image: "/images/Picsart_26-09-24_17-12-59-882.jpg.jpeg", alt: "Alisha Sarangi Motion Flow" },
    { id: 7, image: "/images/Picsart_26-05-24_16-36-05-886.jpg.jpeg", alt: "Alisha Sarangi Monochromatic" },
    { id: 8, image: "/images/Picsart_26-04-10_23-53-43-024.jpg.jpeg", alt: "Alisha Sarangi Velvet Series" },
    { id: 9, image: "/images/Picsart_26-04-11_15-34-54-313.jpg.jpeg", alt: "Alisha Sarangi Street Fashion" },
    { id: 10, image: "/images/Picsart_26-05-15_18-57-58-330.jpg.jpeg", alt: "Alisha Sarangi Film Expressions" },
    { id: 11, image: "/images/Picsart_26-05-16_18-36-33-866.jpg.jpeg", alt: "Alisha Sarangi Dusk Atmosphere" },
    { id: 12, image: "/images/Picsart_26-06-12_01-19-49-258.png", alt: "Alisha Sarangi Architectural Look" },
    { id: 13, image: "/images/Picsart_26-10-01_23-03-01-954.jpg.jpeg", alt: "Alisha Sarangi SHEFORMAL Look" }
  ];

  // Responsive card width calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardWidth(Math.min(window.innerWidth * 0.78, 290));
      } else if (window.innerWidth < 1024) {
        setCardWidth(340);
      } else {
        setCardWidth(380);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Automatic infinite cycling
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 40) handleNext();
    if (distance < -40) handlePrev();
    setTouchStart(0);
    setTouchEnd(0);
  };

  const cardGap = 24;
  const step = cardWidth + cardGap;

  return (
    <section 
      id="slideshow" 
      className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#080b11] text-[#f4efea] py-12 sm:py-16 lg:py-20 overflow-hidden border-t border-[#182030] z-20 select-none flex flex-col justify-between"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient atmospheric lighting */}
      <div className="absolute top-1/4 left-1/4 w-[650px] h-[650px] bg-[#1a2744]/25 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-[#c9ada7]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Editorial film grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* ========================================================================= */}
      {/* 1. HEADER WITH CLEAN TITLE & MINIMAL COUNTER                              */}
      {/* ========================================================================= */}
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-20 pb-4 flex items-center justify-between z-10">
        <div className="flex items-center space-x-3">
          <span className="text-[11px] sm:text-[12px] tracking-[0.45em] uppercase font-sans font-bold text-[#c9ada7]">
            EDITORIAL LOOKBOOK
          </span>
          <div className="w-12 h-[1px] bg-[#c9ada7]/40" />
        </div>

        {/* Minimal Numeric Counter */}
        <div className="flex items-center space-x-2 font-mono text-xs text-[#8f9bb3]">
          <span className="text-[#f4efea] font-bold text-base">
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-[#c9ada7]">/</span>
          <span>{String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. CENTER-ANCHORED CIRCULAR CAROUSEL VIEWPORT                             */}
      {/* ========================================================================= */}
      <div className="relative w-full h-[65vh] sm:h-[72vh] md:h-[76vh] lg:h-[80vh] overflow-hidden my-3 sm:my-5 flex items-center justify-center">
        
        {/* PREMIUM BIG NAVIGATION ARROW: LEFT */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-8 lg:left-12 z-40 w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-[#0c101a]/90 hover:bg-[#c9ada7] text-[#f4efea] hover:text-[#09090b] border-2 border-[#2a3854] hover:border-[#c9ada7] backdrop-blur-xl flex items-center justify-center transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.9)] hover:scale-110 active:scale-95 cursor-pointer group"
          title="Previous Photo"
          aria-label="Previous Photo"
        >
          <ChevronLeft size={32} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
        </button>

        {/* PREMIUM BIG NAVIGATION ARROW: RIGHT */}
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-8 lg:right-12 z-40 w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-[#0c101a]/90 hover:bg-[#c9ada7] text-[#f4efea] hover:text-[#09090b] border-2 border-[#2a3854] hover:border-[#c9ada7] backdrop-blur-xl flex items-center justify-center transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.9)] hover:scale-110 active:scale-95 cursor-pointer group"
          title="Next Photo"
          aria-label="Next Photo"
        >
          <ChevronRight size={32} className="group-hover:translate-x-0.5 transition-transform duration-200" />
        </button>

        {/* Circular Cards Rendering (Each card is positioned relative to center) */}
        {slides.map((slide, idx) => {
          let offset = idx - activeIndex;
          if (offset > slides.length / 2) offset -= slides.length;
          if (offset < -slides.length / 2) offset += slides.length;

          // Render cards within visible viewport radius
          const isVisible = Math.abs(offset) <= 4;
          const isActive = offset === 0;

          return (
            <div
              key={slide.id}
              onClick={() => setActiveIndex(idx)}
              style={{
                transform: `translate3d(calc(-50% + ${offset * step}px), -50%, 0)`,
                transition: 'transform 650ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease',
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? 'auto' : 'none',
                zIndex: isActive ? 30 : 20 - Math.abs(offset),
                width: `${cardWidth}px`
              }}
              className="absolute top-1/2 left-1/2 cursor-pointer"
            >
              {/* Pure Portrait Photography Card: Proper Height with no text overlays */}
              <div className={`relative w-full h-[60vh] sm:h-[66vh] md:h-[70vh] lg:h-[75vh] rounded-[24px] sm:rounded-[32px] overflow-hidden transition-all duration-600 ${
                isActive 
                  ? 'border-2 border-[#c9ada7] shadow-[0_30px_90px_rgba(0,0,0,0.95)] ring-4 ring-[#c9ada7]/20 scale-100' 
                  : 'border border-[#223048] shadow-xl hover:border-[#c9ada7]/60 scale-[0.96] brightness-[0.95]'
              } bg-[#0c101a]`}>
                
                {/* Photo Display: 100% Crisp, Pure Full-Frame Object-Cover */}
                <img
                  src={slide.image}
                  alt={slide.alt}
                  loading="eager"
                  className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-100 transition-transform duration-1000 ease-out hover:scale-105"
                />

              </div>
            </div>
          );
        })}

      </div>

      {/* ========================================================================= */}
      {/* 3. MINIMAL CLEAN BULLET INDICATORS                                        */}
      {/* ========================================================================= */}
      <div className="w-full px-6 sm:px-10 flex flex-col items-center justify-center space-y-2 z-10">
        <div className="flex items-center justify-center space-x-1.5 flex-wrap max-w-md">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer my-1 ${
                activeIndex === idx 
                  ? 'w-7 bg-[#c9ada7]' 
                  : 'w-1.5 bg-[#20293d] hover:bg-[#8f9bb3]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
