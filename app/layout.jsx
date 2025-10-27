import "./../styles/globals.css";

export const metadata = {
  title: "LUXESCULPT™",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans bg-titanium text-white overflow-x-hidden">

        {/* ULTRA-SUBTLE GLASS NAV — VISIBLE FROM START, STRENGTHENS ON SCROLL */}
        <header
          id="luxenav"
          className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

            {/* MASTER LOGO + DIVISION NAV */}
            <div className="flex items-center gap-6">
              {/* ICON + LUXESCULPT */}
              <div className="flex items-center gap-2">
                <img 
                  src="/luxesculpt-icon.png"
                  alt="LuxeSculpt Icon" 
                  className="h-9 w-auto"
                />
                <span className="text-lg font-semibold tracking-tight hover:opacity-70 transition">
                  LUXESCULPT™ — RUNNING
                </span>
              </div>

              {/* SEPARATOR — S0 (ultra-minimal) */}
              <span className="opacity-30 text-sm select-none">|</span>

              {/* LUXEGOAT */}
              <span className="text-lg font-semibold tracking-tight hover:opacity-70 transition">
                LUXEGOAT™ — TRAIL
              </span>
            </div>

            {/* NAV LINKS */}
            <nav className="flex gap-8 text-xs tracking-[0.15em]">
              <a href="#leggings" className="hover:opacity-70 transition">LEGGINGS</a>
              <a href="#sport-bras" className="hover:opacity-70 transition">SPORT BRAS</a>
              <a href="#tops" className="hover:opacity-70 transition">TOPS</a>
              <a href="#accessories" className="hover:opacity-70 transition">ACCESSORIES</a>
            </nav>

          </div>
        </header>

        {/* HERO + CONTENT — ZERO GAP */}
        {children}

        {/* SCROLL INTENSITY LOGIC */}
        <script dangerouslySetInnerHTML={{
          __html: `
            const nav = document.getElementById('luxenav');
            window.addEventListener('scroll', () => {
              if (window.scrollY > 30) {
                nav.style.background = 'rgba(0, 0, 0, 0.4)';
              } else {
                nav.style.background = 'rgba(0, 0, 0, 0.2)';
              }
            });
          `
        }} />

      </body>
    </html>
  );
}
