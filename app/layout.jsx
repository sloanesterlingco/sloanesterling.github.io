<body className="font-sans bg-titanium text-white">

  {/* FLOATING FROSTED NAV — HIDDEN UNTIL SCROLL */}
  <header id="luxenav" className="fixed top-0 left-0 w-full z-50 opacity-0 transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)] backdrop-blur-md bg-white/10 border-b border-white/10 pointer-events-none">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      {/* LOGO LEFT */}
      <div className="text-lg font-semibold tracking-tight">
        LUXESCULPT™
      </div>

      {/* NAV RIGHT */}
      <nav className="flex gap-8 text-xs tracking-[0.15em]">
        <a href="#leggings" className="hover:opacity-70 transition">LEGGINGS</a>
        <a href="#sport-bras" className="hover:opacity-70 transition">SPORT BRAS</a>
        <a href="#tops" className="hover:opacity-70 transition">TOPS</a>
        <a href="#accessories" className="hover:opacity-70 transition">ACCESSORIES</a>
      </nav>
    </div>
  </header>

  {/* HERO + CONTENT */}
  <div className="pt-0">{children}</div>

  {/* SCROLL TRIGGER LOGIC */}
  <script dangerouslySetInnerHTML={{
    __html: `
      window.addEventListener('scroll', () => {
        const nav = document.getElementById('luxenav');
        if (window.scrollY > 30) {
          nav.style.opacity = '1';
          nav.style.pointerEvents = 'auto';
        } else {
          nav.style.opacity = '0';
          nav.style.pointerEvents = 'none';
        }
      });
    `
  }} />

</body>
