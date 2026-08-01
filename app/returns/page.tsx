import Link from "next/link";
import { RefreshCw, CheckCircle2, XCircle, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

/**
 * صفحة الاسترجاع والاستبدال
 * سياسة الاسترجاع بشكل واضح — 14 يوم وشروط القبول.
 */
export default function ReturnsPage() {
  const accepted = [
    "المنتج بحالته الأصلية بدون استخدام أو خدوش",
    "كل الملحقات والإكسسوارات والكرتونة الأصلية موجودة",
    "البلاغ خلال 14 يوم من تاريخ الاستلام",
    "صور المنتج وعلامة الاستلام متاحة",
  ];

  const rejected = [
    "منتجات تم تركيبها أو استخدامها (قطع غيار مركّبة)",
    "المنتجات اللي اتضررت بسبب سوء الاستخدام",
    "برامج أو أكواد تفعيل اتفكت",
    "المنتجات اللي عدت عليها 14 يوم من الاستلام",
  ];

  const steps = [
    ["تواصل معانا", "ابعتلنا على واتساب برقم الطلب وسبب الاسترجاع"],
    ["نتفق على المعاينة", "نحدّد موعد لاستلام المنتج ومعاينته"],
    ["الموافقة", "لو المنتج مطابق للشروط، نأكد الاسترجاع أو الاستبدال"],
    ["استرداد أو استبدال", "نرجّعلك الفلوس أو نبدّل المنتج حسب اختيارك"],
  ];

  return (
    <div className="dc-container py-8 flex-1">
      <Link href="/" className="back-link">
        ‹ رجوع للرئيسية
      </Link>

      <div className="mt-4 mb-6">
        <h1 className="text-2xl sm:text-[26px] font-extrabold text-[var(--color-ink)]">
          الاسترجاع والاستبدال
        </h1>
        <p className="text-sm text-[var(--color-muted)] mt-1">
          رضاك غايتنا — عندك 14 يوم للاسترجاع أو الاستبدال وفق الشروط دي.
        </p>
      </div>

      {/* بطاقة المدة */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-2xl p-5 sm:p-6 mb-6 flex items-center gap-4">
        <div className="w-14 h-14 rounded-[12px] bg-[var(--color-brand)]/10 flex items-center justify-center shrink-0">
          <RefreshCw size={26} color="var(--color-brand)" />
        </div>
        <div>
          <div className="font-extrabold text-[var(--color-ink)] text-lg">
            14 يوم للاسترجاع
          </div>
          <div className="text-[13px] text-[var(--color-muted)]">
            تقدر ترجّع أو تبدّل أي منتج خلال 14 يوم من استلامه
          </div>
        </div>
      </div>

      {/* الشروط: مقبول / مرفوض */}
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        <div className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-2xl p-5 sm:p-6">
          <div className="font-extrabold text-[var(--color-ink)] mb-4 flex items-center gap-2">
            <CheckCircle2 size={18} color="#16a34a" />
            شروط القبول
          </div>
          <ul className="space-y-3">
            {accepted.map((a) => (
              <li key={a} className="flex items-start gap-2.5 text-[13.5px] text-[var(--color-ink)] leading-6">
                <CheckCircle2 size={16} color="#16a34a" className="shrink-0 mt-0.5" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-2xl p-5 sm:p-6">
          <div className="font-extrabold text-[var(--color-ink)] mb-4 flex items-center gap-2">
            <XCircle size={18} color="var(--color-accent)" />
            حالات مش قابلة للاسترجاع
          </div>
          <ul className="space-y-3">
            {rejected.map((r) => (
              <li key={r} className="flex items-start gap-2.5 text-[13.5px] text-[var(--color-ink)] leading-6">
                <XCircle size={16} color="var(--color-accent)" className="shrink-0 mt-0.5" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* خطوات */}
      <div className="bg-[var(--color-brand-deep)] rounded-2xl p-6 mb-6">
        <h2 className="font-extrabold text-white mb-5">خطوات الاسترجاع</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map(([step, desc], i) => (
            <div key={step} className="text-white">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-extrabold text-sm mb-2">
                {i + 1}
              </div>
              <div className="font-bold text-sm mb-1">{step}</div>
              <div className="text-[12.5px] opacity-80 leading-6">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* تواصل */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-2xl p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="font-extrabold text-[var(--color-ink)] mb-1">
            محتاج تبدأ استرجاع؟
          </div>
          <div className="text-[13px] text-[var(--color-muted)]">
            تواصل معانا على واتساب برقم طلبك وهنرجّعلك في أقرب وقت
          </div>
        </div>
        <a
          href={`https://wa.me/${CONTACT.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white hover:bg-[#1fb855] rounded-lg px-5 py-3 font-extrabold text-sm transition-colors flex items-center gap-2"
        >
          <MessageCircle size={17} />
          ابعت طلب استرجاع
        </a>
      </div>
    </div>
  );
}
