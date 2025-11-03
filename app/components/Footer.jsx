export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-gray-800 text-center py-10 px-6">
      <div className="max-w-3xl mx-auto">
        {/* ✨ Brand Line */}
        <h3 className="text-[#F5C84C] text-lg font-semibold tracking-[0.2em] mb-3">
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
    </footer>
  );
}
