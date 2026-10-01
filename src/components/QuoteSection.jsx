import React, { useState, useEffect } from 'react';

/**
 * QuoteSection Component
 * Animated High-Fashion Statement Section tailored for Alisha Sarangi (Lishu).
 * Features:
 * - Automatic dynamic quote cycling every 2 seconds
 * - Clean, uncluttered layout (removed unnecessary location/counter clutter)
 * - Highlighted brand rose-sand accents (#c9ada7)
 */
export default function QuoteSection({ onInquireClick = null }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const quotes = [
    {
      line1: "From runway presence",
      highlight1: "From",
      line2: "to cinematic storytelling",
      highlightWord: "cinematic",
      punctuation: ".",
      subtext: "Experience across runway fashion shows, brand campaigns with SHEFORMAL, and screen acting in 'THE GUEST'."
    },
    {
      line1: "Bold, dark & fearless",
      highlight1: "Bold,",
      line2: "every character has depth",
      highlightWord: "depth",
      punctuation: ".",
      subtext: "Exploring expressive, dark and horror-oriented characters with raw intensity and emotional authenticity."
    },
    {
      line1: "Model & Actress",
      highlight1: "Model",
      line2: "grounded in artistic craft",
      highlightWord: "artistic",
      punctuation: ".",
      subtext: "Blending fashion modeling, screen performance, vocals, guitar, and dance into a multifaceted artistic voice."
    },
    {
      line1: "Polished & confident",
      highlight1: "Polished",
      line2: "commanding every frame",
      highlightWord: "commanding",
      punctuation: ".",
      subtext: "Showcasing versatility from high-fashion brand shoots to nuanced on-camera character portrayals."
    }
  ];

  // Auto-advance quote every 2 seconds (2000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % quotes.length);
        setIsFading(false);
      }, 250);
    }, 2000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentQuote = quotes[currentIndex];

  return (
    <section 
      id="statement"
      className="relative w-full bg-[#09090b] text-[#f4efea] py-28 sm:py-36 md:py-44 lg:py-48 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden border-t border-[#181820] z-20 select-none flex items-center justify-center"
    >
      {/* Ambient background glow in brand rose-sand & deep plum */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#22223B]/35 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] bg-[#c9ada7]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Ultra-fine editorial grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full">
        
        {/* Main Animated Statement Headline */}
        <div 
          className={`transition-all duration-300 transform ${
            isFading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
          }`}
        >
          <h2 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[102px] 2xl:text-[112px] leading-[1.02] tracking-[-0.035em] text-[#f4efea]">
            {/* Line 1 */}
            <span className="block whitespace-normal md:whitespace-nowrap">
              {currentQuote.highlight1 ? (
                <>
                  <span className="text-[#c9ada7] font-black">{currentQuote.highlight1}</span>{' '}
                  {currentQuote.line1.replace(currentQuote.highlight1, '').trim()}
                </>
              ) : (
                currentQuote.line1
              )}
            </span>

            {/* Line 2 with highlight keyword */}
            <span className="block whitespace-normal md:whitespace-nowrap mt-1 sm:mt-2">
              {currentQuote.line2.split(currentQuote.highlightWord)[0]}
              <span className="text-[#c9ada7] font-black transition-all duration-300 drop-shadow-[0_0_30px_rgba(201,173,167,0.35)]">
                {currentQuote.highlightWord}
              </span>
              {currentQuote.line2.split(currentQuote.highlightWord)[1]}
              <span className="text-[#c9ada7] inline-block font-black ml-0.5 animate-pulse">
                {currentQuote.punctuation}
              </span>
            </span>
          </h2>

          {/* Subtext */}
          <div className="mt-10 sm:mt-14 pt-8 border-t border-[#1e1e28]">
            <p className="text-sm sm:text-base text-[#a19fa9] font-sans font-light leading-relaxed max-w-xl transition-opacity duration-300">
              {currentQuote.subtext}
            </p>
          </div>
        </div>

        {/* Dynamic Minimalist Progress Indicators */}
        <div className="mt-8 flex items-center space-x-2">
          {quotes.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-10 bg-[#c9ada7]' : 'w-2 bg-[#2a2a35]'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
