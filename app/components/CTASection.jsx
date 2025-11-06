"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-neutral-950 to-black py-20 px-6 text-center overflow-hidden border-t border-[#F5C84C]/20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[clamp(2rem,6vw,3.5rem)] font-extrabold text-[#F5C84C] tracking-tight drop-shadow-[0_0_20px_rgba(245,200,76,0.4)] mb-6"
      >
        Ready to Feel the Difference?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10"
      >
        Limited Proto-01 Release — engineered for performance, sculpted for you.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Link
          href="/cart"
          className="inline-block bg-[#F5C84C] text-black font-semibold px-10 py-4 rounded-full shadow-[0_0_20px_rgba(245,200,76,0.4)] hover:shadow-[0_0_40px_rgba(245,200,76,0.8)] hover:scale-105 transition-all duration-300 ease-out"
        >
          Pre-Order Now — $189
        </Link>
        <p className="text-sm text-gray-400 mt-4 uppercase tracking-widest">
          Limited to 300 builds
        </p>
      </motion.div>

      {/* 🔄 Subtle background pulse */}
      <div className="absolute inset-0 bg-gradient-radial from-[#F5C84C]/5 to-transparent animate-pulse blur-3xl" />
    </section>
  );
}
