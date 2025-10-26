import "./../styles/globals.css";

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
            {/* LOGO */}
            <div className="text-lg font-semibold tracking-tight">
              LUXESCULPT™
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
