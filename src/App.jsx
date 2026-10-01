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
import FilmographySection from './components/FilmographySection';
import InstagramReelsSection from './components/InstagramReelsSection';
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
      image: "/images/Picsart_26-04-09_14-07-49-049.jpg.jpeg"
    },
    {
      title: "Chanel Haute Couture — Grand Palais",
      category: "Runway Presentation",
      location: "Paris, France",
      season: "Spring 2026",
      image: "/images/Picsart_26-04-10_14-55-41-252.jpg.jpeg"
    },
    {
      title: "Harper's Bazaar — 'Nocturne Noir'",
      category: "Beauty & Jewelry",
      location: "Milan, Italy",
      season: "Winter 2025/26",
      image: "/images/alisha-about-portrait.jpg"
    },
    {
      title: "Saint Laurent — Rive Gauche Campaign",
      category: "Global Campaign",
      location: "New York, USA",
      season: "Spring / Summer 2026",
      image: "/images/Picsart_26-05-05_14-44-52-097.jpg.jpeg"
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
            : 'bg-transparent py-6 sm:py-8 px-6 sm:px-10 md:px-14 lg:px-20'
        }`}
      >
        {/* Logo / Brand Name */}
        <a 
          href="#home" 
          onMouseEnter={() => setCursorHoveringInteractive(true)}
          onMouseLeave={() => setCursorHoveringInteractive(false)}
          className={`text-[12px] sm:text-[13px] tracking-[0.35em] uppercase font-sans font-semibold transition-colors ${
            isScrolled 
              ? 'text-[#f4efea] hover:text-[#c9ada7]' 
              : 'text-[#09090b] hover:text-[#475569]'
          }`}
        >
          ALISHA SARANGI
        </a>

        {/* Desktop Navigation Links */}
        <nav className={`hidden md:flex items-center space-x-9 lg:space-x-10 text-[11px] lg:text-[12px] tracking-[0.28em] font-sans font-medium uppercase transition-colors ${
          isScrolled ? 'text-[#d4d2db]' : 'text-[#334155]'
        }`}>
          <button 
            onClick={() => scrollToSection('about')}
            onMouseEnter={() => setCursorHoveringInteractive(true)}
            onMouseLeave={() => setCursorHoveringInteractive(false)}
            className={`transition-all relative py-1 group cursor-pointer ${
              isScrolled ? 'hover:text-[#f4efea]' : 'hover:text-[#09090b]'
            }`}
          >
            ABOUT
            <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
              isScrolled ? 'bg-[#c9ada7]' : 'bg-[#09090b]'
            }`} />
          </button>

          <button 
            onClick={() => scrollToSection('attributes')}
            onMouseEnter={() => setCursorHoveringInteractive(true)}
            onMouseLeave={() => setCursorHoveringInteractive(false)}
            className={`transition-all relative py-1 group cursor-pointer ${
              isScrolled ? 'hover:text-[#f4efea]' : 'hover:text-[#09090b]'
            }`}
          >
            ATTRIBUTES
            <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
              isScrolled ? 'bg-[#c9ada7]' : 'bg-[#09090b]'
            }`} />
          </button>

          <button 
            onClick={() => scrollToSection('slideshow')}
            onMouseEnter={() => setCursorHoveringInteractive(true)}
            onMouseLeave={() => setCursorHoveringInteractive(false)}
            className={`transition-all relative py-1 group cursor-pointer ${
              isScrolled ? 'hover:text-[#f4efea]' : 'hover:text-[#09090b]'
            }`}
          >
            LOOKBOOK
            <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
              isScrolled ? 'bg-[#c9ada7]' : 'bg-[#09090b]'
            }`} />
          </button>

          <button 
            onClick={() => scrollToSection('filmography')}
            onMouseEnter={() => setCursorHoveringInteractive(true)}
            onMouseLeave={() => setCursorHoveringInteractive(false)}
            className={`transition-all relative py-1 group cursor-pointer ${
              isScrolled ? 'hover:text-[#f4efea]' : 'hover:text-[#09090b]'
            }`}
          >
            FILMS
            <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
              isScrolled ? 'bg-[#c9ada7]' : 'bg-[#09090b]'
            }`} />
          </button>

          <button 
            onClick={() => scrollToSection('reels')}
            onMouseEnter={() => setCursorHoveringInteractive(true)}
            onMouseLeave={() => setCursorHoveringInteractive(false)}
            className={`transition-all relative py-1 group cursor-pointer ${
              isScrolled ? 'hover:text-[#f4efea]' : 'hover:text-[#09090b]'
            }`}
          >
            REELS
            <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
              isScrolled ? 'bg-[#c9ada7]' : 'bg-[#09090b]'
            }`} />
          </button>

          <button 
            onClick={() => scrollToSection('showreel')}
            onMouseEnter={() => setCursorHoveringInteractive(true)}
            onMouseLeave={() => setCursorHoveringInteractive(false)}
            className={`transition-all relative py-1 flex items-center gap-1.5 group cursor-pointer ${
              isScrolled ? 'hover:text-[#f4efea]' : 'hover:text-[#09090b]'
            }`}
          >
            <span>SHOWREEL</span>
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
              isScrolled ? 'bg-[#c9ada7]' : 'bg-[#09090b]'
            }`} />
            <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
              isScrolled ? 'bg-[#c9ada7]' : 'bg-[#09090b]'
            }`} />
          </button>

          <button 
            onClick={() => scrollToSection('contact')}
            onMouseEnter={() => setCursorHoveringInteractive(true)}
            onMouseLeave={() => setCursorHoveringInteractive(false)}
            className={`transition-all relative py-1 group cursor-pointer ${
              isScrolled ? 'hover:text-[#f4efea]' : 'hover:text-[#09090b]'
            }`}
          >
            CONTACT
            <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
              isScrolled ? 'bg-[#c9ada7]' : 'bg-[#09090b]'
            }`} />
          </button>
        </nav>

        {/* Mobile Menu Trigger */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 transition-colors cursor-pointer ${
            isScrolled ? 'text-[#f4efea] hover:text-[#c9ada7]' : 'text-[#09090b] hover:text-[#475569]'
          }`}
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
              onClick={() => { setMenuOpen(false); scrollToSection('slideshow'); }}
              className="text-left text-[#f4efea] hover:text-[#c9ada7] transition-colors cursor-pointer"
            >
              Editorial Lookbook
            </button>
            <button 
              onClick={() => { setMenuOpen(false); scrollToSection('filmography'); }}
              className="text-left text-[#f4efea] hover:text-[#c9ada7] transition-colors cursor-pointer"
            >
              Selected Filmography
            </button>
            <button 
              onClick={() => { setMenuOpen(false); scrollToSection('reels'); }}
              className="text-left text-[#f4efea] hover:text-[#c9ada7] transition-colors cursor-pointer"
            >
              Instagram Reels
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
      {/* SECTION 1: FULL-HEIGHT EDITORIAL HERO (WHITE STUDIO BACKGROUND)           */}
      {/* ========================================================================= */}
      <section id="home" className="relative min-h-screen w-full overflow-hidden bg-white">
        
        {/* 1. BASE BACKGROUND: Full-Bleed Landscape Studio Photo (Anchored bottom so feet/chair are not cut) */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-white">
          <img 
            src="/images/Picsart_26-10-01_22-39-20-029.jpg.jpeg" 
            alt="Alisha Sarangi (Lishu) - Model & Actress" 
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-[80%_bottom] md:object-[84%_bottom] lg:object-[right_bottom] pointer-events-none select-none"
          />

          {/* Seamless Soft Fade Gradient on Left for Flawless Typography Contrast */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-3/5 lg:w-[46%] bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none" />
        </div>

        {/* 2. MAIN HERO VIEWPORT OVERLAY (Z-20) */}
        <div className="relative z-20 flex flex-col justify-between min-h-screen px-6 sm:px-10 md:px-14 lg:px-20 pt-28 sm:pt-32 pb-8 pointer-events-none">

          {/* B. HERO CONTENT SECTION: Grounded on the LEFT in Deep Black */}
          <div className="w-full flex-1 flex flex-col justify-center sm:justify-end pt-12 pb-6 pointer-events-none">
            <div className="w-full grid grid-cols-1 md:grid-cols-12 items-end">
              
              {/* Left Column: Hero Typography (Black, Vogue-Style Serif on Left) */}
              <div className="md:col-span-8 lg:col-span-7 flex flex-col items-start text-left space-y-4 sm:space-y-5">
                
                {/* Tag / Category Badge */}
                <div className="flex items-center space-x-2.5 pointer-events-auto">
                  <span className="text-[11px] sm:text-[12px] tracking-[0.42em] uppercase text-[#64748b] font-sans font-bold">
                    MODEL & ACTRESS · LISHU
                  </span>
                </div>

                {/* Display Title: BIG VOGUE-STYLE SERIF IN DEEP BLACK */}
                <div className="relative pointer-events-auto group">
                  <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[104px] xl:text-[124px] 2xl:text-[140px] leading-[0.88] tracking-tight font-normal text-[#09090b] select-none text-left">
                    Alisha
                    <br />
                    <span>Sarangi</span>
                  </h1>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2 pointer-events-auto">
                  
                  {/* Watch Reel Button */}
                  <button 
                    onClick={() => setShowreelOpen(true)}
                    className="group relative flex items-center space-x-3.5 px-7 py-3.5 rounded-full bg-[#09090b] hover:bg-[#27272a] text-[#ffffff] transition-all duration-300 text-xs tracking-[0.22em] uppercase font-medium cursor-pointer shadow-xl shadow-black/20 hover:scale-[1.03]"
                  >
                    <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all">
                      <Play size={13} fill="#ffffff" className="text-white group-hover:fill-[#09090b] group-hover:text-[#09090b] ml-0.5 transition-colors" />
                    </div>
                    <span>Watch Reel</span>
                  </button>

                  {/* View Gallery Button */}
                  <button 
                    onClick={() => scrollToSection('slideshow')}
                    className="group relative flex items-center space-x-2.5 px-7 py-3.5 rounded-full bg-transparent border-2 border-[#09090b] text-[#09090b] hover:bg-[#09090b] hover:text-white transition-all duration-300 text-xs tracking-[0.22em] uppercase font-semibold cursor-pointer shadow-sm hover:scale-[1.03]"
                  >
                    <span>View Gallery</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </button>

                </div>

              </div>

              {/* Right Column Spacer: Keeps the portrait subject visible */}
              <div className="hidden md:block md:col-span-4 lg:col-span-5" />

            </div>
          </div>

          {/* C. BOTTOM BAR (Scroll indicator on left, Sound toggle on right) */}
          <div className="w-full flex items-end justify-between pt-2 pointer-events-none">
            
            {/* Left: Vertical SCROLL indicator in dark grey/black */}
            <div 
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center select-none pb-1 group cursor-pointer pointer-events-auto"
            >
              <span 
                className="text-[10px] tracking-[0.35em] uppercase text-[#64748b] group-hover:text-[#09090b] transition-colors mb-3 font-sans font-medium"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                SCROLL
              </span>
              <div className="w-[1.5px] h-14 bg-[#e2e8f0] overflow-hidden relative rounded-full">
                <div className="w-full h-full bg-[#09090b] animate-scroll-line rounded-full" />
              </div>
            </div>

            {/* Right: Ambient Sound Toggle in light/dark style */}
            <div className="flex items-center space-x-3 pointer-events-auto">
              <button
                onClick={toggleSound}
                className={`p-2.5 rounded-full border transition-all duration-300 cursor-pointer shadow-md ${
                  soundActive 
                    ? 'bg-[#09090b] text-white border-[#09090b]' 
                    : 'bg-white/90 text-[#09090b] border-[#e2e8f0] hover:bg-[#09090b] hover:text-white'
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
        onExploreClick={() => scrollToSection('slideshow')}
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
      {/* SECTION 7: EDITORIAL BEAUTY SLIDESHOW & CLOSE-UP STUDY                    */}
      {/* ========================================================================= */}
      <EditorialSlideshowSection 
        onInquireClick={() => scrollToSection('contact')}
      />

      {/* ========================================================================= */}
      {/* SECTION 8: SELECTED FILMOGRAPHY & MOTION SHOWCASE                         */}
      {/* ========================================================================= */}
      <FilmographySection />

      {/* ========================================================================= */}
      {/* SECTION 9: INSTAGRAM REELS & SHORT-FORM MOTION SHOWCASE                   */}
      {/* ========================================================================= */}
      <InstagramReelsSection />

      {/* ========================================================================= */}
      {/* SECTION 10: GLOBAL REPRESENTATION, INQUIRY CTA & SOCIALS HUB              */}
      {/* ========================================================================= */}
      <ContactCtaSection />

      {/* ========================================================================= */}
      {/* 5. MODAL: SHOWREEL VIDEO PLAYER                                           */}
      {/* ========================================================================= */}
      {showreelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#09090b]/90 backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl max-h-[92vh] bg-[#0e0e12] border border-[#c9ada7]/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
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

            {/* Video Showcase Canvas - 100% Full-Frame Player */}
            <div className="relative w-full max-h-[72vh] sm:max-h-[76vh] bg-black flex items-center justify-center p-2 overflow-hidden">
              <video
                src="/images/VID_20260527_061035_166.mp4"
                controls
                autoPlay
                playsInline
                className="max-h-[70vh] sm:max-h-[74vh] w-auto max-w-full object-contain rounded-lg"
                poster="/images/alisha-about-portrait.jpg"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-[#09090b]/90 border-t border-[#2a2a35] flex flex-wrap justify-between items-center text-xs text-[#a19fa9] gap-2">
              <span>Direct Booking: +91 78538 20145 · alishasarangi1432@gmail.com</span>
              <a 
                href="https://instagram.com/the__leeeesu"
                target="_blank"
                rel="noreferrer"
                className="tracking-[0.2em] text-[#c9ada7] hover:text-[#f4efea] flex items-center gap-1.5 transition-colors font-mono"
              >
                <span>INSTAGRAM @THE__LEEEESU</span>
                <ArrowUpRight size={14} />
              </a>
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
