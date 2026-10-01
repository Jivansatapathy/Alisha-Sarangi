import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  Play, 
  Menu, 
  X, 
  Volume2, 
  VolumeX,
  ChevronRight,
  Mail
} from 'lucide-react';
import UnevenColorReveal from './components/UnevenColorReveal';
import AboutSection from './components/AboutSection';
import PhysicalAttributesSection from './components/PhysicalAttributesSection';
import QuoteSection from './components/QuoteSection';
import ShowreelSection from './components/ShowreelSection';
import EditorialSlideshowSection from './components/EditorialSlideshowSection';
import GallerySection from './components/GallerySection';
import FilmographySection from './components/FilmographySection';
import ContactCtaSection from './components/ContactCtaSection';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(false);
  const revealRadius = 200;

  // Custom cursor position for luxury HUD
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorHoveringInteractive, setCursorHoveringInteractive] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);

  // Web Audio Synthesizer for ambient luxury tone
  const audioCtxRef = useRef(null);
  const oscillatorRef = useRef(null);
  const gainNodeRef = useRef(null);

  const toggleSound = () => {
    if (!soundActive) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioContext();
        }
        if (audioCtxRef.current.state === 'suspended') {
          audioCtxRef.current.resume();
        }
        
        const ctx = audioCtxRef.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        // Warm binaural-style relaxing high fashion drone
        osc.type = 'sine';
        osc.frequency.setValueAtTime(174, ctx.currentTime); // Solfeggio frequency 174Hz (calming)
        
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 2);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        oscillatorRef.current = osc;
        gainNodeRef.current = gain;
        setSoundActive(true);
      } catch (err) {
        console.warn('Audio not supported or blocked:', err);
        setSoundActive(true);
      }
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.8);
        setTimeout(() => {
          try {
            oscillatorRef.current?.stop();
            oscillatorRef.current?.disconnect();
          } catch (e) {}
        }, 800);
      }
      setSoundActive(false);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handlePointer = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setCursorVisible(true);
    };
    const handleLeave = () => setCursorVisible(false);

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('pointermove', handlePointer);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseleave', handleLeave);
    window.addEventListener('blur', handleLeave);
    return () => {
      window.removeEventListener('pointermove', handlePointer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleLeave);
      window.removeEventListener('blur', handleLeave);
      if (audioCtxRef.current) {
        try { audioCtxRef.current.close(); } catch (e) {}
      }
    };
  }, []);

  // Curated portfolio gallery items
  const portfolioItems = [
    {
      title: "Vogue Paris — 'L'Élégance Pure'",
      category: "Cover Editorial",
      location: "Paris, France",
      season: "Fall / Winter 2026",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Chanel Haute Couture — Grand Palais",
      category: "Runway Presentation",
      location: "Paris, France",
      season: "Spring 2026",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Harper's Bazaar — 'Nocturne Noir'",
      category: "Beauty & Jewelry",
      location: "Milan, Italy",
      season: "Winter 2025/26",
      image: "/model-hero.jpg"
    },
    {
      title: "Saint Laurent — Rive Gauche Campaign",
      category: "Global Campaign",
      location: "New York, USA",
      season: "Spring / Summer 2026",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div 
      className="relative w-full bg-[#09090b] text-[#f4efea] overflow-x-hidden select-none font-sans"
      onPointerEnter={() => setCursorVisible(true)}
      onPointerLeave={() => setCursorVisible(false)}
    >
      
      {/* ========================================================================= */}
      {/* STICKY TOP NAVIGATION BAR (Fixed across all sections)                     */}
      {/* ========================================================================= */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto flex items-center justify-between ${
          isScrolled 
            ? 'bg-[#09090b]/85 backdrop-blur-2xl border-b border-[#2a2a35]/50 py-4 sm:py-5 px-6 sm:px-10 md:px-14 lg:px-20 shadow-2xl shadow-black/70' 
            : 'bg-gradient-to-b from-[#09090b]/80 via-[#09090b]/30 to-transparent py-6 sm:py-8 px-6 sm:px-10 md:px-14 lg:px-20'
        }`}
      >
        {/* Logo / Brand Name */}
        <a 
          href="#home" 
          onMouseEnter={() => setCursorHoveringInteractive(true)}
          onMouseLeave={() => setCursorHoveringInteractive(false)}
          className="text-[12px] sm:text-[13px] tracking-[0.35em] uppercase font-sans font-medium text-[#f4efea] hover:text-[#c9ada7] transition-colors"
        >
          ALISHA SARANGI
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-9 lg:space-x-10 text-[11px] lg:text-[12px] tracking-[0.28em] font-sans font-medium uppercase text-[#d4d2db]">
          <button 
            onClick={() => scrollToSection('about')}
            onMouseEnter={() => setCursorHoveringInteractive(true)}
            onMouseLeave={() => setCursorHoveringInteractive(false)}
            className="hover:text-[#f4efea] transition-all relative py-1 group cursor-pointer"
          >
            ABOUT
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c9ada7] transition-all duration-300 group-hover:w-full" />
          </button>

          <button 
            onClick={() => scrollToSection('attributes')}
            onMouseEnter={() => setCursorHoveringInteractive(true)}
            onMouseLeave={() => setCursorHoveringInteractive(false)}
            className="hover:text-[#f4efea] transition-all relative py-1 group cursor-pointer"
          >
            ATTRIBUTES
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c9ada7] transition-all duration-300 group-hover:w-full" />
          </button>

          <button 
            onClick={() => scrollToSection('gallery')}
            onMouseEnter={() => setCursorHoveringInteractive(true)}
            onMouseLeave={() => setCursorHoveringInteractive(false)}
            className="hover:text-[#f4efea] transition-all relative py-1 group cursor-pointer"
          >
            GALLERY
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c9ada7] transition-all duration-300 group-hover:w-full" />
          </button>

          <button 
            onClick={() => scrollToSection('slideshow')}
            onMouseEnter={() => setCursorHoveringInteractive(true)}
            onMouseLeave={() => setCursorHoveringInteractive(false)}
            className="hover:text-[#f4efea] transition-all relative py-1 group cursor-pointer"
          >
            SLIDESHOW
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c9ada7] transition-all duration-300 group-hover:w-full" />
          </button>

          <button 
            onClick={() => scrollToSection('filmography')}
            onMouseEnter={() => setCursorHoveringInteractive(true)}
            onMouseLeave={() => setCursorHoveringInteractive(false)}
            className="hover:text-[#f4efea] transition-all relative py-1 group cursor-pointer"
          >
            FILMS
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c9ada7] transition-all duration-300 group-hover:w-full" />
          </button>

          <button 
            onClick={() => scrollToSection('showreel')}
            onMouseEnter={() => setCursorHoveringInteractive(true)}
            onMouseLeave={() => setCursorHoveringInteractive(false)}
            className="hover:text-[#f4efea] transition-all relative py-1 flex items-center gap-1.5 group cursor-pointer"
          >
            <span>SHOWREEL</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9ada7] animate-pulse" />
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c9ada7] transition-all duration-300 group-hover:w-full" />
          </button>

          <button 
            onClick={() => scrollToSection('contact')}
            onMouseEnter={() => setCursorHoveringInteractive(true)}
            onMouseLeave={() => setCursorHoveringInteractive(false)}
            className="hover:text-[#f4efea] transition-all relative py-1 group cursor-pointer"
          >
            CONTACT
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c9ada7] transition-all duration-300 group-hover:w-full" />
          </button>
        </nav>

        {/* Mobile Menu Trigger */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-[#f4efea] hover:text-[#c9ada7] transition-colors cursor-pointer"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#09090b]/98 backdrop-blur-2xl md:hidden flex flex-col justify-between p-8 animate-in fade-in duration-300 pointer-events-auto">
          <div className="flex justify-between items-center">
            <span className="font-sans tracking-[0.3em] text-sm uppercase text-[#f4efea] font-medium">
              ALISHA SARANGI
            </span>
            <button 
              onClick={() => setMenuOpen(false)}
              className="p-2 text-[#c9ada7] cursor-pointer"
            >
              <X size={26} />
            </button>
          </div>

          <nav className="flex flex-col space-y-7 text-2xl tracking-[0.25em] font-serif uppercase">
            <button 
              onClick={() => { setMenuOpen(false); scrollToSection('about'); }}
              className="text-left text-[#f4efea] hover:text-[#c9ada7] transition-colors cursor-pointer"
            >
              About & Bio
            </button>
            <button 
              onClick={() => { setMenuOpen(false); scrollToSection('attributes'); }}
              className="text-left text-[#f4efea] hover:text-[#c9ada7] transition-colors cursor-pointer"
            >
              Attributes & Specs
            </button>
            <button 
              onClick={() => { setMenuOpen(false); scrollToSection('gallery'); }}
              className="text-left text-[#f4efea] hover:text-[#c9ada7] transition-colors cursor-pointer"
            >
              Liquid Glass Gallery
            </button>
            <button 
              onClick={() => { setMenuOpen(false); scrollToSection('slideshow'); }}
              className="text-left text-[#f4efea] hover:text-[#c9ada7] transition-colors cursor-pointer"
            >
              Beauty Slideshow
            </button>
            <button 
              onClick={() => { setMenuOpen(false); scrollToSection('filmography'); }}
              className="text-left text-[#f4efea] hover:text-[#c9ada7] transition-colors cursor-pointer"
            >
              Selected Filmography
            </button>
            <button 
              onClick={() => { setMenuOpen(false); scrollToSection('showreel'); }}
              className="text-left text-[#c9ada7] flex items-center justify-between cursor-pointer"
            >
              <span>Showreel</span>
              <Play size={20} fill="#c9ada7" />
            </button>
            <button 
              onClick={() => { setMenuOpen(false); scrollToSection('contact'); }}
              className="text-left text-[#f4efea] hover:text-[#c9ada7] transition-colors cursor-pointer"
            >
              Booking & Contact
            </button>
          </nav>

          <div className="border-t border-[#2a2a35] pt-6 flex justify-between items-center text-xs tracking-wider text-[#a19fa9]">
            <span>BARGARH, ODISHA</span>
            <span>+91 78538 20145</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 1: FULL-HEIGHT HERO WITH INTERACTIVE FLUID COLOR REVEAL           */}
      {/* ========================================================================= */}
      <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#09090b]">
        
        {/* 1. BASE BACKGROUND: High-Fashion Crisp Black & White Photograph */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#09090b]">
          <img 
            src="/model-hero.jpg" 
            alt="Alisha Sarangi (Lishu) - Model & Actress" 
            className="w-full h-full object-cover object-[32%_center] md:object-[32%_center] filter grayscale contrast-[1.12] brightness-[0.98] transition-transform duration-1000 ease-out pointer-events-none"
          />

          {/* Minimal luxury soft edge falloff for text contrast on extreme right */}
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#09090b]/80 via-[#09090b]/20 to-transparent pointer-events-none hidden md:block" />
          
          {/* Subtle bottom vignette to frame the footer */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#09090b]/90 via-[#09090b]/30 to-transparent pointer-events-none" />

          {/* Subtle top vignette for nav contrast */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#09090b]/80 via-[#09090b]/20 to-transparent pointer-events-none" />

          {/* Ultra-fine editorial grain texture */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* 2. INTERACTIVE UNEVEN COLOR REVEAL CANVAS (Layered over B&W image) */}
        <UnevenColorReveal
          imageSrc="/model-hero.jpg"
          revealRadius={revealRadius}
          focalPoint={{ desktop: { x: 0.32, y: 0.5 }, mobile: { x: 0.5, y: 0.5 } }}
          className="z-10 pointer-events-auto"
          onCursorUpdate={({ x, y, isHovering }) => {
            if (x !== undefined && y !== undefined) setCursorPos({ x, y });
            if (isHovering !== undefined) setCursorVisible(isHovering);
          }}
        />

        {/* 3. LUXURY CUSTOM CURSOR RING */}
        {cursorVisible && (
          <div 
            className="pointer-events-none fixed z-40 hidden md:block transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
            style={{ 
              left: `${cursorPos.x}px`, 
              top: `${cursorPos.y}px` 
            }}
          >
            <div 
              className={`w-10 h-10 rounded-full border transition-all duration-300 flex items-center justify-center ${
                cursorHoveringInteractive 
                  ? 'scale-150 border-[#f4efea] bg-[#f4efea]/10' 
                  : 'scale-100 border-[#c9ada7]/60'
              }`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#f4efea] shadow-[0_0_8px_rgba(244,239,234,0.8)]" />
            </div>
          </div>
        )}

        {/* 4. MAIN HERO VIEWPORT OVERLAY (Z-20) */}
        <div className="relative z-20 flex flex-col justify-between min-h-screen px-6 sm:px-10 md:px-14 lg:px-20 pt-24 sm:pt-28 pb-8 pointer-events-none">

          {/* B. HERO CONTENT SECTION: Grounded firmly at the BOTTOM RIGHT */}
          <div className="w-full flex-1 flex flex-col justify-end pt-12 pb-4 pointer-events-none">
            <div className="w-full grid grid-cols-1 md:grid-cols-12 items-end">
              
              {/* Left Column Spacer: Keeps the portrait uninhibited */}
              <div className="hidden md:block md:col-span-3 lg:col-span-4" />

              {/* Right Column: Hero Typography (Big, Clean, Grounded at Bottom-Right) */}
              <div className="md:col-span-9 lg:col-span-8 flex flex-col items-start md:items-end text-left md:text-right space-y-3 sm:space-y-4">
                
                {/* Tag / Category Badge (e.g. 'ACTOR' in reference photo) */}
                <div className="flex items-center space-x-2 pointer-events-auto">
                  <span className="text-[11px] sm:text-[12px] tracking-[0.4em] uppercase text-[#a19fa9] font-sans font-medium">
                    MODEL & ACTRESS · LISHU
                  </span>
                </div>

                {/* Display Title: BIG VOGUE-STYLE SERIF (Bodoni Moda / Italiana) */}
                <div className="relative pointer-events-auto group">
                  <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[132px] 2xl:text-[148px] leading-[0.88] tracking-tight font-normal text-[#f4efea] select-none text-left md:text-right">
                    Alisha
                    <br />
                    <span>Sarangi</span>
                  </h1>
                </div>

                {/* Right-aligned subtitle statement */}
                <p className="max-w-md text-sm sm:text-base text-[#c9ada7] font-light leading-relaxed tracking-wide text-left md:text-right">
                  Runway model & actress from Bargarh, Odisha · Model of SHEFORMAL · Lead in Odia short film “THE GUEST”.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-1 md:justify-end pointer-events-auto">
                  
                  {/* Watch Reel Button */}
                  <button 
                    onClick={() => setShowreelOpen(true)}
                    onMouseEnter={() => setCursorHoveringInteractive(true)}
                    onMouseLeave={() => setCursorHoveringInteractive(false)}
                    className="group relative flex items-center space-x-3.5 px-6 py-3.5 rounded-full bg-[#121216]/80 hover:bg-[#1b1b22] backdrop-blur-xl border border-[#c9ada7]/30 hover:border-[#f4efea]/70 transition-all duration-300 text-[#f4efea] text-xs tracking-[0.22em] uppercase font-medium cursor-pointer shadow-lg shadow-black/40 hover:scale-[1.03]"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#f4efea]/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#f4efea] transition-all">
                      <Play size={13} fill="#f4efea" className="text-[#f4efea] group-hover:fill-[#09090b] group-hover:text-[#09090b] ml-0.5 transition-colors" />
                    </div>
                    <span>Watch Reel</span>
                  </button>

                  {/* View Gallery Button */}
                  <button 
                    onClick={() => scrollToSection('gallery')}
                    onMouseEnter={() => setCursorHoveringInteractive(true)}
                    onMouseLeave={() => setCursorHoveringInteractive(false)}
                    className="group relative flex items-center space-x-2.5 px-7 py-3.5 rounded-full bg-[#f4efea] text-[#09090b] hover:bg-[#c9ada7] hover:text-[#09090b] transition-all duration-300 text-xs tracking-[0.22em] uppercase font-semibold cursor-pointer shadow-xl shadow-black/50 hover:scale-[1.03]"
                  >
                    <span>View Gallery</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </button>

                </div>

              </div>

            </div>
          </div>

          {/* C. BOTTOM BAR (Scroll line on left, Archive note in center, UX Interactive controls on right) */}
          <div className="w-full flex items-end justify-between pt-2 pointer-events-none">
            
            {/* Left: Vertical SCROLL indicator */}
            <div 
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center select-none pb-1 group cursor-pointer pointer-events-auto"
              onMouseEnter={() => setCursorHoveringInteractive(true)}
              onMouseLeave={() => setCursorHoveringInteractive(false)}
            >
              <span 
                className="text-[10px] tracking-[0.35em] uppercase text-[#a19fa9] group-hover:text-[#f4efea] transition-colors mb-3 font-sans"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                SCROLL
              </span>
              <div className="w-[1.5px] h-14 bg-[#2a2a35] overflow-hidden relative rounded-full">
                <div className="w-full h-full bg-[#c9ada7] animate-scroll-line rounded-full" />
              </div>
            </div>

            {/* Center: Minimalist High Fashion Archive Tag */}
            <div className="hidden lg:flex items-center space-x-3 text-[10px] tracking-[0.32em] uppercase text-[#a19fa9]/70 font-sans">
              <span>SS '26 EDITORIAL EDITION</span>
              <span>—</span>
              <span>SELECT ARCHIVE</span>
            </div>

            {/* Right: Ambient Sound / Audio Tone Toggle */}
            <div className="flex items-center space-x-3 pointer-events-auto">
              <button
                onClick={toggleSound}
                onMouseEnter={() => setCursorHoveringInteractive(true)}
                onMouseLeave={() => setCursorHoveringInteractive(false)}
                className={`p-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                  soundActive 
                    ? 'bg-[#c9ada7] text-[#09090b] border-[#c9ada7]' 
                    : 'bg-[#121216]/80 text-[#c9ada7] border-[#c9ada7]/25 hover:text-[#f4efea] hover:border-[#f4efea]/50 shadow-lg'
                }`}
                title={soundActive ? "Mute ambient audio" : "Play ambient soundscape"}
                aria-label="Toggle ambient sound"
              >
                {soundActive ? <Volume2 size={15} /> : <VolumeX size={15} />}
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: EDITORIAL ABOUT ME SECTION (Matched to reference layout)       */}
      {/* ========================================================================= */}
      <AboutSection 
        onExploreClick={() => scrollToSection('gallery')}
      />

      {/* ========================================================================= */}
      {/* SECTION 3: PHYSICAL ATTRIBUTES / MODEL PROFILE                            */}
      {/* ========================================================================= */}
      <PhysicalAttributesSection 
        onContactClick={() => scrollToSection('contact')}
      />

      {/* ========================================================================= */}
      {/* SECTION 4: STATEMENT QUOTE SECTION                                       */}
      {/* ========================================================================= */}
      <QuoteSection 
        onInquireClick={() => scrollToSection('contact')}
      />

      {/* ========================================================================= */}
      {/* SECTION 5: SHOWREEL & MANIFESTO VIDEO SHOWCASE                           */}
      {/* ========================================================================= */}
      <ShowreelSection 
        onInquireClick={() => scrollToSection('contact')}
      />

      {/* ========================================================================= */}
      {/* SECTION 6: LIQUID GLASS WEBGL GALLERY VIEW                                */}
      {/* ========================================================================= */}
      <GallerySection />

      {/* ========================================================================= */}
      {/* SECTION 7: EDITORIAL BEAUTY SLIDESHOW & CLOSE-UP STUDY                    */}
      {/* ========================================================================= */}
      <EditorialSlideshowSection 
        onInquireClick={() => scrollToSection('contact')}
      />

      {/* ========================================================================= */}
      {/* SECTION 8: SELECTED FILMOGRAPHY & YOUTUBE MOTION SHOWCASE                 */}
      {/* ========================================================================= */}
      <FilmographySection />

      {/* ========================================================================= */}
      {/* SECTION 9: GLOBAL REPRESENTATION, INQUIRY CTA & SOCIALS HUB               */}
      {/* ========================================================================= */}
      <ContactCtaSection />

      {/* ========================================================================= */}
      {/* 5. MODAL: SHOWREEL VIDEO PLAYER                                           */}
      {/* ========================================================================= */}
      {showreelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#09090b]/90 backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl bg-[#0e0e12] border border-[#c9ada7]/30 rounded-2xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#2a2a35] bg-[#09090b]">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#c9ada7] animate-ping" />
                <span className="text-xs uppercase tracking-[0.3em] text-[#f4efea] font-medium">
                  Alisha Sarangi (Lishu) — Editorial & Screen Showreel
                </span>
              </div>
              <button 
                onClick={() => setShowreelOpen(false)}
                className="text-[#a19fa9] hover:text-[#f4efea] transition-colors p-1 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Video Showcase Canvas */}
            <div className="relative aspect-video bg-[#09090b] flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80" 
                alt="Showreel Preview" 
                className="w-full h-full object-cover filter contrast-105 brightness-80 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b]/60" />
              
              <div className="absolute flex flex-col items-center space-y-4 text-center p-6">
                <div className="w-18 h-18 rounded-full bg-[#f4efea]/20 backdrop-blur-md border border-[#f4efea]/40 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-2xl">
                  <Play size={28} fill="#f4efea" className="text-[#f4efea] ml-1" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-serif text-[#f4efea]">Runway Motion & Screen Acting</h4>
                  <p className="text-xs tracking-wider text-[#c9ada7]">Odia Short Film “THE GUEST” · Model of SHEFORMAL · Runway Presentations</p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-[#09090b]/90 border-t border-[#2a2a35] flex flex-wrap justify-between items-center text-xs text-[#a19fa9] gap-2">
              <span>Direct Booking: +91 78538 20145</span>
              <span className="tracking-[0.2em] text-[#c9ada7]">4K ULTRA HD · DIRECTORS CUT</span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. MODAL: EDITORIAL PORTFOLIO GALLERY                                     */}
      {/* ========================================================================= */}
      {portfolioOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#09090b]/92 backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#0e0e12] border border-[#c9ada7]/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            
            {/* Gallery Header */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-[#2a2a35] bg-[#09090b]">
              <div>
                <span className="text-[10px] tracking-[0.35em] text-[#c9ada7] uppercase font-semibold block">
                  ARCHIVE BOOK 2026
                </span>
                <h3 className="text-2xl font-serif text-[#f4efea]">
                  Editorial & Runway Portfolio
                </h3>
              </div>
              <button 
                onClick={() => setPortfolioOpen(false)}
                className="text-[#a19fa9] hover:text-[#f4efea] transition-colors p-2 cursor-pointer rounded-full hover:bg-white/5"
              >
                <X size={22} />
              </button>
            </div>

            {/* Gallery Grid */}
            <div className="p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioItems.map((item, idx) => (
                <div 
                  key={idx}
                  className="group relative bg-[#121216] border border-[#2a2a35] rounded-xl overflow-hidden hover:border-[#c9ada7]/50 transition-all duration-500 flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#09090b]/80 backdrop-blur-md text-[10px] tracking-wider uppercase text-[#c9ada7] border border-white/10">
                      {item.season}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[10px] tracking-[0.25em] text-[#c9ada7] uppercase font-medium">
                        {item.category} · {item.location}
                      </span>
                      <h4 className="text-lg font-serif text-[#f4efea] mt-1 group-hover:text-[#c9ada7] transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <div className="pt-4 flex items-center justify-between text-xs text-[#a19fa9]">
                      <span>View High-Res Spread</span>
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gallery Footer */}
            <div className="px-8 py-4 bg-[#09090b] border-t border-[#2a2a35] flex justify-between items-center text-xs text-[#a19fa9]">
              <span>Representation: Paris / Milan / New York Agencies</span>
              <button 
                onClick={() => { setPortfolioOpen(false); scrollToSection('contact'); }}
                className="text-[#f4efea] hover:text-[#c9ada7] underline underline-offset-4 cursor-pointer"
              >
                Direct Inquiries & Contact Details →
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STICKY FLOATING SOCIAL & INQUIRY CONTROLS (Bottom-Right of Screen)        */}
      {/* ========================================================================= */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3 pointer-events-auto">
        {/* Instagram Button */}
        <a 
          href="https://instagram.com/the__leeeesu" 
          target="_blank" 
          rel="noreferrer"
          onMouseEnter={() => setCursorHoveringInteractive(true)}
          onMouseLeave={() => setCursorHoveringInteractive(false)}
          className="group relative w-12 h-12 rounded-full bg-[#121216]/90 hover:bg-[#c9ada7] text-[#f4efea] hover:text-[#09090b] border border-[#c9ada7]/30 hover:border-[#c9ada7] backdrop-blur-xl flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-110 cursor-pointer"
          title="Instagram Profile"
          aria-label="Instagram Profile"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="19" 
            height="19" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.8" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:scale-105"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
          </svg>
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none absolute right-14 px-3 py-1 rounded-full bg-[#121216]/95 border border-[#c9ada7]/30 text-[10px] tracking-widest uppercase text-[#f4efea] whitespace-nowrap backdrop-blur-md shadow-xl">
            Instagram
          </span>
        </a>

        {/* Email / Inquire Button */}
        <button
          onClick={() => scrollToSection('contact')}
          onMouseEnter={() => setCursorHoveringInteractive(true)}
          onMouseLeave={() => setCursorHoveringInteractive(false)}
          className="group relative w-12 h-12 rounded-full bg-[#121216]/90 hover:bg-[#c9ada7] text-[#f4efea] hover:text-[#09090b] border border-[#c9ada7]/30 hover:border-[#c9ada7] backdrop-blur-xl flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-110 cursor-pointer"
          title="Direct Inquiries & Contact"
          aria-label="Direct Inquiries & Contact"
        >
          <Mail size={19} strokeWidth={1.8} className="transition-transform duration-300 group-hover:scale-105" />
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none absolute right-14 px-3 py-1 rounded-full bg-[#121216]/95 border border-[#c9ada7]/30 text-[10px] tracking-widest uppercase text-[#f4efea] whitespace-nowrap backdrop-blur-md shadow-xl">
            Contact
          </span>
        </button>
      </div>

    </div>
  );
}
