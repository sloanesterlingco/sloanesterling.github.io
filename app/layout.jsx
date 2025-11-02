export const metadata = {
  title: "LuxeSculpt™ Performance — Precision Compressionwear for Elite Movement",
  description:
    "Engineered for intensity. LuxeSculpt™ Proto-01 introduces adaptive compression architecture and biomechanical muscle mapping. Designed for performance. Built for beauty.",
  openGraph: {
    title: "LuxeSculpt™ Performance — Engineered for Movement",
    description:
      "Adaptive compression architecture. Sculpted precision. The evolution of elite performancewear begins here.",
    url: "https://www.luxesculptperformance.com",
    siteName: "LuxeSculpt™",
    images: [
      {
        url: "https://www.luxesculptperformance.com/images/luxesculpt/engineered-fabric.png",
        width: 1200,
        height: 630,
        alt: "LuxeSculpt™ Fabric Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LuxeSculpt™ Performance — Precision Compressionwear",
    description:
      "Biomechanical innovation meets sculpted aesthetics. LuxeSculpt™ Proto-01 is redefining compressionwear.",
    images: [
      "https://www.luxesculptperformance.com/images/luxesculpt/muscle-mapping.png",
    ],
  },
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
        />
      </head>

      <body className="scroll-smooth bg-black text-white antialiased">
        <CartProvider>
          <header className="sticky top-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              {/* LEFT — MASTER BRAND */}
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

          <main id="content">{children}</main>

          <footer className="bg-black text-gray-400 py-10 border-t border-gray-800 text-center text-sm">
            <p>
              © {new Date().getFullYear()} LuxeSculpt™ Performance — Engineered by Sloane Sterling. All Rights Reserved.
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="https://www.instagram.com/sloanesterlingc/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                Instagram
              </a>
              <a href="https://www.tiktok.com/@sloanesterling" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                TikTok
              </a>
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
