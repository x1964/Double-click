"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

/**
 * صفحة الأسئلة الشائعة (FAQ)
 * - accordion بسيط بيتحكم فيه بالـ state من غير أي مكتبات خارجية.
 * - لما يجي الباك إند، ممكن المصدر يبقى من API بنفس الشكل {q, a}.
 */
const faqs = [
  {
    q: "إزاي أطلب منتج من الموقع؟",
    a: "اضغط على «أضف للسلة» جنب المنتج، وبعدهن روح على السلة ودوس «أكمل الطلب عبر واتساب». هيتبعتلنا طلبك كامل بالمنتجات والأسعار ونكمل معاك التفاصيل.",
  },
  {
    q: "إيه هي طرق الدفع المتاحة؟",
    a: "بنوفّر الدفع عند الاستلام (كاش لمندوب التوصيل)، وكمان الدفع المسبق عبر محفظة (فودافون كاش/إنستاباي) عند الاتفاق. كل المنتجات أصلية ومضمونة.",
  },
  {
    q: "إمّتى بيوصل الطلب؟",
    a: "التوصيل داخل الإسكندرية بيكون خلال 1-2 يوم، وباقي المحافظات من 2-4 أيام عمل. بتوصلك رسالة تأكيد بموعد التوصيل بعد تأكيد الطلب.",
  },
  {
    q: "هل المنتجات أصلية وبضمان؟",
    a: "أيوة، كل منتجاتنا أصلية 100% ومضمونة من الوكيل المعتمد. أي منتج معاه ضمان، بنوضّحلك مدته في صفحة المنتج.",
  },
  {
    q: "أقدر أرجّع أو أبدّل منتج؟",
    a: "أيوة، عندك 14 يوم من استلام الطلب للرجوع أو الاستبدال، بشرط إن المنتج يكون بحالته الأصلية ومعاه كل ملحقاته. شوف صفحة الاسترجاع للتفاصيل.",
  },
  {
    q: "بكم رسوم الشحن؟",
    a: "الشحن مجاني داخل الإسكندرية على الطلبات فوق مبلغ معيّن، وباقي المحافظات بيتحدد حسب المنطقة. بتشوف رسوم الشحن قبل ما تؤكد الطلب.",
  },
];

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="dc-container py-8 flex-1">
      <Link href="/" className="back-link">
        ‹ رجوع للرئيسية
      </Link>

      <div className="mt-4 mb-6">
        <h1 className="text-2xl sm:text-[26px] font-extrabold text-[var(--color-ink)]">
          الأسئلة الشائعة
        </h1>
        <p className="text-sm text-[var(--color-muted)] mt-1">
          أغلب الأسئلة اللي بتوصلنا وإجاباتها — لو سؤالك مش هنا، تواصل معانا.
        </p>
      </div>

      <div className="max-w-3xl space-y-3">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-3 p-4 text-right focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-[14.5px] font-bold text-[var(--color-ink)]">
                  {item.q}
                </span>
                <ChevronDown
                  size={18}
                  color="var(--color-brand)"
                  className={`shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-200 ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-4 pb-4 text-[13.5px] text-[var(--color-muted)] leading-7">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* تواصل */}
      <div className="bg-[var(--color-brand-deep)] rounded-2xl p-6 mt-8 max-w-3xl flex flex-wrap items-center justify-between gap-4">
        <div className="text-white">
          <div className="text-lg font-extrabold mb-1">مقدرتش تلاقي إجابتك؟</div>
          <div className="text-sm opacity-85">
            فريق خدمة العملاء جاهز يردّ على كل استفساراتك
          </div>
        </div>
        <a
          href={`https://wa.me/${CONTACT.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white hover:bg-[#1fb855] rounded-lg px-5 py-3 font-extrabold text-sm transition-colors flex items-center gap-2"
        >
          <MessageCircle size={17} />
          تواصل دلوقتي
        </a>
      </div>
    </div>
  );
}
