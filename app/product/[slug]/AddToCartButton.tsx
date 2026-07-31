"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";

/**
 * زر "أضف للسلة" في صفحة المنتج
 * بيدير حالة "تمت الإضافة" محليًا لمدة 1.5 ثانية.
 */
export default function AddToCartButton({ productName }: { productName: string }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart(productName);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-dark)] border-none rounded-lg px-7 py-3.5 font-extrabold text-sm transition-colors"
    >
      {added ? "✓ تمت الإضافة للسلة" : "أضف للسلة"}
    </button>
  );
}
