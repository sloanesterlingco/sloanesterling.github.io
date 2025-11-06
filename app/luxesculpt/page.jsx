"use client";

import dynamic from "next/dynamic";
import React from "react";

/**
 * NOTE:
 * NavBar and Footer are rendered globally in app/layout.jsx.
 * Do NOT import them here to avoid duplicates.
 */

// Page sections in app/luxesculpt
const HeroSection   = dynamic(() => import("./HeroSection"),   { ssr: false });
const FabricSection = dynamic(() => import("./FabricSection"), { ssr: false });
const MuscleMapping = dynamic(() => import("./MuscleMapping"), { ssr: false });
const RearView      = dynamic(() => import("./RearView"),      { ssr: false });
const Endorsements  = dynamic(() => import("./Endorsements"),  { ssr: false });

// CTA lives in app/components/CTASection.jsx  ← (PLURAL: components)
const CTASection    = dynamic(() => import("../components/CTASection"), { ssr: false });

export default function LuxeSculptPage() {
  return (
    <main className="flex flex-col items-center justify-center bg-black text-white">
      {/* 🎥 HERO */}
      <section id="hero" className="w-full">
        <HeroSection />
      </section>

      {/* 🧵 FABRIC */}
      <section id="fabric" className="w-full">
        <FabricSection />
      </section>

      {/* 💪 MUSCLE MAPPING */}
      <section id="muscle-mapping" className="w-full">
        <MuscleMapping />
      </section>

      {/* 🔙 REAR VIEW */}
      <section id="rear-view" className="w-full">
        <RearView />
      </section>

      {/* ⭐ ENDORSEMENTS */}
      <section id="endorsements" className="w-full">
        <Endorsements />
      </section>

      {/* 💎 CALL TO ACTION */}
      <section id="cta" className="w-full">
        <CTASection />
      </section>
    </main>
  );
}

