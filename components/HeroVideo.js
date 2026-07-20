"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Programmatic play as fallback for browsers that need it
    video.muted = true;
    video.play().catch(() => {
      // Autoplay blocked — video will stay hidden, overlays still show
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        <source src="/hero-bg.webm" type="video/webm" />
      </video>

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060F1E]/85 via-[#0B1F3A]/75 to-[#060F1E]/85" />

      {/* Animated grid lines */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Scanning line */}
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent animate-scan" />

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#C9A84C]/30 rounded-tl-3xl" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#C9A84C]/30 rounded-tr-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#C9A84C]/30 rounded-bl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#C9A84C]/30 rounded-br-3xl" />

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/5 w-1 h-1 rounded-full bg-[#C9A84C] animate-ping opacity-60" />
      <div className="absolute top-2/3 right-1/4 w-1 h-1 rounded-full bg-blue-400 animate-ping opacity-40" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-3/4 w-1 h-1 rounded-full bg-[#C9A84C] animate-ping opacity-50" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping opacity-30" style={{ animationDelay: "0.5s" }} />
    </div>
  );
}
