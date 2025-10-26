export default function Home() {
  return (
    <main className="min-h-screen bg-titanium text-white relative">

      {/* FULL-SCREEN HERO VIDEO */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* SECTION 2 — ASCENSION MANIFESTO */}
      <section className="w-full min-h-[60vh] flex items-center justify-center text-center px-6 opacity-0 transition-opacity duration-700 delay-200" id="section2">
        <div>
          <p className="text-2xl md:text-3xl leading-relaxed max-w-3xl mx-auto font-light tracking-wide">
            You were not built to endure.<br />
            You were built to ascend.
          </p>
          <p className="text-sm md:text-base text-neutral-400 mt-6 max-w-2xl mx-auto">
            LuxeSculpt maps muscular intelligence — translating motion into power.
          </p>
        </div>
      </section>

      {/* SECTION 3 — 2×2 EDITORIAL CATEGORY PORTALS */}
      <section className="w-full py-32 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-32 text-center text-lg font-light tracking-[0.15em] uppercase">
          <a href="#leggings" className="hover:opacity-70 transition">Leggings</a>
          <a href="#sport-bras" className="hover:opacity-70 transition">Sport Bras</a>
          <a href="#tops" className="hover:opacity-70 transition">Tops</a>
          <a href="#accessories" className="hover:opacity-70 transition">Accessories</a>
        </div>
      </section>

      {/* SCROLL REVEAL LOGIC FOR SECTION 2 */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const sec2 = document.getElementById('section2');
            window.addEventListener('scroll', () => {
              if (window.scrollY > window.innerHeight * 0.1) {
                sec2.style.opacity = '1';
              }
            });
          `
        }}
      />
    </main>
  );
}
