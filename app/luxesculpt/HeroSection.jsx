"use client";

import BuyButton from "@/components/BuyButton";

export default function HeroSection({
  videoSrc = "/videos/luxesculpt-hero.mp4",
  title = "LuxeSculpt™ Proto-01",
  subtitle = "Engineered compression. Sculpted performance. Limited Gold & Brushed Copper Editions.",
}) {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10" />

      {/* Foreground content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-3 drop-shadow-lg">
          {title}
        </h1>
        <h2 className="text-lg md:text-2xl text-gray-200 mb-10">{subtitle}</h2>

        {/* Stripe Buy Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <BuyButton
            priceId="price_XXXX" // replace with your real Stripe Price ID for Gold Edition
            label="LuxeSculpt Gold Edition"
          />
          <BuyButton
            priceId="price_YYYY" // replace with your real Stripe Price ID for Brushed Copper
            label="LuxeSculpt Brushed Copper"
          />
        </div>

        <p className="text-gray-400 text-sm uppercase tracking-widest mt-4">
          Limited to 300 builds worldwide
        </p>
      </div>
    </section>
  );
}
