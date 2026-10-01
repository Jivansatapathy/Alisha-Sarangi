import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * EditorialSlideshowSection Component
 * Full-width, near 100vh immersive luxury editorial slideshow.
 * Pure photography focus — no distracting text boxes, badges, or descriptions.
 * Features:
 * - 80% Active Slide width with ~20% peek of next/previous slide
 * - Non-stop automatic continuous cycling every 3.5 seconds
 * - Synchronized sleek gradient progress bar
 * - Dual-panel high-fashion composition (close-up study + editorial duo lookbook)
 * - 100% clean full-bleed photos with zero text clutter
 */
export default function EditorialSlideshowSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const slides = [
    {
      id: 1,
      leftImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
      rightImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=85",
      leftAlt: "Ultra close-up beauty study",
      rightAlt: "Sunlit duo editorial lookbook"
    },
    {
      id: 2,
      leftImage: "/model-hero.jpg",
      rightImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=85",
      leftAlt: "Alisha Sarangi monochrome portrait",
      rightAlt: "Haute Couture runway presentation"
    },
    {
      id: 3,
      leftImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=85",
      rightImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=85",
      leftAlt: "Dramatic beauty profile",
      rightAlt: "High-fashion Parisian couture"
    },
    {
      id: 4,
      leftImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=85",
      rightImage: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1600&q=85",
      leftAlt: "Close-up sunlight beauty study",
      rightAlt: "Editorial fashion duo in sunlight"
    },
    {
      id: 5,
      leftImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=85",
      rightImage: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=1600&q=85",
      leftAlt: "Studio portrait close-up",
      rightAlt: "Haute couture gown movement"
    }
  ];

  // Automatic continuous cycling every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
    if (distance > 60) handleNext();
    if (distance < -60) handlePrev();
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section 
      id="slideshow" 
      className="relative w-full min-h-[90vh] lg:min-h-screen bg-[#080b11] text-[#f4efea] py-12 sm:py-16 lg:py-20 overflow-hidden border-t border-[#182030] z-20 select-none flex flex-col justify-between"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/5 w-[650px] h-[650px] bg-[#1a2744]/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-[550px] h-[550px] bg-[#c9ada7]/8 rounded-full blur-[160px] pointer-events-none" />

      {/* Editorial film grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* ========================================================================= */}
      {/* 1. MINIMAL HEADER WITH SLIDE COUNTER & CONTROLS                           */}
      {/* ========================================================================= */}
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-20 pb-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-[11px] sm:text-[12px] tracking-[0.45em] uppercase font-sans font-bold text-[#c9ada7]">
            EDITORIAL LOOKBOOK
          </span>
          <div className="w-12 h-[1px] bg-[#c9ada7]/40" />
        </div>

        {/* Counter & Navigation Arrows */}
        <div className="flex items-center space-x-5">
          <div className="flex items-center space-x-2 font-mono text-xs text-[#8f9bb3]">
            <span className="text-[#f4efea] font-bold text-base">0{currentSlide + 1}</span>
            <span className="text-[#c9ada7]">/</span>
            <span>0{slides.length}</span>
          </div>

          <div className="flex items-center space-x-2.5">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-[#121622]/90 hover:bg-[#c9ada7] text-[#f4efea] hover:text-[#09090b] border border-[#223048] hover:border-[#c9ada7] backdrop-blur-md flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xl hover:scale-105 active:scale-95"
              title="Previous Slide"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#121622]/90 hover:bg-[#c9ada7] text-[#f4efea] hover:text-[#09090b] border border-[#223048] hover:border-[#c9ada7] backdrop-blur-md flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xl hover:scale-105 active:scale-95"
              title="Next Slide"
              aria-label="Next Slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. FULL-VIEW HORIZONTAL SLIDER (80% Active Slide + 20% Peek Slide)        */}
      {/* ========================================================================= */}
      <div className="relative w-full my-4 sm:my-6 overflow-hidden pl-6 sm:pl-10 md:pl-14 lg:pl-20">
        
        {/* Track with smooth cubic-bezier sliding */}
        <div 
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{
            transform: `translateX(calc(-${currentSlide * 82}vw - ${currentSlide * 1.5}rem))`
          }}
        >
          {slides.map((slide, idx) => {
            const isActive = currentSlide === idx;

            return (
              <div
                key={slide.id}
                onClick={() => {
                  if (!isActive) setCurrentSlide(idx);
                }}
                className={`flex-shrink-0 w-[86vw] sm:w-[82vw] lg:w-[80vw] mr-4 sm:mr-6 transition-all duration-700 ease-out cursor-pointer ${
                  isActive 
                    ? 'opacity-100 scale-100 shadow-[0_30px_90px_rgba(0,0,0,0.85)] z-10' 
                    : 'opacity-40 scale-[0.96] hover:opacity-75 hover:scale-[0.97] brightness-75 z-0'
                }`}
              >
                {/* Grand Slide Card Container: PURE PHOTOS ONLY (Height: 60vh to 78vh) */}
                <div className="relative w-full h-[60vh] sm:h-[68vh] md:h-[72vh] lg:h-[78vh] bg-[#0c101a] border border-[#1e2738] rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 overflow-hidden">
                  
                  {/* Dual Image Grid filling 100% height */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-2.5 w-full h-full">
                    
                    {/* Left Panel: Ultra Close-Up Beauty Crop (Col 1-4) */}
                    <div className="hidden md:block md:col-span-4 h-full relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#09090b]">
                      <img
                        src={slide.leftImage}
                        alt={slide.leftAlt}
                        className="w-full h-full object-cover object-center filter contrast-[1.06] brightness-[0.98] group-hover:scale-105 transition-all duration-1000 ease-out"
                      />
                    </div>

                    {/* Right Panel: Medium Duo / Lookbook Spread (Col 5-12) */}
                    <div className="col-span-1 md:col-span-8 h-full relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#09090b]">
                      <img
                        src={slide.rightImage}
                        alt={slide.rightAlt}
                        className="w-full h-full object-cover object-center filter contrast-[1.06] brightness-[0.98] group-hover:scale-105 transition-all duration-1000 ease-out"
                      />
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 3. BOTTOM: SLEEK ANIMATED PROGRESS BAR & MINIMAL BULLETS                  */}
      {/* ========================================================================= */}
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-20 space-y-4">
        
        {/* Animated Slide Progress Bar */}
        <div className="w-full h-1 bg-[#182030] rounded-full overflow-hidden">
          <div 
            key={currentSlide}
            className="h-full bg-gradient-to-r from-[#c9ada7] via-[#f4efea] to-[#c9ada7] rounded-full animate-progress"
          />
        </div>

        {/* Minimal Subtle Indicators */}
        <div className="flex items-center justify-center space-x-2 pt-1">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx 
                  ? 'w-8 bg-[#c9ada7]' 
                  : 'w-2 bg-[#2a344a] hover:bg-[#8f9bb3]'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
