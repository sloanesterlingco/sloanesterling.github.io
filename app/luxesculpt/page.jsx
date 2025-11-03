"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";
import FabricSection from "./FabricSection";
import MuscleMapping from "./MuscleMapping";
import RearView from "./RearView";
import Endorsements from "./Endorsements";



export default function LuxeSculptPage() {
  return (
    <main className="w-full overflow-hidden bg-black text-white">
      {/* 🏁 NAVIGATION */}
      <NavBar />

      {/* 🎥 HERO SECTION */}
      <HeroSection />

      {/* 🧵 FABRIC DETAILS */}
      <FabricSection />

      {/* 💪 MUSCLE MAPPING */}
      <MuscleMapping />

      {/* 🍑 REAR SUPPORT */}
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

