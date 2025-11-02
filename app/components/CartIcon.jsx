"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartIcon() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link
      href="/cart"
      className="relative text-[13px] font-light tracking-[0.14em] opacity-80 hover:opacity-100 transition-opacity"
    >
      BAG
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-4 bg-white text-black text-[10px] font-bold rounded-full px-1.5 py-0.5">
          {totalItems}
        </span>
      )}
    </Link>
  );
}

