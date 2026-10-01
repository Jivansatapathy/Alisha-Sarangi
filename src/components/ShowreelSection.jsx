import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

/**
 * ShowreelSection Component
 * Full-width, full-height (100vh) pure cinematic video showcase.
 * Free of all headings, labels, and text — focused 100% on pure video playback.
 */
export default function ShowreelSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section 
      id="showreel" 
      className="relative w-full h-screen min-h-screen bg-black overflow-hidden select-none z-20"
    >
      {/* 100% Full-Viewport Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover filter contrast-[1.06] brightness-[0.96]"
        poster="/model-hero.jpg"
      >
        <source 
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Subtle top & bottom edge gradients for seamless transition to surrounding sections */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#09090b] via-[#09090b]/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent pointer-events-none" />

      {/* Minimal Floating Audio & Playback Controls (Discrete in bottom-right corner) */}
      <div className="absolute bottom-8 right-8 z-30 flex items-center space-x-3 opacity-60 hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={toggleMute}
          className="p-3 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-[#f4efea] hover:text-[#c9ada7] transition-all cursor-pointer shadow-2xl hover:scale-105 active:scale-95"
          title={isMuted ? "Unmute audio" : "Mute audio"}
          aria-label="Toggle mute"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
        <button
          onClick={togglePlay}
          className="p-3 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-[#f4efea] hover:text-[#c9ada7] transition-all cursor-pointer shadow-2xl hover:scale-105 active:scale-95"
          title={isPlaying ? "Pause video" : "Play video"}
          aria-label="Toggle play"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>
      </div>
    </section>
  );
}
