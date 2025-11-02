"use client";

import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import CartIcon from "./components/CartIcon";
import { productSchema } from "./run/schema.jsonld";
import { brandSchema } from "./brand/schema.jsonld";
import { graphSchema } from "./graph/schema.jsonld";

export default function RootLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const divisions = [
    { href: "/run", src: "/brand/LUXERUN.png", label: "LUXERUN™" },
    { href: "/goat", src: "/brand/LUXEGOAT.png", label: "LUXEGOAT™" },
    { href: "/flow", src: "/brand/LUXEFLOW.png", label: "LUXEFLOW™" },
    { href: "/cycle", src: "/brand/LUXECYCLE.png", label: "LUXECYCLE™" },
    { href: "/swag", src: "/brand/LUXESWAG.png", label: "LUXESWAG™" },
  ];

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }} />
      </head>

      <body className="scroll-smooth bg-black text-white antialiased">
        <CartProvider>
          {/* 🧊 GLASS NAVBAR */}
          <header className="sticky top-0 z-50 luxeglass">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              {/* LEFT — BRAND */}
              <div className="flex items-center gap-6">
                <Link href="/luxesculpt" className="group flex items-center gap-2">
                  <Image
                    src="/brand/LUXESCULPT-ICON.PNG"
                    width={38}
                    height={38}
                    alt="LUXESCULPT"
                    className="opacity-95 group-hover:opacity-100 transition-opacity"
                    priority
                  />
                  <div className="flex flex-col leading-tight">
                    <span className="tracking-[0.12em] text-[15px] font-light luxeglow">
                      LUXESCULPT™
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-amber-400 font-medium animate-pulse-slow">
                      Limited Production
                    </span>
                  </div>
                </Link>

                {/* DIVISION LINKS */}
                <div className="hidden md:flex items-center gap-2.5">
                  {divisions.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-[4px] px-[2px] py-[2px] rounded-md hover:bg-white/5 transition-all relative focus:outline-none"
                    >
                      <Image
                        src={item.src}
                        width={30}
                        height={30}
                        alt={item.label}
                        className="opacity-85 group-hover:opacity-100 transition-opacity"
                      />
                      <span className="text-[14px] font-light tracking-[0.12em] opacity-80 group-hover:text-[#46b4ff] transition-all duration-500">
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
                  <div className="absolute right-0 mt-2 w-48 bg-black/80 border border-white/10 rounded-xl shadow-xl backdrop-blur-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 ease-in-out">
                    <div className="py-2 flex flex-col text-sm font-light tracking-wide">
                      <Link href="/leggings" className="px-4 py-2 hover:bg-white/10 transition-colors">Leggings</Link>
                      <Link href="/sport-bras" className="px-4 py-2 hover:bg-white/10 transition-colors">Sport Bras</Link>
                      <Link href="/tops" className="px-4 py-2 hover:bg-white/10 transition-colors">Tops</Link>
                      <Link href="/accessories" className="px-4 py-2 hover:bg-white/10 transition-colors">Accessories</Link>
                    </div>
                  </div>
                </div>
                <CartIcon />
              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                className="md:hidden flex flex-col gap-[4px] items-center justify-center w-8 h-8 focus:outline-none"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
                <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
              </button>
            </nav>

            {/* MOBILE NAV */}
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

          <main id="content">{children}</main>

          {/* FOOTER */}
          <footer className="bg-black text-gray-400 py-10 border-t border-gray-800 text-center text-sm">
            <p>© {new Date().getFullYear()} LuxeSculpt™ Performance — Engineered by Sloane Sterling.</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="https://www.instagram.com/sloanesterlingc/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
              <a href="https://www.tiktok.com/@sloanesterling" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">TikTok</a>
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Contact</a>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
