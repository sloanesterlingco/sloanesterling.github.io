"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-[#F5C84C]/25 shadow-[0_0_15px_rgba(245,200,76,0.25)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* 🌟 LOGO — links to LuxeSculpt homepage */}
        <Link href="/luxesculpt" className="flex items-center gap-3 group">
          <Image
            src="/brand/LUXESCULPT-ICON.PNG"
            alt="LuxeSculpt Logo"
            width={38}
            height={38}
            className="object-contain drop-shadow-[0_0_10px_rgba(245,200,76,0.7)] group-hover:scale-110 transition-transform duration-300"
          />
          <div>
            <span className="font-bold text-[#F5C84C] tracking-wide drop-shadow-[0_0_10px_rgba(245,200,76,0.9)]">
              LUXESCULPT™
            </span>
            <p className="text-xs text-[#F5C84C]/70 uppercase tracking-widest">
              Limited Production
            </p>
          </div>
        </Link>

        {/* 🔗 DESKTOP LINKS */}
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
                  hovered === item.name ? "text-[#F5C84C]" : "text-white"
                }`}
              >
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={item.name === "BIO" ? 45 : 34}
                  height={item.name === "BIO" ? 45 : 34}
                  className={`transition-all ${
                    hovered === item.name
                      ? "opacity-100 scale-110 drop-shadow-[0_0_10px_rgba(245,200,76,0.8)]"
                      : "opacity-85 scale-100"
                  } ${item.name === "BIO" ? "rounded-full animate-bio-glow" : ""}`}
                />
                {item.name}
              </Link>

              {/* Dropdown */}
              {item.name !== "BIO" && (
                <div
                  className={`absolute top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm font-medium px-6 py-2 rounded-lg border border-[#F5C84C]/40 transition-all duration-300 backdrop-blur-md ${
                    hovered === item.name
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  <span className="text-[#F5C84C]/90 whitespace-nowrap">
                    Coming Soon
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 🛒 CART BUTTON */}
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
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#F5C84C] text-2xl focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* 📱 MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-[#F5C84C]/40 animate-mobile-slide-down">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-6 py-4 border-b border-neutral-800 text-white hover:text-[#F5C84C] transition-all"
            >
              <Image
                src={item.icon}
                alt={`${item.name} icon`}
                width={item.name === "BIO" ? 45 : 34}
                height={item.name === "BIO" ? 45 : 34}
                className={`${
                  item.name === "BIO" ? "rounded-full animate-bio-glow" : ""
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
