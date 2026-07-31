import Link from "next/link";
import { getParts } from "@/lib/data";
import ProductGrid from "@/components/ProductGrid";

export default function PartsPage() {
  const parts = getParts();

  return (
    <div className="dc-container py-6 flex-1">
      <Link href="/" className="back-link">
        ‹ رجوع للرئيسية
      </Link>

      <div className="mt-4 mb-6">
        <h1 className="text-2xl sm:text-[26px] font-extrabold text-[var(--color-ink)]">
          قطع غيار وترقيات
        </h1>
        <p className="text-sm text-[var(--color-muted)] mt-1">
          ابني أو رقّي جهازك بنفسك — رامات، SSD، كروت شاشة، وكل القطع الأصلية
        </p>
      </div>

      <ProductGrid items={parts} />
    </div>
  );
}
