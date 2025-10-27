// force fresh build

// app/layout.jsx

import "../styles/globals.css";

export const metadata = {
  title: "LUXESCULPT™ — Performance House",
  description: "Luxury-engineered performance systems by LUXESCULPT™",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {/* NAVBAR */}
        <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 backdrop-blur-sm bg-transparent">
          {/* LOGO / BRAND */}
          <div className="text-lg font-semibold tracking-tight select-none hover:opacity-80 transition">
            LUXESCULPT™
          </div>

          {/* DIVISION NAV */}
          <nav className="flex items-center gap-8 text-sm font-medium tracking-tight uppercase">
            <a href="/luxrun" className="opacity-80 hover:opacity-100 transition">
              LUXRUN™
            </a>
            <span className="opacity-30 select-none">|</span>
            <a href="/luxgoat" className="opacity-80 hover:opacity-100 transition">
              LUXGOAT™
            </a>
            <span className="opacity-30 select-none">|</span>
            <a href="/luxflow" className="opacity-80 hover:opacity-100 transition">
              LUXFLOW™
            </a>
            <span className="opacity-30 select-none">|</span>
            <a href="/luxcycle" className="opacity-80 hover:opacity-100 transition">
              LUXCYCLE™
            </a>
          </nav>
        </header>

        {/* MAIN CONTENT */}
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
