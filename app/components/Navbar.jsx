"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CartIcon from "./CartIcon";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // ✅ Make sure labels match hrefs 1:1
  const divisions = [
    { href: "/luxesculpt", src: "/brand/LUXESCULPT-ICON.PNG", label: "LUXESCULPT™" },
    { href: "/run",        src: "/brand/LUXERUN.png",         label: "LUXERUN™" },
    { href: "/goat",       src: "/brand/LUXEGOAT.png",        label: "LUXEGOAT™" },
    { href: "/flow",       src: "/brand/LUXEFLOW.png",        label: "LUXEFLOW™" },
    { href: "/cycle",      src: "/brand/LUXECYCLE.png",       label: "LUXECYCLE™" },
    { href: "/swag",       src: "/brand/LUXESWAG.png",        label: "LUXESWAG™" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* LEFT — MASTER BRAND */}
        <div className="flex items-center gap-6">
          <Link href="/" className="group flex items-center gap-2">
            <Image
              src="/brand/LUXESCULPT-ICON.PNG"
              width={38}
              height={38}
              alt="LUXESCULPT"
              className="opacity-95 group-hover:opacity-100 transition-opacity"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="luxe-reflect tracking-[0.12em] text-[15px] font-light">
                LUXESCULPT™
              </span>
              <span className="text-[10px] uppercase tracking-wider text-amber-400 font-medium animate-pulse-slow">
                Limited Production
              </span>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-4">
            {divisions.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-1 px-1 py-1 rounded-md hover:bg-white/5 transition-all relative"
              >
                <Image
                  src={item.src}
                  width={30}
                  height={30}
                  alt={item.label}
                  className="opacity-85 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-[14px] font-light tracking-[0.12em] coral-hover">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT — SHOP + CART */}
        <div className="hidden md:flex items-center gap-8 relative">
          <div className="group relative">
            <button className="text-[13px] font-light tracking-[0.14em] opacity-80 hover:opacity-100 transition-opacity">
              SHOP ▾
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-black/80 border border-white/10 rounded-xl shadow-xl backdrop-blur-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-200 ease-in-out">
              <div className="py-2 flex flex-col text-sm font-light tracking-wide">
                <Link href="/leggings" className="px-4 py-2 hover:bg-white/10 transition-colors">
                  Leggings
                </Link>
                <Link href="/sport-bras" className="px-4 py-2 hover:bg-white/10 transition-colors">
                  Sport Bras
                </Link>
                <Link href="/tops" className="px-4 py-2 hover:bg-white/10 transition-colors">
                  Tops
                </Link>
                <Link href="/accessories" className="px-4 py-2 hover:bg-white/10 transition-colors">
                  Accessories
                </Link>
              </div>
            </div>
          </div>
          <CartIcon />
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden flex flex-col gap-[4px] items-center justify-center w-8 h-8 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 pb-6 animate-slide-down">
          <div className="flex flex-col mt-4 gap-3">
            {divisions.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-2 border-b border-white/10"
              >
                <div className="flex items-center gap-2">
                  <Image src={item.src} width={24} height={24} alt={item.label} />
                  <span className="text-sm tracking-[0.12em]">{item.label}</span>
                </div>
              </Link>
            ))}
            <div className="flex justify-between items-center mt-4">
              <Link href="/shop" onClick={() => setMobileOpen(false)}>SHOP</Link>
              <CartIcon />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}