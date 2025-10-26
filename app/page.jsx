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
  src="/legging.png"
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



