export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* FULL-SCREEN VIDEO HERO */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src="/assets/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* dark elegant overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
            LuxeSculpt™
          </h1>
          <p className="text-xl md:text-3xl text-neutral-300 mt-4 max-w-3xl">
            Bioadaptive Athletic Architecture for Maximum Force, Minimal Fatigue.
          </p>
          <p className="text-neutral-400 text-sm md:text-base mt-3">
            by <span className="text-white font-semibold">Sloane Sterling™</span>
          </p>
        </div>
      </div>
    </main>
  );
}
