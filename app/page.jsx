export default function Home() {
  return (
    <main className="min-h-screen bg-titanium text-white relative">

      {/* FULL-SCREEN VIDEO HERO */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* CINEMATIC SCROLL CUE — ENTER LUXESCULPT™ */}
        <div
          id="scrollCue"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-700 delay-1000 pointer-events-none"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="tracking-[0.2em] text-xs font-light">
              ENTER LUXESCULPT™
            </span>
            <div className="relative w-8 h-8 rounded-full border border-white/40 flex items-center justify-center animate-pulse-slow">
              <span className="text-sm">↓</span>
            </div>
          </div>
        </div>
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

      {/* SCROLL HANDLERS */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const cue = document.getElementById('scrollCue');
            const sec2 = document.getElementById('section2');
            let dismissed = false;
            window.addEventListener('scroll', () => {
              if (window.scrollY > 30 && !dismissed) {
                cue.style.opacity = '0';
                dismissed = true;
              }
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
