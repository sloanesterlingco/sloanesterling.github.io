"use client";

import dynamic from "next/dynamic";
import React from "react";

// 🧠 Dynamic safe imports — page won't go blank if one fails
const NavBar = dynamic(() => import("../components/NavBar").catch(() => () => <div className="text-red-500 text-center p-6">⚠️ NavBar failed to load</div>), { ssr: false });
const HeroSection = dynamic(() => import("./HeroSection").catch(() => () => <div className="text-red-500 text-center p-6">⚠️ HeroSection failed</div>), { ssr: false });
const FabricSection = dynamic(() => import("./FabricSection").catch(() => () => <div className="text-red-500 text-center p-6">⚠️ FabricSection failed</div>), { ssr: false });
const MuscleMapping = dynamic(() => import("./MuscleMapping").catch(() => () => <div className="text-red-500 text-center p-6">⚠️ MuscleMapping failed</div>), { ssr: false });
const RearView = dynamic(() => import("./RearView").catch(() => () => <div className="text-red-500 text-center p-6">⚠️ RearView failed</div>), { ssr: false });
const Endorsements = dynamic(() => import("./Endorsements").catch(() => () => <div className="text-red-500 text-center p-6">⚠️ Endorsements failed</div>), { ssr: false });
const Footer = dynamic(() => import("../components/Footer").catch(() => () => <div className="text-red-500 text-center p-6">⚠️ Footer failed</div>), { ssr: false });

export default function LuxeSculptPage() {
  return (
    <main className="w-full overflow-hidden bg-black text-white min-h-screen">
      {/* 🏁 NAVIGATION */}
      <NavBar />

      {/* 🎥 HERO SECTION */}
      <HeroSection />

      {/* 🧵 FABRIC DETAILS */}
      <FabricSection />

      {/* 💪 MUSCLE MAPPING */}
      <MuscleMapping />

      {/* 🍑 REAR VIEW */}
      <RearView />

      {/* 🏅 ENDORSEMENTS */}
      <Endorsements />

      {/* 🛒 FINAL CTA */}
      <section
        id="preorder"
        className="text-center py-16 bg-black border-t border-gray-800 flex flex-col items-center justify-center"
      >
        <h3 className="text-gray-200 text-[clamp(1.25rem,3vw,1.75rem)] font-semibold mb-6 tracking-wide">
          Ready to Secure Your Prototype?
        </h3>
        <button className="bg-[#F5C84C] text-black font-semibold px-10 py-4 rounded-full hover:opacity-90 transition-all mb-2">
          Pre-Order Proto-01 — $189
        </button>
        <p className="text-xs text-gray-300 uppercase tracking-widest">
          Limited to 300 Builds — Reserve Yours Before They’re Gone
        </p>
      </section>

      {/* ⚙️ FOOTER */}
      <Footer />
    </main>
  );
}
