"use client";

import dynamic from "next/dynamic";
import React from "react";

// ✅ Dynamic imports for smooth client-side rendering
const HeroSection = dynamic(() => import("./HeroSection"), { ssr: false });
const FabricSection = dynamic(() => import("./FabricSection"), { ssr: false });
const MuscleMapping = dynamic(() => import("./MuscleMapping"), { ssr: false });
const RearView = dynamic(() => import("./RearView"), { ssr: false });
const Endorsements = dynamic(() => import("./Endorsements"), { ssr: false });
const CTASection = dynamic(() => import("../components/CTASection.jsx"), { ssr: false });

export default function LuxeSculptPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white fade-in">
      {/* 🏆 HERO SECTION */}
      <section id="hero" className="w-full">
        <HeroSection />
      </section>

      {/* 🧵 FABRIC SECTION */}
      <section id="fabric" className="w-full">
        <FabricSection />
      </section>

      {/* 💪 MUSCLE MAPPING SECTION */}
      <section id="muscle-mapping" className="w-full">
        <MuscleMapping />
      </section>

      {/* 🔙 REAR VIEW SECTION */}
      <section id="rear-view" className="w-full">
        <RearView />
      </section>

      {/* ⭐ ENDORSEMENTS SECTION */}
      <section id="endorsements" className="w-full">
        <Endorsements />
      </section>

      {/* ⚡ CALL TO ACTION SECTION */}
      <section id="cta" className="w-full">
        <CTASection />
      </section>
    </main>
  );
}

