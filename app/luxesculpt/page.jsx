"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const LuxeSculptPage = () => {
  return (
    <main className="bg-black text-white">
      {/* 🎬 HERO SECTION */}
      <section className="relative w-full h-[90vh] flex flex-col items-center justify-center overflow-hidden text-center px-6">
        <video
          src="/videos/luxesculpt-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
        />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-10">
          <h1 className="text-6xl md:text-7xl font-extralight tracking-[0.25em] text-white">
            LUXESCULPT™
          </h1>

          <div className="space-y-6 pt-2 md:pt-6 max-w-2xl">
            <h2 className="text-lg md:text-xl font-light tracking-[0.14em] text-luxegold uppercase">
              Adaptive Compression Architecture
            </h2>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Developed with precision pressure-mapping and dynamic fiber response,
              LuxeSculpt™ redefines the feel of compression. Each contour supports muscular
              alignment, optimizes oxygen flow, and enhances performance symmetry — built for
              intensity, designed for beauty.
            </p>

            <Link
              href="#"
              className="inline-block mt-4 bg-luxegold text-black hover:bg-[#e5c76e] transition-all px-10 py-4 rounded-full text-lg font-medium tracking-[0.1em]"
            >
              Pre-Order Now $189
            </Link>
          </div>
        </div>
      </section>

      {/* 💠 FABRIC ENGINEERING */}
      <section className="max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 text-left">
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.12em] text-luxegold">
            Engineered Fabric Technology
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Our proprietary micro-weave delivers second-skin precision with adaptive gradient
            compression — sculpting without restriction. Every fiber is tuned for recovery,
            thermoregulation, and elite-grade performance under stress.
          </p>
        </div>
        <Image
          src="/images/luxesculpt/engineered-fabric.png"
          alt="Engineered LuxeSculpt™ Fabric"
          width={800}
          height={800}
          className="rounded-2xl opacity-90 hover:opacity-100 transition"
        />
      </section>

      {/* 🧠 MUSCLE MAPPING */}
      <section className="max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-12 items-center">
        <Image
          src="/images/luxesculpt/muscle-mapping.png"
          alt="LuxeSculpt™ Muscle Mapping"
          width={800}
          height={800}
          className="rounded-2xl opacity-90 hover:opacity-100 transition md:order-1"
        />
        <div className="space-y-4 text-right md:order-2">
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.12em] text-luxegold">
            Targeted Muscle Support
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Advanced biomechanical paneling stabilizes quads, glutes, and hamstrings for improved
            endurance and recovery. LuxeSculpt™ precision mapping reduces vibration and enhances
            alignment with every stride.
          </p>
        </div>
      </section>

      {/* ⚙️ LIMITED RELEASE NOTE */}
      <section className="max-w-4xl mx-auto text-center mb-10 px-6">
        <h3 className="text-luxegold text-2xl tracking-[0.15em] mb-3">
          Limited Proto-01 Release
        </h3>
        <p className="text-gray-300 text-base leading-relaxed">
          Each LuxeSculpt™ prototype is part of an ultra-limited engineering drop — numbered,
          tested, and reserved for early adopters of the next evolution in performancewear.
        </p>
      </section>

      {/* 🔥 PRODUCT SHOWCASE */}
      <section className="max-w-5xl mx-auto py-24 px-6 text-center">
        <Image
          src="/images/luxesculpt/rearimage.png"
          alt="Rear LuxeSculpt™ Legging Display"
          width={1000}
          height={1000}
          className="mx-auto rounded-2xl opacity-95 hover:opacity-100 transition"
        />
      </section>

      {/* 💎 CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black text-center">
        <h2 className="text-3xl md:text-4xl font-light tracking-[0.15em] mb-6">
          Pre-Order LuxeSculpt™ Proto-01
        </h2>
        <p className="text-lg text-gray-800 max-w-xl mx-auto mb-10">
          Experience the next evolution in compressionwear. Built for intensity, engineered for
          beauty.
        </p>
        <Link
          href="#"
          className="bg-black text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all px-10 py-4 rounded-full text-lg font-semibold tracking-[0.1em]"
        >
          Pre-Order Now $189
        </Link>
      </section>

      {/* 🏆 ENDORSEMENTS */}
      <section className="bg-black py-20">
  <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-12 opacity-70">
    <Image src="/images/vogue.svg" alt="Vogue" width={120} height={60} />
    <Image src="/images/nike.svg" alt="Nike" width={120} height={60} />
    <Image src="/images/womenshealth.svg" alt="Women's Health" width={160} height={60} />
    <Image src="/images/shape.svg" alt="Shape" width={120} height={60} />
  </div>
</section>
    </main>
  );
};

export default LuxeSculptPage;