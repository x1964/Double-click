import Link from "next/link";
import Image from "next/image";
import { Star, Truck, ShieldCheck, RefreshCw } from "lucide-react";
import { getProductByName, placeholderImage, getProductsByCategory } from "@/lib/data";
import { notFound } from "next/navigation";
import AddToCartButton from "./AddToCartButton";
import ProductGrid from "@/components/ProductGrid";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const productName = decodeURIComponent(slug);
  const p = getProductByName(productName);

  if (!p) return notFound();

  // منتجات ذات صلة من نفس الفئة
  const related = getProductsByCategory(p.category)
    .filter((x) => x.id !== p.id)
    .slice(0, 4);

  return (
    <div className="dc-container py-6 flex-1">
      <Link href="/" className="back-link">
        ‹ رجوع للرئيسية
      </Link>

      <div className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-2xl p-5 sm:p-8 mt-5 grid md:grid-cols-[1fr_1.2fr] gap-7">
        {/* صورة */}
        <div className="h-[260px] bg-[var(--color-canvas)] rounded-xl overflow-hidden relative">
          <Image
            src={placeholderImage(p.name, 600, 600)}
            alt={p.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* تفاصيل */}
        <div>
          <h1 className="text-[22px] font-extrabold mb-2.5 text-[var(--color-ink)]">
            {p.name}
          </h1>

          <div className="flex items-center gap-1.5 mb-3.5">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={15}
                  fill={i < Math.round(p.rating) ? "var(--color-brand)" : "none"}
                  color="var(--color-brand)"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <span className="text-[13px] text-[var(--color-muted)]">
              ({p.reviews} تقييم)
            </span>
          </div>

          <div className="flex items-baseline gap-2.5 mb-1.5">
            <span className="text-[26px] font-extrabold text-[var(--color-ink)]">
              {p.price} <span className="text-[13px] font-normal">ج.م</span>
            </span>
            {p.oldPrice && (
              <span className="text-[15px] text-[var(--color-muted)] line-through">
                {p.oldPrice}
              </span>
            )}
            {p.discount && (
              <span className="text-[13px] text-[var(--color-brand)] font-bold">
                خصم {p.discount}
              </span>
            )}
          </div>

          <div className="text-[13px] text-[var(--color-brand)] font-semibold mb-5">
            توصيل مجاني · متوفر الآن
          </div>

          <AddToCartButton productName={p.name} />

          {/* مميزات */}
          <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-[var(--color-line)]">
            {[
              [Truck, "توصيل سريع"],
              [ShieldCheck, "ضمان أصلي"],
              [RefreshCw, "استرجاع ١٤ يوم"],
            ].map(([Icon, label]) => {
              const I = Icon as typeof Truck;
              return (
                <div key={label as string} className="text-center">
                  <I size={20} color="var(--color-brand)" className="mx-auto mb-1.5" />
                  <div className="text-xs text-[var(--color-muted)]">
                    {label as string}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* منتجات ذات صلة */}
      {related.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-extrabold mb-4 text-[var(--color-ink)]">
            منتجات ذات صلة
          </h2>
          <ProductGrid items={related} />
        </div>
      )}
    </div>
  );
}
