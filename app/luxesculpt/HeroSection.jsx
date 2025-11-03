"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black">
      {/* 🎥 Background Video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src="/videos/luxesculpt-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* 🟡 Restored glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />
      </div>

      {/* ✨ Text Overlay */}
      <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-2xl">
        <h1 className="text-white font-bold tracking-[0.15em] text-[clamp(2rem,6vw,4.5rem)] mb-4 drop-shadow-[0_0_20px_rgba(245,200,76,0.3)]">
          LUXESCULPT™
        </h1>

        <h2 className="text-[#F5C84C] font-medium text-[clamp(1rem,3vw,1.75rem)] mb-3 uppercase drop-shadow-[0_0_10px_rgba(245,200,76,0.4)]">
          Adaptive Compression Architecture
        </h2>

        <p className="text-gray-200 text-[clamp(0.9rem,2.5vw,1.1rem)] leading-relaxed mb-6">
          Sculpted precision for form, flow, and power — engineered to enhance
          movement, recovery, and performance.
        </p>

        {/* 🛒 CTA */}
        <Link href="#preorder">
          <button className="bg-[#F5C84C] text-black font-semibold px-8 py-3 rounded-full hover:scale-[1.05] transition-transform duration-300 shadow-lg shadow-[#F5C84C]/30">
            Pre-Order Proto-01 — $189
          </button>
        </Link>

        <p className="mt-2 text-xs text-gray-300 uppercase tracking-widest">
          Limited to 300 Builds
        </p>
      </div>
    </section>
  );
}
