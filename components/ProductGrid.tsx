import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/types";

/**
 * شبكة منتجات احترافية (Product Grid)
 * - section بعنوان أنيق + وصف + "شوف الكل".
 * - بدون عنوان -> شبكة بسيطة.
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
  if (!title) {
    return (
      <div
        className="grid gap-5"
        style={{ gridTemplateColumns: `repeat(auto-fill, minmax(230px, 1fr))` }}
      >
        {items.map((p) => (
          <ProductCard key={p.id} p={p} badge={p.discount ? "عرض" : undefined} />
        ))}
      </div>
    );
  }

  const colsClass =
    cols === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className="mb-6">
      <div className="flex justify-between items-end mb-6">
        <div>
          {title && (
            <h3 className="text-2xl sm:text-[28px] font-extrabold text-[var(--color-ink)] tracking-tight">
              {title}
            </h3>
          )}
          {sub && (
            <div className="text-[13px] text-[var(--color-muted)] mt-1">{sub}</div>
          )}
        </div>
        {seeAllHref && (
          <Link
            href={seeAllHref}
            className="text-[13px] text-[var(--color-brand)] font-bold flex items-center gap-1 hover:gap-2 transition-all shrink-0"
          >
            شوف الكل <ChevronLeft size={14} />
          </Link>
        )}
      </div>
      <div className={`grid grid-cols-2 ${colsClass} gap-4 sm:gap-5`}>
        {items.map((p) => (
          <ProductCard key={p.id} p={p} badge={p.discount ? "عرض" : undefined} />
        ))}
      </div>
    </section>
  );
}
