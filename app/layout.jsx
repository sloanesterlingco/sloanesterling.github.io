import "./../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans bg-titanium text-white">
        {/* FLOATING GLASS HEADER */}
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            {/* LOGO / BRAND */}
            <div className="text-xl font-semibold tracking-tight">
              LUXESCULPT™
            </div>

            {/* CENTERED NAVIGATION */}
            <nav className="flex gap-8 text-sm tracking-wide">
              <a href="#leggings" className="hover:opacity-70 transition">LEGGINGS</a>
              <a href="#sport-bras" className="hover:opacity-70 transition">SPORT BRAS</a>
              <a href="#tops" className="hover:opacity-70 transition">TOPS</a>
              <a href="#accessories" className="hover:opacity-70 transition">ACCESSORIES</a>
            </nav>

            {/* PLACEHOLDER FOR FUTURE CART / AI COMPANION */}
            <div className="text-xs opacity-50">●</div>
          </div>
        </header>

        {/* CONTENT (PUSHED UNDER HEADER) */}
        <div className="pt-24">{children}</div>
      </body>
    </html>
  );
}
