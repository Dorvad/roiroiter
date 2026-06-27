"use client";

import { useCart } from "@/components/cart/CartProvider";

export function CartButton({ className = "" }: { className?: string }) {
  const { count, open } = useCart();
  return (
    <button
      onClick={open}
      className={`label inline-flex items-center gap-1.5 text-bone-dim transition-colors hover:text-gold ${className}`}
      aria-label={`Open collector tray, ${count} item${count === 1 ? "" : "s"}`}
    >
      Tray
      <span className="tabular text-gold">[{count}]</span>
    </button>
  );
}
