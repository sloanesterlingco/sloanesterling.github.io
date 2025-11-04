"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const playChime = () => {
  const chime = new Audio("/brand/sounds/chime.mp3");
  chime.volume = 0.55;
  chime.play().catch(() => {});
};

export default function NavBar() {
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const unlock = () => {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      ctx.resume();
      document.removeEventListener("click", unlock);
    };
    document.addEventListener("click", unlock);
    return () => document.removeEventListener("click", unlock);
  }, []);

  const navItems = [
    { name: "LUXERUN™", href: "/run", icon: "/brand/LUXERUN.png" },
    { name: "LUXEGOAT™", href: "/goat", icon: "/brand/LUXEGOAT.png" },
    { name: "LUXEFLOW™", href: "/flow", icon: "/brand/LUXEFLOW.png" },
    { name: "LUXECYCLE™", href: "/cycle", icon: "/brand/LUXECYCLE.png" },
    { name: "BIO", href: "/bio", icon: "/brand/bio-icon.png" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-b from-black via-neutral-900/95 to-black/80 backdrop-blur-xl border-b border-neutral-800 shadow-[0_0_25px_rgba(0,0,0,0.7)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* 🌟 LOGO */}
        <div className="flex items-center gap-3">
          <Link href="/luxesculpt" onClick={playChime} className="flex items-center gap-3">
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
        </div>

        {/* 🍔 MOBILE MENU ICON */}
        <button
          onClick={() => {
            playChime();
            setMenuOpen(!menuOpen);
            setOpenDropdown(null);
          }}
          className="md:hidden text-[#F5C84C] transition-all"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* 🔗 NAV LINKS (Desktop) */}
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
                onClick={playChime}
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
                      ? "opacity-100 scale-110 drop-shadow-[0_0_12px_rgba(245,200,76,0.7)]"
                      : "opacity-80 scale-100"
                  } ${item.name === "BIO" ? "rounded-full bg-transparent" : ""}`}
                />
                {item.name}
              </Link>

              {/* 💬 Dropdown (Desktop) */}
              {item.name !== "BIO" && (
                <div
                  className={`absolute top-12 left-1/2 transform -translate-x-1/2 
                    bg-black/60 text-white text-sm font-medium tracking-wide px-8 py-3 
                    min-w-[160px] text-center rounded-lg border border-[#F5C84C]/50 
                    shadow-[0_0_15px_rgba(245,200,76,0.5)] backdrop-blur-md transition-all duration-500
                    ${hovered === item.name
                      ? "opacity-100 translate-y-0 animate-slideDown"
                      : "opacity-0 translate-y-2 animate-slideUp pointer-events-none"}`}
                >
                  <span className="drop-shadow-[0_0_10px_rgba(245,200,76,0.7)] whitespace-nowrap">
                    Coming Soon
                  </span>
                  <div className="absolute inset-0 pointer-events-none animate-tracer"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 📱 MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden backdrop-glass text-white px-6 py-4 border-t border-[#F5C84C]/40 animate-slideDown">
          {navItems.map((item) => (
            <div key={item.name} className="py-3 border-b border-neutral-800">
              <button
                onClick={() => {
                  playChime();
                  setOpenDropdown(openDropdown === item.name ? null : item.name);
                }}
                className="w-full flex justify-between items-center text-left text-[#F5C84C] font-semibold tracking-wide"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={item.icon}
                    alt={`${item.name} icon`}
                    width={28}
                    height={28}
                    className="opacity-90"
                  />
                  <span>{item.name}</span>
                </div>
                <span>{openDropdown === item.name ? "▲" : "▼"}</span>
              </button>

              {/* Dropdown content */}
              {openDropdown === item.name && item.name !== "BIO" && (
                <div className="relative mt-3 bg-black/60 rounded-lg border border-[#F5C84C]/50 px-4 py-3 text-center text-sm animate-slideDown shadow-[0_0_20px_rgba(245,200,76,0.4)]">
                  <p className="text-white/90">Coming Soon</p>
                  <div className="absolute inset-0 pointer-events-none animate-tracer"></div>
                  <div className="spark"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
