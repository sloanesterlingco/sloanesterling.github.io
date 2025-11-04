"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [hovered, setHovered] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sparkKey, setSparkKey] = useState(0);

  // 🎧 Timed chime synced to tracer pulse
  useEffect(() => {
    let timer;
    if (isMenuOpen) {
      timer = setTimeout(() => {
        const ping = new Audio("/sounds/luxe-ping.mp3");
        ping.volume = 0.25;
        ping.play().catch(() => {});
      }, 150);
    }
    return () => clearTimeout(timer);
  }, [isMenuOpen]);

  const navItems = [
    { name: "LUXERUN™", href: "/run", icon: "/brand/LUXERUN.png" },
    { name: "LUXEGOAT™", href: "/goat", icon: "/brand/LUXEGOAT.png" },
    { name: "LUXEFLOW™", href: "/flow", icon: "/brand/LUXEFLOW.png" },
    { name: "LUXECYCLE™", href: "/cycle", icon: "/brand/LUXECYCLE.png" },
    { name: "BIO", href: "/bio", icon: "/brand/bio-icon.png" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black via-neutral-900/95 to-black/80 backdrop-blur-xl border-b border-neutral-800 shadow-[0_0_25px_rgba(0,0,0,0.7)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* 🌟 LOGO / HOME LINK */}
        <Link
          href="/luxesculpt"
          className="flex items-center gap-3 hover:opacity-90 transition"
        >
          <Image
            src="/brand/LUXESCULPT-ICON.PNG"
            alt="LuxeSculpt Logo"
            width={42}
            height={42}
            className="object-contain drop-shadow-[0_0_10px_rgba(245,200,76,0.7)]"
          />
          <div>
            <span className="font-bold text-[#F5C84C] tracking-wide drop-shadow-[0_0_10px_rgba(245,200,76,0.9)]">
              LUXESCULPT™
            </span>
            <p className="text-xs text-[#F5C84C]/80 uppercase tracking-widest">
              Limited Production
            </p>
          </div>
        </Link>

        {/* 💎 DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-2 text-sm font-semibold tracking-wider transition-all duration-300 ${
                  hovered === item.name ? "text-[#3A86FF]" : "text-white"
                }`}
              >
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={34}
                  height={34}
                  className={`transition-all ${
                    hovered === item.name
                      ? "opacity-100 scale-110 drop-shadow-[0_0_12px_rgba(58,134,255,0.7)]"
                      : "opacity-80 scale-100"
                  } ${item.name === "BIO" ? "rounded-full bg-transparent" : ""}`}
                />
                {item.name}
              </Link>

              {/* 💬 DROPDOWN HINT */}
              {item.name !== "BIO" && (
                <div
                  className={`absolute top-12 left-1/2 transform -translate-x-1/2 bg-black/95 text-white text-sm font-medium tracking-wide px-8 py-3 min-w-[160px] text-center rounded-lg shadow-[0_0_25px_rgba(245,200,76,0.6)] backdrop-blur-md border border-[#F5C84C]/40 transition-all duration-300 ${
                    hovered === item.name
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  <span className="drop-shadow-[0_0_10px_rgba(245,200,76,0.7)] whitespace-nowrap">
                    Coming Soon
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 🛒 DESKTOP BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/cart"
            className="bg-[#F5C84C] text-black font-semibold px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(245,200,76,0.7)] hover:scale-105 hover:shadow-[0_0_30px_rgba(245,200,76,0.8)] transition-all"
          >
            Pre-Order
          </Link>
          <ShoppingBag className="w-6 h-6 text-white hover:text-[#F5C84C] transition-all cursor-pointer" />
        </div>

        {/* 📱 MOBILE MENU TOGGLE */}
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            if (!isMenuOpen) setSparkKey((prev) => prev + 1);
          }}
          className="md:hidden text-white hover:text-[#F5C84C] transition-all"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 📱 MOBILE MENU */}
      <div
        className={`md:hidden flex flex-col items-center py-6 space-y-4
          bg-black/70 backdrop-blur-2xl border-t border-[#F5C84C]/20 
          shadow-[0_0_35px_rgba(245,200,76,0.35)] rounded-b-2xl
          transition-all duration-500 ease-out overflow-hidden relative
          ${isMenuOpen ? "animate-slideDown animate-goldTracer" : "animate-slideUp pointer-events-none"}`}
      >
        {/* ✨ MICRO SPARK EFFECT */}
        {isMenuOpen && <div key={sparkKey} className="sparkline" />}

        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-semibold tracking-wide text-white hover:text-[#F5C84C] transition-all"
          >
            {item.name}
          </Link>
        ))}

        <Link
          href="/cart"
          onClick={() => setIsMenuOpen(false)}
          className="bg-[#F5C84C] text-black font-semibold px-8 py-3 rounded-full shadow-[0_0_20px_rgba(245,200,76,0.6)] hover:scale-105 hover:shadow-[0_0_30px_rgba(245,200,76,0.8)] transition-all"
        >
          Pre-Order Now
        </Link>
      </div>
    </nav>
  );
}
