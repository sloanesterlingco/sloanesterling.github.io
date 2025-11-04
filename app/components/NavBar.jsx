"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

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
        <Link href="/luxesculpt" className="flex items-center gap-3">
          <Image
            src="/brand/LUXESCULPT-ICON.PNG"
            alt="LuxeSculpt Logo"
            width={38}
            height={38}
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

        {/* 🧭 DESKTOP LINKS */}
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
                  width={item.name === "BIO" ? 48 : 34}
                  height={item.name === "BIO" ? 48 : 34}
                  className={`transition-all ${
                    hovered === item.name
                      ? "opacity-100 scale-110 drop-shadow-[0_0_12px_rgba(58,134,255,0.7)]"
                      : "opacity-80 scale-100"
                  } ${item.name === "BIO" ? "rounded-full bg-transparent" : ""}`}
                />
                {item.name}
              </Link>

              {/* ✨ DROPDOWN */}
              {item.name !== "BIO" && (
                <div
                  className={`absolute top-12 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-md border border-[#F5C84C]/40 rounded-lg shadow-[0_0_25px_rgba(245,200,76,0.6)] px-8 py-3 text-sm text-white font-medium tracking-wide text-center transition-all duration-500 ${
                    hovered === item.name
                      ? "opacity-100 translate-y-0 animate-slideDown"
                      : "opacity-0 translate-y-2 pointer-events-none animate-slideUp"
                  }`}
                >
                  <span className="drop-shadow-[0_0_10px_rgba(245,200,76,0.7)] whitespace-nowrap">
                    Coming Soon ✨
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 🛒 CART + MOBILE MENU TOGGLE */}
        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="bg-[#F5C84C] text-black font-semibold px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(245,200,76,0.7)] hover:scale-105 hover:shadow-[0_0_30px_rgba(245,200,76,0.8)] transition-all"
          >
            Pre-Order
          </Link>
          <ShoppingBag className="w-6 h-6 text-white hover:text-[#F5C84C] transition-all cursor-pointer" />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white hover:text-[#F5C84C] transition-all"
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* 📱 MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden animate-slideDown bg-black/60 backdrop-blur-lg border-t border-[#F5C84C]/30 shadow-[0_0_20px_rgba(245,200,76,0.5)] p-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-lg text-white font-semibold hover:text-[#F5C84C] transition-all"
            >
              <Image
                src={item.icon}
                alt={`${item.name} icon`}
                width={item.name === "BIO" ? 48 : 34}
                height={item.name === "BIO" ? 48 : 34}
                className={`${
                  item.name === "BIO"
                    ? "rounded-full bg-transparent"
                    : "opacity-90"
                }`}
              />
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}