"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/types";
import { useCart } from "@/lib/cart-context";
import { placeholderImage } from "@/lib/data";

/**
 * بطاقة منتج احترافية (Premium Product Card)
 * - تصميم عصري مع صورة في خلفية متدرجة، شارة خصم، وزر إضافة سريع.
 * - حالة "أضيف للسلة" مع تأكيد بصري.
 */
export default function ProductCard({
  p,
  badge,
}: {
  p: Product;
  badge?: string;
}) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(p.name);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      href={`/product/${encodeURIComponent(p.name)}`}
      className="group relative bg-[var(--color-surface)] rounded-2xl overflow-hidden border border-[var(--color-line)] flex flex-col transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:border-[var(--color-brand)]/40 hover:-translate-y-1"
    >
      {/* الشارات */}
      <div className="absolute top-3 right-3 z-20 flex flex-col gap-1.5 items-end">
        {p.discount && (
          <span className="bg-[var(--color-brand)] text-white text-[11px] font-black px-2.5 py-1 rounded-lg shadow-[0_4px_12px_rgba(225,29,42,0.4)]">
            -{p.discount}
          </span>
        )}
        {badge && (
          <span className="bg-[var(--color-gold)]/90 text-[var(--color-brand-deep)] text-[10px] font-bold px-2.5 py-1 rounded-lg">
            {badge}
          </span>
        )}
      </div>

      {/* زر الإضافة السريع (يظهر عند المرور) */}
      <button
        onClick={handleAdd}
        aria-label="إضافة سريعة للسلة"
        className={`absolute top-3 left-3 z-20 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg ${
          added
            ? "bg-green-500 text-white"
            : "bg-white text-[var(--color-ink)] opacity-0 group-hover:opacity-100 hover:bg-[var(--color-brand)] hover:text-white"
        }`}
      >
        {added ? <Check size={16} /> : <ShoppingCart size={16} />}
      </button>

      {/* الصورة */}
      <div className="relative h-[180px] overflow-hidden bg-gradient-to-br from-[var(--color-canvas)] to-white">
        <div className="absolute inset-0 opacity-50 dc-grid-bg" />
        <Image
          src={placeholderImage(p.name, 400, 400, p.image)}
          alt={p.name}
          fill
          sizes="(max-width: 640px) 50vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* المحتوى */}
      <div className="p-4 flex flex-col flex-1">
        {/* التقييم */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                fill={i < Math.round(p.rating) ? "var(--color-brand)" : "none"}
                color="var(--color-brand)"
                strokeWidth={1.5}
              />
            ))}
          </div>
          <span className="text-[11px] text-[var(--color-muted)]">({p.reviews})</span>
        </div>

        {/* الاسم */}
        <div className="text-[13.5px] font-medium mb-3 min-h-[40px] leading-6 text-[var(--color-ink)] line-clamp-2 group-hover:text-[var(--color-brand)] transition-colors">
          {p.name}
        </div>

        {/* السعر */}
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-[20px] font-extrabold text-[var(--color-ink)]">
              {p.price}
              <span className="text-xs font-normal text-[var(--color-muted)] mr-1">ج.م</span>
            </span>
            {p.oldPrice && (
              <span className="text-[12px] text-[var(--color-muted)] line-through">
                {p.oldPrice}
              </span>
            )}
          </div>

          <button
            onClick={handleAdd}
            className={`w-full rounded-xl py-2.5 font-bold text-[13px] transition-all duration-300 flex items-center justify-center gap-2 ${
              added
                ? "bg-green-500 text-white"
                : "bg-[var(--color-canvas)] text-[var(--color-ink)] hover:bg-[var(--color-brand)] hover:text-white border border-[var(--color-line)] hover:border-transparent"
            }`}
          >
            {added ? (
              <>
                <Check size={15} /> أُضيف للسلة
              </>
            ) : (
              <>
                <ShoppingCart size={15} /> أضف للسلة
              </>
            )}
          </button>
        </div>
      </div>
    </Link>
  );
}
