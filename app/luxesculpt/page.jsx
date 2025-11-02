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
          <h1 className="text-5xl md:text-6xl font-light tracking-[0.2em] text-white">
            LUXESCULPT™
          </h1>
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
          <p className="text-gray-400 leading-relaxed">
            Our proprietary micro-weave delivers second-skin precision with adaptive gradient
            compression — sculpting without restriction. Fibers are tuned for recovery,
            thermoregulation, and elite-grade performance under stress.
          </p>
        </div>
        <Image
          src="/images/luxesculpt/engineered-fabric.png"
          alt="Engineered LuxeSculpt™ Fabric"
          width={500}
          height={500}
          className="rounded-2xl opacity-90 hover:opacity-100 transition mx-auto md:ml-auto max-w-[380px] w-full"
        />
      </section>

      {/* =============================== */}
      {/* 🧠 MUSCLE MAPPING */}
      {/* =============================== */}
      <section className="max-w-7xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8 items-center">
        <Image
          src="/images/luxesculpt/muscle-mapping.png"
          alt="LuxeSculpt™ Muscle Mapping"
          width={500}
          height={500}
          className="rounded-2xl opacity-90 hover:opacity-100 transition md:order-1 mx-auto md:mr-auto max-w-[380px] w-full"
        />
        <div className="space-y-3 text-right md:order-2">
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.12em] text-[#d4af37]">
            Targeted Muscle Support
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Advanced biomechanical paneling stabilizes quads, glutes, and hamstrings for improved
            endurance and recovery. LuxeSculpt™ precision mapping reduces vibration and enhances
            alignment with every stride.
          </p>
        </div>
      </section>

      {/* =============================== */}
      {/* 🔧 TECH NOTE ABOVE REAR IMAGE */}
      {/* =============================== */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-[#d4af37]
