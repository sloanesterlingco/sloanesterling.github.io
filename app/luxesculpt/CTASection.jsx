"use client";

import PreorderButton from "./PreorderButton";

export default function CTASection() {
  return (
    <section className="w-full bg-gradient-to-b from-black via-neutral-950 to-black text-center text-white py-24 border-t border-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
        Engineered for Precision. Built for Power.
      </h2>

      <p className="text-sm text-gray-400 uppercase tracking-widest mb-12">
        Limited to 300 Elite Builds • LuxeSculpt™ Performance Division
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
        {/* Gold Edition */}
        <div className="bg-gradient-to-b from-[#1a1a1a] to-black border border-[#F5C84C]/40 rounded-2xl p-8 shadow-[0_0_30px_rgba(245,200,76,0.25)] w-[90%] md:w-1/2 transition-transform duration-300 hover:scale-105">
          <h3 className="text-[#F5C84C] text-2xl font-semibold mb-3">
            LuxeSculpt™ — Gold Edition
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Signature LuxeSculpt Gold weave with a radiant micro-sheen finish.
            Designed for athletes who embody strength and precision.
          </p>
          <PreorderButton item="gold" />
        </div>

        {/* Copper Edition */}
        <div className="bg-gradient-to-b from-[#1a1a1a] to-black border border-[#b87333]/40 rounded-2xl p-8 shadow-[0_0_30px_rgba(184,115,51,0.25)] w-[90%] md:w-1/2 transition-transform duration-300 hover:scale-105">
          <h3 className="text-[#b87333] text-2xl font-semibold mb-3">
            LuxeSculpt™ — Brushed Copper Edition
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Earth-rich copper tone with a matte metallic sheen — grounded energy
            and raw endurance for next-level performance.
          </p>
          <PreorderButton item="copper" />
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-12 tracking-wide">
        © {new Date().getFullYear()} LuxeSculpt™ | Designed by Sloane Sterling •
        Adaptive Compression Architecture™
      </p>
    </section>
  );
}

