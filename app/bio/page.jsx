"use client";
import Image from "next/image";
import Link from "next/link";

export default function BioPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center text-center text-white">
      {/* ✨ Animated Gold Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#2b2b2b] to-[#1a1a1a] animate-shimmer opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af3755] to-transparent blur-2xl animate-glow opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 px-6 py-12">
        {/* Logo + Tagline */}
        <div className="space-y-3 mb-8">
          <Image
            src="/brand/LUXESCULPT-ICON.PNG"
            width={80}
            height={80}
            alt="LuxeSculpt Icon"
            className="mx-auto animate-pulse-slow drop-shadow-[0_0_15px_#d4af37aa]"
          />
          <h1 className="text-3xl tracking-[0.15em] font-light">LUXESCULPT™</h1>
          <p className="text-gray-400 text-sm tracking-wider">
            Engineered for Intensity
          </p>
        </div>

        {/* Buttons */}
        <div className="w-full max-w-sm flex flex-col gap-4">
          <Link
            href="https://luxesculptperformance.com"
            className="bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-semibold tracking-wider py-3 rounded-full hover:scale-105 transition-all"
          >
            🛒 Pre-Order LuxeSculpt Proto-01 — $189
          </Link>
          <Link
            href="https://www.instagram.com/sloanesterlingc/"
            className="border border-[#d4af37]/40 py-3 rounded-full hover:bg-[#d4af37]/10 transition-all"
          >
            📸 Follow Sloane Sterling
          </Link>
          <Link
            href="https://www.tiktok.com/@sloanesterling"
            className="border border-[#d4af37]/40 py-3 rounded-full hover:bg-[#d4af37]/10 transition-all"
          >
            🎥 Watch on TikTok
          </Link>
          <Link
            href="https://luxesculptperformance.com/luxerun"
            className="border border-[#d4af37]/40 py-3 rounded-full hover:bg-[#d4af37]/10 transition-all"
          >
            🏃‍♀️ Explore LuxeRun™
          </Link>
          <Link
            href="mailto:info@luxesculptperformance.com"
            className="border border-[#d4af37]/40 py-3 rounded-full hover:bg-[#d4af37]/10 transition-all"
          >
            💌 Join the Waitlist
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-10 text-xs text-gray-500 tracking-widest">
          © {new Date().getFullYear()} LUXESCULPT™ | Sloane Sterling
        </p>
      </div>
    </main>
  );
}
