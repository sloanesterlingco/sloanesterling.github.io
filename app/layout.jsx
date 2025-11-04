"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [hovered, setHovered] = useState(null);

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
        <Link href="/luxesculpt" className="flex items-center gap-3 group">
          <Image
            src="/brand/LUXESCULPT-ICON.PNG"
            alt="LuxeSculpt Logo"
            width={38}
            height={38}
            className="object-contain drop-shadow-[0_0_10px_rgba(245,200,76,0.8)] transition-transform group-hover:scale-110"
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

        {/* 🔗 NAV LINKS */}
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
                  width={item.name === "BIO" ? 46 : 34}
                  height={item.name === "BIO" ? 46 : 34}
                  className={`transition-all ${
                    hovered === item.name
                      ? "opacity-100 scale-110 drop-shadow-[0_0_10px_rgba(245,200,76,0.8)]"
                      : "opacity-80 scale-100"
                  } rounded-full`}
                />
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        {/* 🛒 ACTION BUTTONS */}
        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="bg-[#F5C84C] text-black font-semibold px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(245,200,76,0.7)] hover:scale-105 hover:shadow-[0_0_30px_rgba(245,200,76,0.8)] transition-all"
          >
            Pre-Order
          </Link>
          <ShoppingBag className="w-6 h-6 text-white hover:text-[#F5C84C] transition-all cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
