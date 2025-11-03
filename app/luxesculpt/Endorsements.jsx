"use client";
import Image from "next/image";

export default function Endorsements() {
  return (
    <section className="relative w-full bg-black text-white py-24 px-6 border-t border-gray-800 text-center overflow-hidden">
      {/* faint header image for texture */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Image
          src="/images/luxesculpt/frontimage.png"
          alt="LuxeSculpt front view"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <h2 className="relative z-10 text-[#F5C84C] font-semibold text-2xl mb-10 tracking-wide uppercase">
        Endorsed by Elite Performers
      </h2>

      <div className="relative z-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-900/60 rounded-2xl p-6 shadow-md hover:shadow-[#F5C84C]/20 transition-all duration-300">
          <p className="italic text-gray-200 mb-3 leading-relaxed">
            “The most precise compression I’ve worn — performance armor.”
          </p>
          <p className="text-[#F5C84C] font-semibold text-sm tracking-wider">
            — Trainer A. Vega
          </p>
        </div>

        <div className="bg-gray-900/60 rounded-2xl p-6 shadow-md hover:shadow-[#F5C84C]/20 transition-all duration-300">
          <p className="italic text-gray-200 mb-3 leading-relaxed">
            “Mid-sprint support you can feel. Total control.”
          </p>
          <p className="text-[#F5C84C] font-semibold text-sm tracking-wider">
            — Runner K. Tanaka
          </p>
        </div>

        <div className="bg-gray-900/60 rounded-2xl p-6 shadow-md hover:shadow-[#F5C84C]/20 transition-all duration-300">
          <p className="italic text-gray-200 mb-3 leading-relaxed">
            “From yoga to plyo — compression, lift, breathability: flawless.”
          </p>
          <p className="text-[#F5C84C] font-semibold text-sm tracking-wider">
            — Coach J. Moreno
          </p>
        </div>
      </div>
    </section>
  );
}
