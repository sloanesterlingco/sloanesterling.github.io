"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main className="w-full overflow-hidden bg-black text-white">
      {/* 🔝 NAVBAR */}
      <NavBar />

      {/* 🏁 HERO SECTION */}
      <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Background Video + Overlay */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            src="/videos/luxesculpt-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Text Overlay */}
        <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-2xl">
          <h1 className="text-white font-bold tracking-[0.15em] text-[clamp(2rem,6vw,4.5rem)] mb-4">
            LUXESCULPT™
          </h1>
          <h2 className="text-[#F5C84C] font-medium text-[clamp(1rem,3vw,1.75rem)] mb-3">
            Adaptive Compression Architecture
          </h2>
          <p className="text-gray-200 text-[clamp(0.85rem,2.5vw,1.1rem)] leading-relaxed mb-6">
            Sculpted precision for form, flow, and power — engineered to
            enhance movement and recovery.
          </p>

          <button className="bg-[#F5C84C] text-black font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-all">
            Pre-Order Proto-01 — $189
          </button>
          <p className="mt-3 text-sm text-gray-300 uppercase tracking-widest">
            Limited to 300 Elite Builds
          </p>
        </div>
      </section>

      {/* 🧱 LIMITED REMINDER ABOVE FOOTER */}
      <section className="text-center py-10 bg-black border-t border-gray-800">
        <p className="text-gray-400 text-sm tracking-widest uppercase">
          Only 300 Prototypes Worldwide — Reserve Yours Before They’re Gone
        </p>
      </section>

      {/* 🧱 FOOTER */}
      <Footer />
    </main>
  );
}


