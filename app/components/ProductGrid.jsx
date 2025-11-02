"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductGrid({ products = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {products.map((product, i) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl bg-white/5">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="mt-4 text-lg font-medium tracking-tight">{product.name}</h3>
          <p className="text-sm text-gray-400">{product.tag}</p>
        </motion.div>
      ))}
    </div>
  );
}


