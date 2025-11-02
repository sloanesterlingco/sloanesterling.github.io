"use client";
import Image from "next/image";
import Link from "next/link";

export default function LuxeSculptPage() {
  return (
    <main className="bg-black text-white">
      {/* =============================== */}
      {/* 🎬 HERO SECTION */}
      {/* =============================== */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <video
          src="/videos/luxesculpt-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-light tracking-[0.2em] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.25)]">
            LUXESCULPT™
          </h1>
          <p className="text-[#d4af37] mt-4 text-lg tracking-[0.25em]">
            Adaptive Compression Architecture
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            Sculpted precision for form, flow, and power — engineered to enhance movement and recovery.
          </p>
        </div>
      </section>

      {/* =============================== */}
      {/* 💠 FABRIC ENGINEERING */}
      {/* =============================== */}
      <section className="max-w-7xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-3 text-left">
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.12em] text-[#d4af37]">
            Engineered Fabric Technology
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Our proprietary micro-weave delivers second-skin precision with adaptive gradient compression — sculpting without restriction. Fibers are tuned for recovery, thermoregulation, and elite-grade performance under stress.
          </p>
        </div>
        <Image
          src="/images/luxesculpt/engineered-fabric.png"
          alt="Engineered LuxeSculpt™ Fabric"
          width={360}
          height={360}
          className="rounded-2xl opacity-90 hover:opacity-100 transition mx-auto md:ml-auto max-w-[300px] w-full"
        />
      </section>

      {/* =============================== */}
      {/* 🧠 MUSCLE MAPPING */}
      {/* =============================== */}
      <section className="max-w-7xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8 items-center">
        <Image
          src="/images/luxesculpt/muscle-mapping.png"
          alt="LuxeSculpt™ Muscle Mapping"
          width={360}
          height={360}
          className="rounded-2xl opacity-90 hover:opacity-100 transition md:order-1 mx-auto md:mr-auto max-w-[300px] w-full"
        />
        <div className="space-y-3 text-right md:order-2">
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.12em] text-[#d4af37]">
            Targeted Muscle Support
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Advanced biomechanical paneling stabilizes quads, glutes, and hamstrings for improved endurance and recovery. LuxeSculpt™ precision mapping reduces vibration and enhances alignment with every stride.
          </p>
        </div>
      </section>

      {/* =============================== */}
      {/* ⚙️ TECHNICAL NOTE ABOVE REAR IMAGE */}
      {/* =============================== */}
      <section className="max-w-4xl mx-auto text-center px-6 py-10 border-t border-b border-white/10">
        <h3 className="text-[#d4af37] text-lg tracking-[0.18em] mb-2">
          Precision Manufacturing
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          LuxeSculpt™ prototypes are engineered in limited production runs, ensuring unparalleled fabric tension calibration and quality control.
        </p>
      </section>

      {/* =============================== */}
      {/* 🛒 CTA */}
      {/* =============================== */}
      <section className="text-center py-14">
        <Link
          href="/shop"
          className="inline-block bg-[#d4af37] hover:bg-[#f1cb6c] text-black text-sm tracking-[0.15em] px-8 py-3 rounded-full transition font-medium"
        >
          PRE-ORDER NOW — $189
        </Link>
      </section>

      {/* =============================== */}
      {/* 🏆 ENDORSEMENTS */}
      {/* =============================== */}
      <section className="bg-black py-14">
        <div className="endorsement-logos max-w-6xl mx-auto flex flex-wrap justify-center gap-10 opacity-85">
          <img src="/logos/vogue.svg" alt="Vogue" width="120" height="60" />
          <img src="/logos/harpersbazaar.svg" alt="Harper’s Bazaar" width="120" height="60" />
          <img src="/logos/elle.svg" alt="ELLE" width="120" height="60" />
          <img src="/logos/gq.svg" alt="GQ" width="120" height="60" />
          <img src="/logos/forbes.svg" alt="Forbes" width="120" height="60" />
        </div>
      </section>
    </main>
  );
}

