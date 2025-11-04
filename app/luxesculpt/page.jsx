"use client";

import dynamic from "next/dynamic";
import React from "react";

// 🧠 Dynamic safe imports — page won't go blank if one fails
const NavBar = dynamic(() => import("../components/NavBar").catch(() => () => (
  <div className="text-red-500 text-center p-6">⚠️ NavBar failed to load</div>
)), { ssr: false });

const HeroSection = dynamic(() => import("./HeroSection").catch(() => () => (
  <div className="text-red-500 text-center p-6">⚠️ HeroSection failed</div>
)), { ssr: false });

const FabricSection = dynamic(() => import("./FabricSection").catch(() => () => (
  <div className="text-red-500 text-center p-6">⚠️ FabricSection failed</div>
)), { ssr: false });

const MuscleMapping = dynamic(() => import("./MuscleMapping").catch(() => () => (
  <div className="text-red-500 text-center p-6">⚠️ MuscleMapping failed</div>
)), { ssr: false });

const RearView = dynamic(() => import("./RearView").catch(() => () => (
  <div className="text-red-500 text-center p-6">⚠️ RearView failed</div>
)), { ssr: false });

const Endorsements = dynamic(() => import("./Endorsements").catch(() => () => (
  <div className="text-red-500 text-center p-6">⚠️ Endorsements failed</div>
)), { ssr: false });

export default function LuxeSculptPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white fade-in">
      {/* 🌟 NAVBAR */}
      <NavBar />

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
    </main>
  );
}
