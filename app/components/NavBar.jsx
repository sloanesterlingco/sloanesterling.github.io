"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* 🌟 LUXESCULPT LOGO / LINK */}
        <Link
          href="/luxesculpt"
          className="flex flex-col leading-tight font-semibold tracking-wide text-[#F5C84C] transition-all duration-300 hover:scale-[1.05]"
          style={{
            textShadow:
              "0 0 8px rgba(245,200,76,0.7), 0 0 14px rgba(245,200,76,0.5)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.textShadow =
              "0 0 14px rgba(245,200,76,0.9), 0 0 24px rgba(245,200,76,0.7)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.textShadow =
              "0 0 8px rgba(245,200,76,0.7), 0 0 14px rgba(245,200,76,0.5)")
          }
        >
          <span className="text-lg">LUXESCULPT™</span>
          <span className="text-xs uppercase opacity-80 tracking-[0.15em]">
            Limited Production
          </span>
        </Link>

        {/* 🍔 Mobile Menu Toggle */}
        <button
          className="text-gray-300 md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

        {/* 🧭 Nav Links */}
        <div
          className={`${
            mobileOpen ? "block" : "hidden"
          } absolute md:static top-full left-0 w-full md:w-auto bg-black/90 md:bg-transparent md:flex md:items-center md:gap-8 text-center md:text-left py-4 md:py-0`}
        >
          {["luxerun", "luxegoat", "luxeflow", "luxecycle"].map((path) => (
            <Link
              key={path}
              href={`/${path}`}
              className="block text-gray-300 hover:text-[#F5C84C] transition-all duration-300 md:inline-block md:px-2"
            >
              {path === "luxerun"
                ? "LuxeRun™"
                : path === "luxegoat"
                ? "LuxeGoat™"
                : path === "luxeflow"
                ? "LuxeFlow™"
                : "LuxeCycle™"}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
