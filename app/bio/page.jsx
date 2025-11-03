"use client";
import Image from "next/image";
import Link from "next/link";

export default function BioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0b0b] to-[#1a1a1a] text-white flex flex-col items-center justify-center px-6 py-16 space-y-10 text-center">
      
      {/* ✨ LuxeSculpt Logo */}
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/logos/vogue.svg"
          alt="LuxeSculpt Logo"
          width={90}
          height={90}
          className="opacity-90 hover:opacity-100 transition-all duration-500"
        />
        <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-[#d4af37]">
          LUXESCULPT™
        </h1>
        <p className="text-gray-400 max-w-md leading-relaxed">
          Elevated compression. Precision architecture. Designed to move like you.
        </p>
      </div>

      {/* 💛 Pre-Order Button */}
      <div>
        <a
          href="#"
          className="relative bg-[#d4af37] text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.03] overflow-hidden group"
        >
          <span className="relative z-10">
            🛒 Pre-Order LuxeSculpt Proto-01 — $189
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-white/40 to-yellow-400 opacity-0 group-hover:opacity-40 animate-shimmer rounded-full"></span>
        </a>
      </div>

      {/* 📸 Follow Button */}
      <div>
       <a
  href="https://www.instagram.com/sloanesterlingc"
  target="_blank"
  rel="noopener noreferrer"
  className="relative border border-[#d4af37] text-[#d4af37] font-semibold py-4 px-8 rounded-full hover:bg-[#d4af37] hover:text-black transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.03]"
>
  📸 Follow Sloane Sterling
</a>

      </div>

      {/* 🌐 Website Button */}
      <div>
        <Link
          href="https://sloanesterling.com"
          className="border border-gray-500 text-gray-300 font-semibold py-4 px-8 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-[1.03]"
        >
          🌍 Visit Official Site
        </Link>
      </div>

      {/* ⚡ Footer */}
      <footer className="text-gray-500 text-sm pt-10">
        © {new Date().getFullYear()} LUXESCULPT™ · All Rights Reserved
      </footer>
    </main>
  );
}

