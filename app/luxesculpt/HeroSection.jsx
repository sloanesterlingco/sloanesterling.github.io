// app/luxesculpt/HeroSection.jsx
export default function HeroSection({
  videoSrc = "/videos/luxesculpt-hero.mp4",
}) {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center">
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

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Centered content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-2">
          LUXESCULPT™
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
          ADAPTIVE COMPRESSION ARCHITECTURE
        </h2>
        <p className="text-white/90 text-lg md:text-xl mb-10">
          Sculpted precision for form, flow, and power — engineered to enhance
          movement, recovery, and performance.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition">
            LuxeSculpt Gold Edition
          </button>
          <button className="bg-[#b87333] hover:bg-[#c67a36] text-white font-semibold px-8 py-3 rounded-full transition">
            LuxeSculpt Brushed Copper
          </button>
        </div>

        <p className="text-gray-400 uppercase tracking-widest text-sm">
          LIMITED TO 300 BUILDS
        </p>
      </div>
    </section>
  );
}

