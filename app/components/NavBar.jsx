"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import BuyButton from "@/components/BuyButton"; // ✅ import for Stripe button

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
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-b from-black via-neutral-900/95 to-black/80 backdrop-blur-xl border-b border-neutral-800 shadow-[0_0_25px_rgba(0,0,0,0.7)] transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2.5">
        {/* 🌟 LOGO */}
        <div className="flex items-center gap-3">
          <Link href="/luxesculpt" className="flex items-center gap-2">
            <Image
              src="/brand/LUXESCULPT-ICON.PNG"
              alt="LuxeSculpt Logo"
              width={36}
              height={36}
              className="object-contain drop-shadow-[0_0_10px_rgba(245,200,76,0.7)]"
            />
            <div>
              <span className="font-bold text-[#F5C84C] tracking-wide drop-shadow-[0_0_10px_rgba(245,200,76,0.9)]">
                LUXESCULPT™
              </span>
              <p className="text-[0.65rem] text-[#F5C84C]/80 uppercase tracking-widest leading-none">
                Limited Production
              </p>
            </div>
          </Link>
        </div>

        {/* 🔗 NAV LINKS */}
        <div className="hidden md:flex items-center gap-9">
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
                  width={item.name === "BIO" ? 42 : 32}
                  height={item.name === "BIO" ? 42 : 32}
                  className={`transition-all ${
                    hovered === item.name
                      ? "opacity-100 scale-110 drop-shadow-[0_0_8px_rgba(245,200,76,0.6)]"
                      : "opacity-85 scale-100"
                  } ${
                    item.name === "BIO"
                      ? "rounded-full border border-[#F5C84C]/40 shadow-[0_0_10px_rgba(245,200,76,0.4)] animate-bioPulse"
                      : ""
                  }`}
                />
                {item.name}
              </Link>

              {/* Tooltip for "Coming Soon" */}
              {item.name !== "BIO" && (
                <div
                  className={`absolute top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-sm font-medium tracking-wide px-6 py-2 min-w-[150px] text-center rounded-lg shadow-[0_0_25px_rgba(245,200,76,0.5)] backdrop-blur-md border border-[#F5C84C]/30 transition-all duration-300 ${
                    hovered === item.name
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  <span className="drop-shadow-[0_0_10px_rgba(245,200,76,0.5)] whitespace-nowrap">
                    Coming Soon
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 🛒 ACTION BUTTONS */}
        <div className="flex items-center gap-4">
          {/* Stripe Pre-Order Button */}
          <div className="bg-[#F5C84C] text-black font-medium px-5 py-2 rounded-full shadow-[0_0_8px_rgba(245,200,76,0.4)] hover:shadow-[0_0_14px_rgba(245,200,76,0.5)] hover:scale-[1.03] transition-all duration-300 ease-out">
            <BuyButton
              priceId="price_XXXX" // replace with your Stripe Gold Edition price ID
              label="Pre-Order"
            />
          </div>

          {/* Shopping Bag Icon */}
          <ShoppingBag
            className="w-5 h-5 text-white hover:text-[#F5C84C] transition-all cursor-pointer"
          />
        </div>
      </div> {/* ✅ closes .max-w-7xl container */}
    </nav>
  );
}
