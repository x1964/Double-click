import Link from "next/link";
import { Sparkles } from "lucide-react";
import { getDeals } from "@/lib/data";
import ProductGrid from "@/components/ProductGrid";

export default function DealsPage() {
  const deals = getDeals();

  return (
    <div className="flex-1">
      {/* ترويسة الصفحة */}
      <div className="relative overflow-hidden bg-[var(--color-brand-deep)] text-white">
        <div className="absolute inset-0 dc-grid-bg opacity-25" />
        <div
          className="absolute -top-1/3 -left-1/4 w-[500px] h-[500px] rounded-full opacity-30 blur-[120px]"
          style={{ background: "radial-gradient(circle, #ff2d3f 0%, transparent 70%)" }}
        />
        <div className="relative dc-container py-12">
          <Link href="/" className="back-link text-white/80 hover:text-white">
            ‹ رجوع للرئيسية
          </Link>
          <div className="flex items-center gap-2 mt-4">
            <span className="inline-flex items-center gap-1.5 bg-[var(--color-accent)]/15 ring-1 ring-[var(--color-accent)]/40 text-[var(--color-accent)] text-xs font-bold px-3 py-1.5 rounded-full">
              <Sparkles size={12} />
              عروض حصرية
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mt-4">كل عروض اليوم 🔥</h1>
          <p className="text-sm opacity-75 mt-2 max-w-lg">
            خصومات لفترة محدودة — {deals.length} عرض متاح. لا تفوّت الفرصة!
          </p>
        </div>
      </div>

      <div className="dc-container py-8">
        <ProductGrid items={deals} cols={4} />
      </div>
    </div>
  );
}
