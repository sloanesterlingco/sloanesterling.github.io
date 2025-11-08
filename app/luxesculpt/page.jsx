"use client";

import dynamic from "next/dynamic";
import React from "react";
import CTASection from "./CTASection";
import BuyButton from "@/components/BuyButton"; // 👈 Add this import

// ✅ Dynamic imports to optimize build performance
const HeroSection = dynamic(() => import("./HeroSection"), { ssr: false });
const FabricSection = dynamic(() => import("./FabricSection"), { ssr: false });
const MuscleMapping = dynamic(() => import("./MuscleMapping"), { ssr: false });
const RearView = dynamic(() => import("./RearView"), { ssr: false });

export default function LuxeSculptPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden fade-in">
      {/* 🎥 HERO SECTION */}
      <section id="hero" className="w-full">
        <HeroSection
          videoSrc="/videos/luxesculpt-hero.mp4"
          title="LuxeSculpt™ Proto-01"
          subtitle="Engineered compression. Sculpted performance. Limited Gold & Brushed Copper Editions."
        />
      </section>

      {/* 🧵 FABRIC SECTION */}
      <section id="fabric" className="w-full border-t border-gray-800">
        <FabricSection />
      </section>

      {/* 💪 MUSCLE MAPPING */}
      <section id="muscle-mapping" className="w-full border-t border-gray-800">
        <MuscleMapping />
      </section>

      {/* 🔙 REAR VIEW */}
      <section id="rear-view" className="w-full border-t border-gray-800">
        <RearView />
      </section>

      {/* ⚡ CALL-TO-ACTION + BUY BUTTONS */}
      <section id="cta" className="w-full border-t border-gray-800 py-16 text-center">
        <CTASection />

        {/* 🛒 Stripe Buy Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <BuyButton
            priceId="price_12345" // Replace with your real Stripe Price ID
            label="LuxeSculpt Gold Edition"
          />
          <BuyButton
            priceId="price_67890" // Replace with your real Stripe Price ID
            label="LuxeSculpt Brushed Copper"
          />
        </div>

        <p className="text-gray-400 text-sm mt-6 uppercase tracking-widest">
          Limited to 300 builds worldwide
        </p>
      </section>
    </main>
  );
}
