"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-titanium text-white overflow-x-hidden">
      {/* ---------------- HERO ---------------- */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
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

      {/* ---------------- SECTION 2 ---------------- */}
      <section className="relative py-32 text-center bg-titanium">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Engineered Elegance.
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
            Every seam, every fiber, designed to obey human motion and enhance endurance.
            LuxeSculpt™ is not apparel. It’s biomechanical harmony—where strength meets grace.
          </p>
        </div>
      </section>

      {/* ---------------- SECTION 3 ---------------- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6 pb-40 text-center">
        <div className="border border-white/10 rounded-2xl p-10 hover:bg-white/5 transition">
          <h3 className="text-3xl font-semibold mb-4">Leggings</h3>
          <p className="text-neutral-400">
            3D-support sculpted compression with integrated pocket design.
          </p>
        </div>
        <div className="border border-white/10 rounded-2xl p-10 hover:bg-white/5 transition">
          <h3 className="text-3xl font-semibold mb-4">Sport Bras</h3>
          <p className="text-neutral-400">
            Support that breathes—bioadaptive fit engineered for motion.
          </p>
        </div>
        <div className="border border-white/10 rounded-2xl p-10 hover:bg-white/5 transition">
          <h3 className="text-3xl font-semibold mb-4">Tops</h3>
          <p className="text-neutral-400">
            Seamless thermal balance, elegant compression flow.
          </p>
        </div>
        <div className="border border-white/10 rounded-2xl p-10 hover:bg-white/5 transition">
          <h3 className="text-3xl font-semibold mb-4">Accessories</h3>
          <p className="text-neutral-400">
            Complete the motion system with adaptive-grip support gear.
          </p>
        </div>
      </section>

      {/* ---------------- SECTION 4 — HYPERCLEAN REVEAL ---------------- */}
      <section
        id="leggings"
        className="relative flex flex-col items-center justify-center min-h-screen bg-titanium"
      >
        {/* atmospheric aura */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />

        {/* placeholder silhouette (auto-generated neutral asset) */}
        <Image
  src="/leggings.png"
  alt="LuxeSculpt™ Legging — HyperClean Reveal"
  width={1500}
  height={3000}
  className="opacity-0 animate-[fadeInUp_2.5s_ease-out_forwards]"
/>
        {/* caption */}
        <div className="absolute bottom-16 text-center px-6">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            The LuxeSculpt™ Legging
          </h2>
          <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto">
            Full-body compression mapped with biomech precision.<br />
            Crafted for flow. Built for force.
          </p>
        </div>
      </section>
      {/* ---------------------- SECTION 5 — BIOMECHANICAL AWAKENING ---------------------- */}
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-titanium">
        {/* biomech lab glow background */}
        <div className="absolute inset-0 bg-gradient-to-b from-platinum/20 via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* biomech muscle activation visual */}
        <Image
          src="/leggings.png"
          alt="LuxeSculpt™ Biomech Activation"
          width={1500}
          height={3000}
          className="opacity-0 animate-biomech-scan object-contain max-h-[90vh]"
        />

        {/* silent clinical status code */}
        <div className="absolute bottom-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-platinum/50">
            Biomech Neural Compression Engine • Online
          </p>
        </div>
      </section>
{/* ---------------------- SECTION 6 — MOTION PERFORMANCE ---------------------- */}
<section className="relative flex flex-col items-center justify-center min-h-screen bg-titanium overflow-hidden">
  {/* backdrop gradient for subtle kinetic depth */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-titanium to-black opacity-80" />

  {/* motion blur stripe visual */}
  <div className="absolute inset-0 flex justify-center">
    <div className="w-[40%] h-full bg-gradient-to-b from-platinum/10 via-platinum/30 to-transparent blur-3xl animate-pulse-slow" />
  </div>

  {/* product silhouette or video placeholder */}
  <img
    src="/leggings.png"
    alt="LuxeSculpt™ Motion Series"
    width={1500}
    height={3000}
    className="relative z-10 object-contain max-h-[85vh] opacity-90 hover:opacity-100 transition duration-700 ease-atmospheric"
  />

  {/* text overlay */}
  <div className="relative z-20 mt-10 text-center">
    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Motion Perfected</h2>
    <p className="mt-4 text-neutral-300 max-w-xl">
      Engineered for continuous flow. Every fiber aligned for balance, strength, and forward drive.
    </p>
  </div>
</section>

      {/* ---------------------- SECTION 7 — ACCESS GATEWAY ---------------------- */}
<section className="relative w-full bg-titanium py-44 px-12 md:px-24">
  <div className="max-w-4xl">
    <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
      ENTER THE<br />
      PRECISION COLLECTION
    </h2>
    <p className="mt-6 text-neutral-400 text-lg md:text-xl max-w-lg">
      Engineered garments beyond performance.<br />
      Access begins where endurance becomes evolution.
    </p>

    <a
      href="#shop-motion"
      className="inline-block mt-12 text-sm tracking-[0.25em] uppercase border border-white/20 bg-white/0 hover:bg-white/5 transition-all duration-500 px-10 py-4 rounded-full"
    >
      PROCEED
    </a>
  </div>
</section>

     {/* ---------------------- SECTION 8 — LUXESCULPT MOTION OS ---------------------- */}
<section
  id="shop-motion"
  className="relative w-full bg-titanium py-32 overflow-hidden flex gap-20 snap-x snap-mandatory scroll-smooth"
>
  {/* Autonomous drift */}
  <style>{`
    @keyframes drift {
      0% { transform: translateX(0); }
      100% { transform: translateX(-40px); }
    }
  `}</style>

  <div
    className="flex gap-20 animate-[drift_18s_linear_infinite_alternate]"
  >

    {/* MODULE 1 — ACTIVE / CENTER */}
    <div className="snap-center shrink-0 w-[70vw] max-w-xl mx-auto relative">
      <img
        src="/leggings.png"
        alt="LuxeSculpt™ Motion Leggings"
        className="w-full object-contain opacity-100 transition duration-700 ease-atmospheric"
      />
      {/* Live biomech glow */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-0 animate-[pulse_3s_infinite]" />
      <p className="text-xs tracking-[0.3em] text-platinum/50 mt-6 uppercase text-center">
        SYSTEM MODULE: LOWER-LIMB FORCE OUTPUT A1
      </p>
    </div>

    {/* GHOST 2 — Right */}
    <div className="snap-center shrink-0 w-[70vw] max-w-xl opacity-30 blur-[2px] hover:opacity-100 hover:blur-0 transition duration-700">
      <img src="/leggings.png" alt="Upcoming Module" className="w-full object-contain" />
    </div>

    {/* GHOST 3 — Left */}
    <div className="snap-center shrink-0 w-[70vw] max-w-xl opacity-30 blur-[2px] hover:opacity-100 hover:blur-0 transition duration-700">
      <img src="/leggings.png" alt="Upcoming Module" className="w-full object-contain" />
    </div>

  </div>
</section>

      {/* ---------------- ANIMATION KEYFRAMES ---------------- */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(80px);
          }
          33% {
            opacity: 0;
            transform: translateY(80px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}








