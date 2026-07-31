"use client";

import Link from "next/link";
import { Truck, ShieldCheck, RefreshCw } from "lucide-react";
import { categories, getDeals, getLaptops, getParts, iconForCategory } from "@/lib/data";
import ProductGrid from "@/components/ProductGrid";

/**
 * الصفحة الرئيسية
 * النافبار والفوتر بيتعرضوا من layout.tsx، فالصفحة دي بتركّز على المحتوى بس.
 */
export default function DoubleClickHome() {
  const deals = getDeals();
  const laptops = getLaptops();
  const parts = getParts();

  return (
    <>
      {/* HERO BANNER */}
      <section
        className="text-white py-10 px-4"
        style={{
          background: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #0f172a 100%)",
        }}
      >
        <div className="dc-container grid lg:grid-cols-[1.1fr_0.9fr] gap-7 items-center">
          <div>
            <span className="bg-[var(--color-accent)] text-white text-xs font-extrabold px-3 py-[5px] rounded-full">
              عرض الموسم
            </span>
            <h1 className="text-[28px] sm:text-4xl font-extrabold my-4 leading-[1.3]">
              جهّز الكمبيوتر بتاعك بأفضل الأسعار في مصر
            </h1>
            <p className="text-sm opacity-90 mb-5 max-w-[480px] leading-7">
              ماوس، شاشات، كيسات، لابتوبات، وقطع غيار — كل حاجة أصلية وبضمان، وتوصيل
              لباب البيت.
            </p>
            <Link
              href="/deals"
              className="inline-block bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] rounded-lg px-6 py-3 font-extrabold text-[15px] transition-colors"
            >
              تسوق العروض
            </Link>
          </div>

          {/* عروض محدودة */}
          <div className="bg-white rounded-2xl p-5 text-[var(--color-ink)]">
            <div className="text-[13px] font-bold text-[var(--color-muted)] mb-2.5">
              عروض محدودة تنتهي قريبًا
            </div>
            {deals.slice(0, 3).map((d) => {
              const Icon = iconForCategory(d.category);
              return (
                <div
                  key={d.id}
                  className="flex items-center gap-2.5 py-2.5 border-b border-[var(--color-line)] last:border-0"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-canvas)] flex items-center justify-center shrink-0">
                    <Icon size={20} color="var(--color-brand)" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12.5px] font-medium truncate">{d.name}</div>
                    <div className="text-xs text-[var(--color-brand)] font-bold">
                      {d.price} ج.م · خصم {d.discount}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="dc-container py-5 flex-1">
        {/* فئات */}
        <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-7 gap-3.5 mb-5">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.slug}
                href={`/category/${encodeURIComponent(c.slug)}`}
                className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-xl py-5 px-2.5 text-center text-[var(--color-ink)] hover:border-[var(--color-brand)] hover:shadow-sm transition-all"
              >
                <Icon size={26} color="var(--color-brand)" className="mx-auto mb-2" />
                <div className="text-[13px] font-semibold">{c.name}</div>
              </Link>
            );
          })}
        </div>

        {/* شريط الثقة */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[14px] p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          {[
            [Truck, "توصيل سريع", "٢-٤ أيام لكل المحافظات"],
            [ShieldCheck, "ضمان أصلي", "موثّق من الوكيل المعتمد"],
            [RefreshCw, "استرجاع سهل", "خلال ١٤ يوم من غير أسئلة"],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof Truck;
            return (
              <div key={t as string} className="flex items-center gap-3">
                <div className="w-[42px] h-[42px] rounded-[10px] bg-[var(--color-canvas)] flex items-center justify-center shrink-0">
                  <I size={20} color="var(--color-brand)" />
                </div>
                <div>
                  <div className="font-bold text-sm">{t as string}</div>
                  <div className="text-xs text-[var(--color-muted)]">{d as string}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* الأقسام */}
        <ProductGrid title="عروض اليوم" sub="خصومات لفترة محدودة" items={deals} cols={3} seeAllHref="/deals" />
        <ProductGrid title="لابتوبات مختارة" sub="لكل استخدام: جيمنج، شغل، دراسة" items={laptops} cols={4} seeAllHref={`/category/${encodeURIComponent("لابتوبات")}`} />
        <ProductGrid title="قطع غيار وترقيات" sub="ابني أو رقّي جهازك بنفسك" items={parts} cols={4} seeAllHref="/parts" />

        {/* شريط ترويجي */}
        <div className="bg-[var(--color-brand-deep)] rounded-2xl p-8 flex flex-wrap justify-between items-center gap-4 mb-5">
          <div className="text-white">
            <div className="text-xl font-extrabold mb-1.5">
              عايز بيلد كامل من غير تعقيد؟
            </div>
            <div className="text-sm opacity-85">
              احنا بنجمعلك كل القطع ونركّبها بالمواصفات اللي تحددها
            </div>
          </div>
          <Link
            href="/custom-build"
            className="bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] rounded-lg px-6 py-3 font-extrabold transition-colors"
          >
            اطلب بيلد مخصص
          </Link>
        </div>
      </div>
    </>
  );
}
