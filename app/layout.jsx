// /app/layout.jsx

import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "LuxeSculpt™",
  description: "LuxeSculpt™ — ultra-performance athletic luxury.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* STICKY GLASS NAV — fluid elegance */}
        <header className="sticky top-0 z-50">
          <nav
            aria-label="Primary"
            className="
              bg-white/10
              supports-[backdrop-filter]:bg-white/5
              backdrop-blur-md
              border-b border-white/10
              shadow-[0_8px_32px_rgba(0,0,0,0.25)]
            "
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between py-3 md:py-4">
                {/* LEFT: MASTER BRAND (dominant) */}
                <Link
                  href="/"
                  className="group inline-flex items-center gap-3 md:gap-4"
                >
                  {/* Master circular badge image */}
                  <img
                    src="/luxesculpt-icon.png"
                    alt="LuxeSculpt master brand badge"
                    className="h-9 w-9 md:h-10 md:w-10 rounded-full select-none pointer-events-none"
                    loading="eager"
                    decoding="async"
                  />
                  {/* Master wordmark (ALL CAPS) */}
                  <span className="uppercase tracking-[0.14em] text-sm md:text-base font-semibold leading-none group-hover:opacity-90 transition-opacity">
                    LUXESCULPT™
                  </span>
                </Link>

                {/* RIGHT: DIVISION BADGES — fluid spacing */}
                <div className="flex items-center gap-4 md:gap-6">
                  {/* LUXERUN */}
                  <Link
                    href="/run"
                    className="group inline-flex items-center gap-2 md:gap-3"
                  >
                    <img
                      src="/luxerun-icon.png"
                      alt="Luxerun division badge"
                      className="h-7 w-7 md:h-8 md:w-8 rounded-full select-none pointer-events-none"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="uppercase tracking-[0.14em] text-xs md:text-sm font-semibold leading-none group-hover:opacity-90 transition-opacity">
                      LUXERUN™
                    </span>
                  </Link>

                  {/* LUXETRAIL */}
                  <Link
                    href="/trail"
                    className="group inline-flex items-center gap-2 md:gap-3"
                  >
                    <img
                      src="/luxetrail-icon.png"
                      alt="Luxetrail division badge"
                      className="h-7 w-7 md:h-8 md:w-8 rounded-full select-none pointer-events-none"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="uppercase tracking-[0.14em] text-xs md:text-sm font-semibold leading-none group-hover:opacity-90 transition-opacity">
                      LUXETRAIL™
                    </span>
                  </Link>

                  {/* LUXEFLOW (wave icon direction; abstract symbolic) */}
                  <Link
                    href="/flow"
                    className="group inline-flex items-center gap-2 md:gap-3"
                  >
                    <img
                      src="/luxeflow-icon.png"
                      alt="Luxeflow division badge"
                      className="h-7 w-7 md:h-8 md:w-8 rounded-full select-none pointer-events-none"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="uppercase tracking-[0.14em] text-xs md:text-sm font-semibold leading-none group-hover:opacity-90 transition-opacity">
                      LUXEFLOW™
                    </span>
                  </Link>

                  {/* LUXECYCLE (abstract symbolic; circle badge) */}
                  <Link
                    href="/cycle"
                    className="group inline-flex items-center gap-2 md:gap-3"
                  >
                    <img
                      src="/luxecycle-icon.png"
                      alt="Luxecycle division badge"
                      className="h-7 w-7 md:h-8 md:w-8 rounded-full select-none pointer-events-none"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="uppercase tracking-[0.14em] text-xs md:text-sm font-semibold leading-none group-hover:opacity-90 transition-opacity">
                      LUXECYCLE™
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* MAIN CONTENT */}
        <main id="content">{children}</main>
      </body>
    </html>
  );
}
