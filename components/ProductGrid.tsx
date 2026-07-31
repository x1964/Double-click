import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/types";

/**
 * شبكة منتجات (Product Grid)
 * - كـ section بعنوان + وصف + "شوف الكل".
 * - بدون عنوان/شوف الكل -> بتتحول لشبكة عادية بس (للصفحات الفرعية).
 */
export default function ProductGrid({
  items,
  title,
  sub,
  seeAllHref,
  cols = 4,
}: {
  items: Product[];
  title?: string;
  sub?: string;
  seeAllHref?: string;
  cols?: 3 | 4;
}) {
  // شبكة بسيطة بدون عنوان
  if (!title) {
    return (
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: `repeat(auto-fill, minmax(220px, 1fr))` }}
      >
        {items.map((p) => (
          <ProductCard key={p.id} p={p} badge={p.discount ? "عرض" : undefined} />
        ))}
      </div>
    );
  }

  // section كامل بعنوان
  const colsClass =
    cols === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[14px] p-5 sm:p-6 mb-5">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h3 className="text-xl font-extrabold text-[var(--color-ink)]">{title}</h3>
          {sub && <div className="text-[13px] text-[var(--color-muted)] mt-0.5">{sub}</div>}
        </div>
        {seeAllHref && (
          <Link
            href={seeAllHref}
            className="text-[13px] text-[var(--color-brand)] font-bold flex items-center gap-1 hover:gap-1.5 transition-all"
          >
            شوف الكل <ChevronLeft size={14} />
          </Link>
        )}
      </div>
      <div className={`grid grid-cols-2 ${colsClass} gap-4`}>
        {items.map((p) => (
          <ProductCard key={p.id} p={p} badge={p.discount ? "عرض" : undefined} />
        ))}
      </div>
    </section>
  );
}
