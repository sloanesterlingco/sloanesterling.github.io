"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CartIcon from "./CartIcon";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const divisions = [
    { href: "/run", src: "/brand/LUXERUN.png", label: "LUXERUN™" },
    { href: "/goat", src: "/brand/LUXEGOAT.png", label: "LUXEGOAT™" },
    { href: "/flow", src: "/brand/LUXEFLOW.png", label: "LUXEFLOW™" },
    { href: "/cycle", src: "/brand/LUXECYCLE.png", label: "LUXECYCLE™" },
    { href: "/swag", src: "/brand/LUXESWAG.png", label: "LUXESWAG™" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* LEFT — BRAND */}
        <div className="flex items-center gap-5">
          <Link href="/luxesculpt" className="group flex items-center gap-2">
            <Image
              src="/brand/LUXESCULPT-ICON.PNG"
              width={38}
              height={38}
              alt="LUXESCULPT"
              className="opacity-95 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_6px_#FFD700]"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="tracking-[0.12em] text-[15px] font-light text-[#fff] drop-shadow-[0_0_6px_#FFD700]">
                LUXESCULPT™
              </span>
              <span className="text-[10px] uppercase tracking-wider text-amber-400 font-medium animate-pulse-slow">
                Limited Production
              </span>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-3">
            {divisions.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-1 px-1 py-1 rounded-md hover:bg-white/5 transition-all"
              >
                <Image
                  src={item.src}
                  width={28}
                  height={28}
                  alt={item.label}
                  className="opacity-85 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-[13px] font-light tracking-[0.12em] opacity-80 group-hover:text-[#46b4ff] transition-all duration-500">
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
                <Link href="/leggings" className="px-4 py-2 hover:bg-white/10">
                  Leggings
                </Link>
                <Link href="/sport-bras" className="px-4 py-2 hover:bg-white/10">
                  Sport Bras
                </Link>
                <Link href="/tops" className="px-4 py-2 hover:bg-white/10">
                  Tops
                </Link>
                <Link href="/accessories" className="px-4 py-2 hover:bg-white/10">
                  Accessories
                </Link>
              </div>
            </div>
          </div>
          <CartIcon />
        </div>
      </nav>
    </header>
  );
}
