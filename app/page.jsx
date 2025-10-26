export default function Home() {
  return (
    <main className="min-h-screen bg-titanium text-white relative !mt-0 !pt-0 !top-0">
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

      {/* VANISH SCROLL CUE ON FIRST SCROLL */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const cue = document.getElementById('scrollCue');
            let dismissed = false;
            window.addEventListener('scroll', () => {
              if (!dismissed) {
                cue.style.opacity = '0';
                dismissed = true;
              }
            });
          `
        }}
      />
    </main>
  );
}

