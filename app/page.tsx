import Link from "next/link";
import {
  ArrowLeft,
  Truck,
  ShieldCheck,
  CreditCard,
  Headphones,
  Zap,
  Award,
  ChevronLeft,
  Sparkles,
} from "lucide-react";
import { categories, getDeals, getParts, iconForCategory } from "@/lib/data";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  const deals = getDeals();
  const parts = getParts();

  return (
    <div className="flex-1">
      {/* ====== HERO ====== */}
      <section className="relative overflow-hidden bg-[var(--color-brand-deep)] text-white">
        {/* خلفية تأثيرية */}
        <div className="absolute inset-0 dc-grid-bg opacity-30" />
        <div
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-[120px]"
          style={{ background: "radial-gradient(circle, #ff2d3f 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-1/3 -right-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
          style={{ background: "radial-gradient(circle, #e11d2a 0%, transparent 70%)" }}
        />

        <div className="dc-container relative grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center py-14 lg:py-20">
          {/* النص */}
          <div className="dc-fade-in">
            <span className="inline-flex items-center gap-2 bg-[var(--color-accent)]/15 ring-1 ring-[var(--color-accent)]/40 text-[var(--color-accent)] text-xs font-bold px-4 py-2 rounded-full">
              <Sparkles size={13} />
              عرض الموسم — خصومات حتى ٤٠٪
            </span>

            <h1 className="text-[34px] sm:text-5xl lg:text-[56px] font-extrabold mt-5 leading-[1.15] tracking-tight">
              جهّز جهازك
              <br />
              بأقوى <span className="dc-text-gradient dc-text-glow">الأسعار</span> في مصر
            </h1>

            <p className="text-sm sm:text-base opacity-75 mt-5 mb-7 max-w-[520px] leading-8">
              ماوس، شاشات، كيسات، لابتوبات، وقطع غيار — كل حاجة أصلية وبضمان،
              وتوصيل لباب البيت. تجربة شراء احترافية بداية من الاختيار لحد الاستلام.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/deals"
                className="dc-btn-primary inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 font-extrabold text-[15px]"
              >
                تسوق العروض
                <ArrowLeft size={18} />
              </Link>
              <Link
                href="/custom-build"
                className="inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 font-bold text-[15px] bg-white/10 ring-1 ring-white/20 hover:bg-white/15 transition-all"
              >
                اطلب بيلد مخصص
              </Link>
            </div>

            {/* مؤشرات الثقة */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-9">
              <div className="flex items-center gap-2">
                <Award size={18} className="text-[var(--color-accent)]" />
                <span className="text-xs opacity-80">+٥٠٠٠ عميل سعيد</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={18} className="text-[var(--color-accent)]" />
                <span className="text-xs opacity-80">شحن سريع لكل المحافظات</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[var(--color-accent)]" />
                <span className="text-xs opacity-80">ضمان رسمي معتمد</span>
              </div>
            </div>
          </div>

          {/* عروض محدودة — بطاقة زجاجية */}
          <div className="dc-glass-dark rounded-3xl p-6 shadow-[var(--shadow-glow)] dc-float">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] dc-pulse-glow" />
                <div className="text-sm font-bold">عروض تنتهي قريبًا</div>
              </div>
              <Link
                href="/deals"
                className="text-xs text-[var(--color-accent)] font-bold flex items-center gap-1 hover:gap-1.5 transition-all"
              >
                الكل <ChevronLeft size={13} />
              </Link>
            </div>
            <div className="space-y-3">
              {deals.slice(0, 4).map((d) => {
                const Icon = iconForCategory(d.category);
                return (
                  <Link
                    key={d.id}
                    href={`/product/${encodeURIComponent(d.name)}`}
                    className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 hover:bg-white/10 ring-1 ring-white/5 hover:ring-[var(--color-accent)]/40 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-dark)] flex items-center justify-center shrink-0 shadow-lg">
                      <Icon size={22} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-medium truncate">{d.name}</div>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-[var(--color-accent)] font-extrabold">
                          {d.price} ج.م
                        </span>
                        {d.oldPrice && (
                          <span className="text-[11px] opacity-50 line-through">{d.oldPrice}</span>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] font-black bg-[var(--color-accent)]/20 text-[var(--color-accent)] px-2 py-1 rounded-lg">
                      -{d.discount}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ====== شريط المميزات ====== */}
      <section className="bg-white border-b border-[var(--color-line)]">
        <div className="dc-container grid grid-cols-2 lg:grid-cols-4 gap-6 py-7">
          {[
            { Icon: Truck, t: "شحن سريع", s: "لكل المحافظات" },
            { Icon: ShieldCheck, t: "ضمان أصلي", s: "على كل المنتجات" },
            { Icon: CreditCard, t: "دفع آمن", s: "عند الاستلام أو أونلاين" },
            { Icon: Headphones, t: "دعم ٢٤/٧", s: "في أي وقت" },
          ].map(({ Icon, t, s }) => (
            <div key={t} className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-brand)]/10 to-[var(--color-brand)]/5 flex items-center justify-center shrink-0 ring-1 ring-[var(--color-brand)]/10">
                <Icon size={22} className="text-[var(--color-brand)]" />
              </div>
              <div>
                <div className="text-sm font-bold text-[var(--color-ink)]">{t}</div>
                <div className="text-xs text-[var(--color-muted)]">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== الفئات ====== */}
      <section className="dc-container py-10">
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="text-xs font-bold text-[var(--color-brand)] mb-1 tracking-wide">
              تسوّق حسب الفئة
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-ink)]">
              استكشف أقسامنا
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((c, i) => {
            const Icon = c.icon;
            const featured = i < 2;
            return (
              <Link
                key={c.slug}
                href={`/category/${encodeURIComponent(c.slug)}`}
                className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                  featured
                    ? "bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-dark)] text-white shadow-[0_12px_30px_-10px_rgba(225,29,42,0.5)]"
                    : "bg-white border border-[var(--color-line)] hover:border-[var(--color-brand)]/40 hover:shadow-[var(--shadow-hover)]"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
                    featured ? "bg-white/15" : "bg-[var(--color-brand)]/8"
                  }`}
                >
                  <Icon size={26} className={featured ? "text-white" : "text-[var(--color-brand)]"} />
                </div>
                <div className={`font-bold ${featured ? "text-white" : "text-[var(--color-ink)]"}`}>
                  {c.name}
                </div>
                <div
                  className={`text-xs mt-1 flex items-center gap-1 ${
                    featured ? "text-white/70" : "text-[var(--color-muted)]"
                  }`}
                >
                  تصفّح المنتجات
                  <ArrowLeft size={12} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                </div>
                {/* زخرفة خلفية */}
                {featured && (
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
                )}
              </Link>
            );
          })}
        </div>
      </section>

      {/* ====== بانر CTA ====== */}
      <section className="dc-container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-brand-deep)] via-[var(--color-brand-dark)] to-[var(--color-brand-deep)] p-8 sm:p-12 my-6">
          <div className="absolute inset-0 dc-grid-bg opacity-20" />
          <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-[var(--color-accent)]/20 blur-3xl" />
          <div className="relative flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-2xl sm:text-3xl font-extrabold leading-snug">
                محتاج جهاز بمواصفات خاصة؟
              </h3>
              <p className="text-white/70 text-sm mt-2 max-w-md">
                صمّم بيلدك المخصص واختر القطع اللي تناسب ميزانيتك واحتياجك — وفريقنا هيركّبهولك باحترافية.
              </p>
            </div>
            <Link
              href="/custom-build"
              className="dc-btn-primary inline-flex items-center gap-2 rounded-2xl px-7 py-4 font-extrabold whitespace-nowrap"
            >
              ابدأ بيلدك الآن
              <ArrowLeft size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== العروض ====== */}
      <section className="dc-container py-6">
        <ProductGrid
          items={deals}
          title="🔥 أقوى العروض"
          sub="خصومات لفترة محدودة — لا تفوّتها"
          seeAllHref="/deals"
          cols={4}
        />
      </section>

      {/* ====== قطع الغيار ====== */}
      {parts.length > 0 && (
        <section className="dc-container py-6 pb-12">
          <ProductGrid
            items={parts}
            title="قطع الغيار والإكسسوارات"
            sub="كل اللي محتاجه لتطوير جهازك"
            seeAllHref="/parts"
            cols={4}
          />
        </section>
      )}
    </div>
  );
}
