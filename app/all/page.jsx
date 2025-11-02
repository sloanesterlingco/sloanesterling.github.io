"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

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

            <div className="flex justify-between items-center">
              <p className="text-neutral-400">Total Items: {totalItems}</p>
              <button
                onClick={clearCart}
                className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-neutral-200 transition-all"
              >
                Checkout →
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

