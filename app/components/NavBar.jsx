"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "LUXERUN™", href: "/run", icon: "/brand/LUXERUN.png" },
    { name: "LUXEGOAT™", href: "/goat", icon: "/brand/LUXEGOAT.png" },
    { name: "LUXEFLOW™", href: "/flow", icon: "/brand/LUXEFLOW.png" },
    { name: "LUXECYCLE™", href: "/cycle", icon: "/brand/LUXECYCLE.png" },
    { name: "BIO", href: "/bio", icon: "/brand/bio-icon.png" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-[#F5C84C]/25 shadow-[0_0_20px_rgba(245,200,76,0.25)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* 🌟 LOGO — links home */}
        <Link href="/luxesculpt" className="flex items-center gap-3 group">
          <Image
            src="/brand/LUXESCULPT-ICON.PNG"
            alt="LuxeSculpt Logo"
            width={36}
            height={36}
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
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 text-sm font-semibold tracking-wider text-white hover:text-[#F5C84C] transition-all"
            >
              <Image
                src={item.icon}
                alt={`${item.name} icon`}
                width={item.name === "BIO" ? 45 : 34}
                height={item.name === "BIO" ? 45 : 34}
                className={`${
                  item.name === "BIO"
                    ? "rounded-full animate-bio-glow"
                    : "opacity-85 hover:opacity-100"
                }`}
              />
              {item.name}
            </Link>
          ))}
        </div>

        {/* 🛒 BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/cart"
            className="bg-[#F5C84C] text-black font-semibold px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(245,200,76,0.7)] hover:scale-105 hover:shadow-[0_0_30px_rgba(245,200,76,0.8)] transition-all"
          >
            Pre-Order
          </Link>
          <ShoppingBag className="w-6 h-6 text-white hover:text-[#F5C84C] transition-all cursor-pointer" />
        </div>

        {/* 📱 MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#F5C84C] text-2xl focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* 📱 MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-[#F5C84C]/40 animate-slide-down">
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