"use client";
import { useState } from "react";

export default function BuyButton({ priceId, label }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    try {
      setLoading(true);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      const data = await res.json();

      if (data?.url) {
        window.location.href = data.url; // Redirects to Stripe Checkout
      } else {
        alert("Checkout error");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Error starting checkout");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="rounded-full px-8 py-3 font-semibold shadow-lg bg-yellow-400 hover:bg-yellow-500 text-black transition disabled:opacity-60"
    >
      {loading ? "Redirecting..." : label}
    </button>
  );
}
