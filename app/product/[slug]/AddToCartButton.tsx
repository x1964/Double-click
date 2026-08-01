"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";

/**
 * زر "أضف للسلة" في صفحة المنتج — تصميم احترافي مع تأكيد بصري.
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
      className={`rounded-xl px-7 py-3.5 font-extrabold text-sm transition-all duration-300 ${
        added
          ? "bg-green-500 text-white"
          : "dc-btn-primary"
      }`}
    >
      {added ? "✓ تمت الإضافة للسلة" : "أضف للسلة"}
    </button>
  );
}
