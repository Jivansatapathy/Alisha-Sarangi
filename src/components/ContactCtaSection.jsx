import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  ArrowUpRight, 
  Copy, 
  Check, 
  ArrowUp,
  Sparkles
} from 'lucide-react';

export default function ContactCtaSection() {
  const [copiedKey, setCopiedKey] = useState(null);

  const email = "contact@alishasarangi.com";
  const phone = "+917853820145";
  const phoneFormatted = "+91 78538 20145";

  const handleCopy = (text, key) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/the__leeeesu',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
          <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
        </svg>
      )
    }
  ];

  return (
    <section 
      id="contact" 
      className="relative w-full bg-[#080b11] text-[#f4efea] pt-24 pb-16 px-6 sm:px-10 md:px-14 lg:px-20 border-t border-[#182030] overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#c9ada7]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-[#1e293b]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* ========================================================================= */}
        {/* HEADER                                                                    */}
        {/* ========================================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#121622] border border-[#223048] text-[11px] font-mono tracking-[0.35em] text-[#c9ada7] uppercase">
            <Sparkles size={12} />
            <span>CONTACT & CONNECT</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight text-[#f4efea] leading-[1.1]">
            Get In <span className="italic text-[#c9ada7] font-normal">Touch.</span>
          </h2>

          <p className="text-[#a19fa9] text-sm sm:text-base font-light leading-relaxed">
            For runway bookings, brand shoots, acting roles, and creative collaborations.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DIRECT EMAIL & MOBILE PHONE CARDS                                         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 max-w-3xl mx-auto">
          
          {/* Email Card */}
          <div className="group relative p-7 rounded-2xl bg-[#0d111a]/90 border border-[#1e293b] hover:border-[#c9ada7]/60 transition-all duration-300 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#141b29] border border-[#223048] flex items-center justify-center text-[#c9ada7] group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <button
                  onClick={() => handleCopy(email, 'email')}
                  className="px-3 py-1.5 rounded-lg bg-[#141b29] hover:bg-[#c9ada7] text-[#a19fa9] hover:text-[#09090b] border border-[#223048] text-xs font-mono flex items-center space-x-1.5 transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copiedKey === 'email' ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-[10px] font-mono tracking-widest uppercase text-[#c9ada7] block mb-1">
                Direct Email
              </span>
              <a 
                href={`mailto:${email}`}
                className="text-lg sm:text-xl font-mono text-[#f4efea] hover:text-[#c9ada7] transition-colors break-all block"
              >
                {email}
              </a>
            </div>

            <div className="pt-5 mt-5 border-t border-[#182030]">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9ada7] hover:text-[#f4efea] group/btn transition-colors"
              >
                <span>Send Direct Email</span>
                <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Mobile Phone Card */}
          <div className="group relative p-7 rounded-2xl bg-[#0d111a]/90 border border-[#1e293b] hover:border-[#c9ada7]/60 transition-all duration-300 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#141b29] border border-[#223048] flex items-center justify-center text-[#c9ada7] group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <button
                  onClick={() => handleCopy(phoneFormatted, 'phone')}
                  className="px-3 py-1.5 rounded-lg bg-[#141b29] hover:bg-[#c9ada7] text-[#a19fa9] hover:text-[#09090b] border border-[#223048] text-xs font-mono flex items-center space-x-1.5 transition-colors cursor-pointer"
                  title="Copy Number"
                >
                  {copiedKey === 'phone' ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-[10px] font-mono tracking-widest uppercase text-[#c9ada7] block mb-1">
                Direct Contact & WhatsApp
              </span>
              <a 
                href={`tel:${phone}`}
                className="text-lg sm:text-xl font-mono text-[#f4efea] hover:text-[#c9ada7] transition-colors block"
              >
                {phoneFormatted}
              </a>
            </div>

            <div className="pt-5 mt-5 border-t border-[#182030]">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9ada7] hover:text-[#f4efea] group/btn transition-colors"
              >
                <span>Call Directly</span>
                <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SIMPLE SOCIAL ICONS ROW (Instagram, Facebook, YouTube)                    */}
        {/* ========================================================================= */}
        <div className="mb-20 text-center">
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#a19fa9] block mb-6">
            Social Profiles
          </span>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                title={social.name}
                className="group relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0d111a] hover:bg-[#c9ada7] text-[#c9ada7] hover:text-[#09090b] border border-[#1e293b] hover:border-[#c9ada7] flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-110 cursor-pointer"
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {social.icon}
                </div>
                
                {/* Floating tooltip on hover */}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none absolute -top-8 px-2.5 py-1 rounded-md bg-[#182030] text-[#f4efea] text-[10px] font-mono uppercase tracking-wider whitespace-nowrap shadow-md border border-[#2a3850]">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* EDITORIAL FOOTER                                                          */}
        {/* ========================================================================= */}
        <footer className="pt-10 border-t border-[#182030] flex flex-col items-center text-center space-y-8">
          
          {/* Brand Signature */}
          <div className="w-full flex justify-between items-center">
            <a 
              href="#home" 
              className="text-2xl sm:text-3xl font-serif tracking-[0.25em] uppercase text-[#f4efea] hover:text-[#c9ada7] transition-colors"
            >
              ALISHA SARANGI
            </a>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-[#121622] hover:bg-[#c9ada7] text-[#f4efea] hover:text-[#09090b] border border-[#223048] hover:border-[#c9ada7] flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs uppercase tracking-[0.2em] font-mono text-[#a19fa9]">
            <a href="#about" className="hover:text-[#f4efea] transition-colors">About</a>
            <a href="#attributes" className="hover:text-[#f4efea] transition-colors">Attributes</a>
            <a href="#gallery" className="hover:text-[#f4efea] transition-colors">Liquid Gallery</a>
            <a href="#slideshow" className="hover:text-[#f4efea] transition-colors">Slideshow</a>
            <a href="#filmography" className="hover:text-[#f4efea] transition-colors">Films</a>
            <a href="#showreel" className="hover:text-[#f4efea] transition-colors">Showreel</a>
            <a href="#contact" className="hover:text-[#c9ada7] transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="w-full pt-6 border-t border-[#141a26] flex flex-col sm:flex-row items-center justify-between text-xs text-[#525e75] font-mono gap-3">
            <div>
              © 2026 Alisha Sarangi (Lishu). All Rights Reserved.
            </div>
            <div className="flex items-center space-x-4">
              <span>Model & Actress · SHEFORMAL</span>
              <span>·</span>
              <span>Bargarh, Odisha, India</span>
            </div>
          </div>

        </footer>

      </div>
    </section>
  );
}
