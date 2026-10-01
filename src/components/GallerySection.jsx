import React from 'react';
import LiquidGlassCarousel, { liquidGlassCarouselDefaultItems } from './LiquidGlassCarousel';

/**
 * GallerySection Component
 * Full-width, full-height (100vh) immersive WebGL Liquid Glass Chromatic Dispersion Lens Gallery.
 * No box wrappers, no constraining borders — 100% full-screen canvas fluid experience.
 */
export default function GallerySection() {
  return (
    <section 
      id="gallery" 
      className="relative w-full h-screen min-h-screen bg-[#080b11] text-[#f4efea] overflow-hidden border-t border-[#182030] z-20 select-none"
    >
      {/* 100% Full-Screen Liquid Glass WebGL Carousel (No Box) */}
      <div className="absolute inset-0 w-full h-full">
        <LiquidGlassCarousel 
          items={liquidGlassCarouselDefaultItems}
          panelHeight={580}
          gap={22}
          background="#080b11"
          entry={true}
          autoplay={true}
          autoplayInterval={3200}
          className="w-full h-full"
        />
      </div>

      {/* Subtle edge blend gradients */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#080b11] via-[#080b11]/50 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080b11] via-[#080b11]/50 to-transparent pointer-events-none z-10" />
    </section>
  );
}
