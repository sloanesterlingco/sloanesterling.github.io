export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center px-6 py-20 space-y-20">
      {/* HERO SECTION */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src="/assets/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/50 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">LuxeSculpt™</h1>
          <p className="text-xl md:text-3xl text-neutral-300 mt-4 max-w-3xl">Bioadaptive Athletic Architecture for Maximum Force, Minimal Fatigue.</p>
          <p className="text-neutral-400 text-sm md:text-base mt-2">by <span className="text-white font-semibold">Sloane Sterling™</span></p>
        </div>
      </div>

      {/* TRUSTED BY SECTION */}
      <section className="w-full max-w-5xl border-t border-neutral-800 pt-10 text-center">
        <h2 className="uppercase text-neutral-500 text-sm mb-6 tracking-widest">
          Trusted By
        </h2>
        <div className="flex flex-wrap justify-center gap-10 text-neutral-400 text-lg md:text-xl">
          <span>Nike</span>
          <span>Equinox</span>
          <span>WHOOP</span>
          <span>Red Bull High Performance</span>
          <span>MIT Sports Lab</span>
        </div>
      </section>

      {/* PRODUCT CATEGORY SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {[
          {
            title: "Velocity Sculpt Tops",
            desc: "Surface-compression & neural priming for explosive upper-body activation",
          },
          {
            title: "Enduro Compression Leggings",
            desc: "Sustained muscle oxygenation & fatigue delay under time-load",
          },
          {
            title: "Neurolock Stability Sets",
            desc: "Micro-torque correction + proprioceptive tension recovery boost",
          },
          {
            title: "Adaptive Load Gear",
            desc: "Intelligent resistance architecture for hybrid metabolic output",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-neutral-900 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-neutral-800 transition-all border border-neutral-800"
          >
            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
