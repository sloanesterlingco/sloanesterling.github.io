export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-transparent via-black/95 to-black border-t border-gray-800 text-center py-12 px-6 fade-in relative overflow-hidden">
      {/* 🌟 Animated Gold Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,200,76,0.08),transparent_70%)] animate-pulse pointer-events-none"></div>

      <div className="relative max-w-3xl mx-auto">
        {/* ✨ Brand Line */}
        <h3 className="text-[#F5C84C] text-lg font-semibold tracking-[0.25em] mb-3 animate-pulse">
          LUXESCULPT™
        </h3>

        {/* 🧭 Tagline */}
        <p className="text-gray-400 text-sm mb-4">
          Precision-Engineered Activewear | Designed for Form, Flow & Power
        </p>

        {/* 💎 Copyright */}
        <p className="text-gray-500 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} LUXESCULPT™ — Designed by{" "}
          <span className="text-[#F5C84C] font-semibold">Sloane Sterling</span>
        </p>

        {/* ⚡ Limited-Edition Reminder */}
        <p className="text-xs text-gray-400 mt-3 uppercase tracking-widest">
          Limited to 300 Elite Builds
        </p>
      </div>

      {/* ⬆️ Scroll to Top Button */}
      <a
        href="#top"
        className="absolute right-6 bottom-6 bg-[#F5C84C]/20 hover:bg-[#F5C84C]/40 text-[#F5C84C] border border-[#F5C84C]/50 rounded-full p-3 shadow-[0_0_10px_rgba(245,200,76,0.6)] transition-all duration-300 hover:scale-110"
        title="Back to top"
      >
        ↑
      </a>
    </footer>
  );
}

