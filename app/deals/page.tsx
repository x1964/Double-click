import Link from "next/link";
import { getDeals } from "@/lib/data";
import ProductGrid from "@/components/ProductGrid";

export default function DealsPage() {
  const deals = getDeals();

  return (
    <div className="flex-1">
      {/* ترويسة الصفحة */}
      <div
        className="text-white py-10 px-4"
        style={{
          background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #7f1d1d 100%)",
        }}
      >
        <div className="dc-container">
          <Link href="/" className="back-link text-white/90">
            ‹ رجوع للرئيسية
          </Link>
          <h1 className="text-2xl sm:text-3xl font-extrabold mt-3">كل عروض اليوم 🔥</h1>
          <p className="text-sm opacity-90 mt-1">
            خصومات لفترة محدودة — {deals.length} عرض متاح
          </p>
        </div>
      </div>

      <div className="dc-container py-6">
        <ProductGrid items={deals} />
      </div>
    </div>
  );
}
