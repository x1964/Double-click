import Link from "next/link";
import { getProductsByCategory } from "@/lib/data";
import ProductGrid from "@/components/ProductGrid";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categoryName = decodeURIComponent(slug);
  const items = getProductsByCategory(categoryName);

  return (
    <div className="dc-container py-6 flex-1">
      <Link href="/" className="back-link">
        ‹ رجوع للرئيسية
      </Link>

      <div className="mt-4 mb-6">
        <h1 className="text-2xl sm:text-[26px] font-extrabold text-[var(--color-ink)]">
          {categoryName}
        </h1>
        <p className="text-sm text-[var(--color-muted)] mt-1">
          {items.length > 0
            ? `${items.length} منتج متوفر في الفئة دي`
            : "لسه مفيش منتجات في الفئة دي"}
        </p>
      </div>

      {items.length === 0 ? (
        <div className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[14px] p-8 text-center text-[var(--color-muted)]">
          مفيش منتجات هنا دلوقتي — ابقى تابعنا قريب
        </div>
      ) : (
        <ProductGrid items={items} />
      )}
    </div>
  );
}
