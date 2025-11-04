"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function NavBar() {
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const audioRef = useRef(null);

  // 🔊 Load chime sound
  useEffect(() => {
    audioRef.current = new Audio("/brand/sounds/luxe-ping.mp3");
  }, []);

  const playChime = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

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

        {/* 🌟 LOGO SECTION */}
        <Link href="/luxesculpt" onClick={playChime} className="flex items-center gap-3">
          <Image
            src="/brand/LUXESCULPT-ICON.PNG"
            alt="LuxeSculpt Logo"
            width={38}
            height={38}
            className="object-contain drop-shadow-[0_0_10px_rgba(245,200,76,0.7)] hover:scale-105 transition-transform"
          />
          <div>
            <span className="font-bold text-[#F5C84C] tracking-wide drop-shadow-[0_0_10px_rgba(245,200,76,0.9)]">
              LUXESCULPT™
            </span>
            <p className="text-xs text-[#F5C84C] uppercase tracking-widest">
              Limited Production
            </p>
          </div>
        </Link>

        {/* 🌐 DESKTOP NAV */}
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
                  hovered === item.name ? "text-[#F5C84C]" : "text-white"
                }`}
              >
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={30}
                  height={30}
                  className={`transition-all ${
                    hovered === item.name
                      ? "opacity-100 scale-110 drop-shadow-[0_0_12px_rgba(245,200,76,0.7)]"
                      : "opacity-80 scale-100"
                  } ${item.name === "BIO" ? "rounded-full bg-transparent" : ""}`}
                />
                {item.name}
              </Link>

              {/* 💫 Dropdown */}
              {item.name !== "BIO" && (
                <div
                  className={`absolute top-12 left-1/2 transform -translate-x-1/2 bg-black/70 border border-[#F5C84C]/50 text-white text-sm font-medium tracking-wide px-8 py-3 min-w-[160px] text-center rounded-xl shadow-[0_0_25px_rgba(245,200,76,0.3)] backdrop-blur-md transition-all duration-300 ${
                    hovered === item.name
                      ? "opacity-100 translate-y-0 animate-slideDown"
                      : "opacity-0 translate-y-2 pointer-events-none animate-slideUp"
                  }`}
                >
                  <span className="relative drop-shadow-[0_0_10px_rgba(245,200,76,0.7)] whitespace-nowrap">
                    Coming Soon
                    <span className="absolute inset-0 w-full h-full animate-sparkTracer" />
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 🛒 ACTION BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/cart"
            onClick={playChime}
            className="bg-[#F5C84C] text-black font-semibold px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(245,200,76,0.7)] hover:scale-105 hover:shadow-[0_0_30px_rgba(245,200,76,0.8)] transition-all"
          >
            Pre-Order
          </Link>
          <ShoppingBag className="w-6 h-6 text-white hover:text-[#F5C84C] transition-all cursor-pointer" />
        </div>

        {/* 🍔 MOBILE MENU TOGGLE */}
        <button
          className="md:hidden text-white hover:text-[#F5C84C] transition-all"
          onClick={() => {
            playChime();
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 📱 MOBILE DROPDOWN */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100 animate-slideDown" : "max-h-0 opacity-0 animate-slideUp"
        }`}
      >
        <div className="bg-black/85 backdrop-blur-xl border-t border-[#F5C84C]/30 text-center py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => {
                playChime();
                setMenuOpen(false);
              }}
              className="block text-lg text-white hover:text-[#F5C84C] transition-all"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/cart"
            onClick={() => {
              playChime();
              setMenuOpen(false);
            }}
            className="inline-block bg-[#F5C84C] text-black font-semibold px-10 py-3 rounded-full shadow-[0_0_25px_rgba(245,200,76,0.7)] hover:scale-105 transition-all"
          >
            Pre-Order
          </Link>
        </div>
      </div>
    </nav>
  );
}
