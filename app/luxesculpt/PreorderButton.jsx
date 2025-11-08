"use client";

import React, { useState } from "react";

export default function PreorderButton({ item }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ item }),
      });

      if (!response.ok) {
        console.error("Checkout failed:", response.statusText);
        setLoading(false);
        alert("Something went wrong during checkout. Please try again.");
        return;
      }

      const { url } = await response.json();

      if (url) {
        // ✅ Redirect to Stripe Checkout
        window.location.href = url;
      } else {
        setLoading(false);
        alert("Checkout session not created.");
      }
    } catch (error) {
      console.error("Error in checkout:", error);
      alert("Error: Unable to connect to checkout server.");
      setLoading(false);
    }
  };

  // 💎 Button styles (auto adjusts for gold/copper)
  const styles = {
    gold: {
      bg: "bg-[#FFD700]",
      text: "text-black",
      hover: "hover:bg-[#ffde4d]",
      shadow: "shadow-[0_0_20px_rgba(255,215,0,0.35)]",
    },
    copper: {
      bg: "bg-gradient-to-r from-[#B87333] to-[#D28C47]",
      text: "text-white",
      hover: "hover:brightness-110",
      shadow: "shadow-[0_0_20px_rgba(184,115,51,0.35)]",
    },
  };

  const color = item === "gold" ? styles.gold : styles.copper;

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`${color.bg} ${color.text} ${color.hover} ${color.shadow} font-semibold px-8 py-4 rounded-full transition-transform duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {loading
        ? "Processing..."
        : `Pre-Order ${item === "gold" ? "Gold" : "Brushed Copper"} Edition — $189`}
    </button>
  );
}
