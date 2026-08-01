"use client";

import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import type { Product } from "@/lib/types";
import { useCart } from "@/lib/cart-context";
import { placeholderImage } from "@/lib/data";

/**
 * بطاقة منتج (Product Card)
 * قابلة لإعادة الاستخدام في كل الصفحات: الرئيسية، الفئات، العروض، إلخ.
 * - بتدير حالة "أضيف للسلة" محليًا.
 * - بتروّع (hover) برفع خفيف وظل.
 */
export default function ProductCard({
  p,
  badge,
}: {
  p: Product;
  badge?: string;
}) {
  const { addToCart } = useCart();

  return (
    <Link
      href={`/product/${encodeURIComponent(p.name)}`}
      className="group bg-[var(--color-surface)] border border-[var(--color-line)] rounded-xl p-4 flex flex-col relative transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)] hover:border-[var(--color-brand)]/30"
    >
      {badge && (
        <span className="absolute top-3 right-3 bg-[var(--color-accent)] text-white text-[11px] font-bold px-2.5 py-[3px] rounded-full z-10">
          {badge}
        </span>
      )}

      {/* الصورة */}
      <div className="h-[130px] bg-[var(--color-canvas)] rounded-[10px] overflow-hidden mb-3.5 relative">
        <Image
          src={placeholderImage(p.name, 400, 400, p.image)}
          alt={p.name}
          fill
          sizes="(max-width: 640px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* الاسم */}
      <div className="text-sm font-medium mb-2 min-h-[40px] leading-6 text-[var(--color-ink)] line-clamp-2">
        {p.name}
      </div>

      {/* التقييم */}
      <div className="flex items-center gap-1.5 mb-2">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={13}
              fill={i < Math.round(p.rating) ? "var(--color-brand)" : "none"}
              color="var(--color-brand)"
              strokeWidth={1.5}
            />
          ))}
        </div>
        <span className="text-xs text-[var(--color-muted)]">({p.reviews})</span>
      </div>

      {/* السعر */}
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-[19px] font-bold text-[var(--color-ink)]">
          {p.price} <span className="text-xs font-normal">ج.م</span>
        </span>
        {p.oldPrice && (
          <span className="text-[13px] text-[var(--color-muted)] line-through">
            {p.oldPrice}
          </span>
        )}
        {p.discount && (
          <span className="text-xs text-[var(--color-brand)] font-bold">
            خصم {p.discount}
          </span>
        )}
      </div>

      <div className="text-xs text-[var(--color-brand)] font-medium mb-3">
        توصيل مجاني · متوفر الآن
      </div>

      {/* زر الإضافة */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addToCart(p.name);
        }}
        className="mt-auto bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-dark)] border-none rounded-full py-2.5 font-bold text-[13px] transition-colors"
      >
        أضف للسلة
      </button>
    </Link>
  );
}
