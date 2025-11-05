"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = totalItems * 89; // placeholder price logic
  const shipping = subtotal > 150 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Your Bag</h1>

        {cart.length === 0 ? (
          <p className="text-center text-neutral-400">Your bag is empty.</p>
        ) : (
          <>
            <ul className="divide-y divide-neutral-800 mb-10">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center gap-6 py-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-sm text-neutral-400 capitalize">
                      {item.category} · {item.compression} · {item.color}
                    </p>
                    <p className="text-xs text-neutral-500 uppercase">
                      Division: {item.division}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-neutral-400 hover:text-white"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            {/* SUMMARY + CHECKOUT */}
            <div className="border-t border-neutral-800 pt-6">
              <div className="flex justify-between mb-3">
                <p className="text-neutral-400">Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-neutral-400">Shipping</p>
                <p>{shipping === 0 ? "Free" : `$${shipping}`}</p>
              </div>
              <div className="flex justify-between font-semibold text-lg mb-8">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={clearCart}
                  className="text-sm text-neutral-400 hover:text-white"
                >
                  Clear Cart
                </button>
                <button
                  onClick={() => setShowCheckout(true)}
                  className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-neutral-200 transition-all"
                >
                  Checkout →
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* ---------------- CHECKOUT MODAL ---------------- */}
      <AnimatePresence>
        {showCheckout && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="max-w-3xl w-full mx-4 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setShowCheckout(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white text-2xl"
              >
                ✕
              </button>

              {/* CHECKOUT CONTENT */}
              <div className="grid md:grid-cols-2">
                {/* LEFT — IMAGE + SUMMARY */}
                <div className="relative bg-black p-8 flex flex-col justify-center border-r border-neutral-800">
                  <h2 className="text-2xl font-semibold mb-3">
                    LuxeSculpt™ Checkout
                  </h2>
                  <p className="text-sm text-neutral-400 mb-6">
                    Precision performance wear, engineered for your next
                    evolution.
                  </p>

                  <div className="border-t border-neutral-800 mt-auto pt-6">
                    <div className="flex justify-between mb-3">
                      <p className="text-neutral-400">Subtotal</p>
                      <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between mb-3">
                      <p className="text-neutral-400">Shipping</p>
                      <p>{shipping === 0 ? "Free" : `$${shipping}`}</p>
                    </div>
                    <div className="flex justify-between font-semibold text-lg">
                      <p>Total</p>
                      <p>${total.toFixed(2)}</p>
                    </div>
                  </div>
                </div>

                {/* RIGHT — FORM */}
                <div className="p-8 bg-neutral-950">
                  <h3 className="text-xl font-semibold mb-4">Shipping Info</h3>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setShowCheckout(false);
                      clearCart();
                      alert("✅ Order placed successfully!");
                    }}
                    className="space-y-4"
                  >
                    <input
                      required
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-sm"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-sm"
                    />
                    <input
                      required
                      type="text"
                      placeholder="Shipping Address"
                      className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-sm"
                    />
                    <input
                      required
                      type="text"
                      placeholder="City"
                      className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-sm"
                    />
                    <input
                      required
                      type="text"
                      placeholder="Postal Code"
                      className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-sm"
                    />
                    <select
                      required
                      className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-sm"
                    >
                      <option value="">Country</option>
                      <option value="china">China</option>
                      <option value="vietnam">Vietnam</option>
                      <option value="usa">United States</option>
                      <option value="other">Other</option>
                    </select>

                    <button
                      type="submit"
                      className="w-full bg-white text-black py-3 rounded-full font-semibold tracking-wide hover:bg-neutral-200 transition-all mt-6"
                    >
                      Place Order →
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
