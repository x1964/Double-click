import Link from "next/link";
import { Phone, MessageCircle, Construction } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

/**
 * صفحة placeholder موحّدة (Global Placeholder Page)
 * بتستخدم لكل الصفحات اللي لسه بتتحضّر وبتتربط مع الباك إند.
 * شكلها عالمي ومتناسق مع باقي الموقع (ألوان البراند، RTL، نفس الخط).
 */
export default function PagePlaceholder({
  title,
  description = "الصفحة دي لسه بتتحضّر، وهيتضاف محتواها قريب لما نظام إدارة المحتوى والطلبات يشتغل.",
  icon: Icon = Construction,
}: {
  title: string;
  description?: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="dc-container py-10 flex-1">
      <Link href="/" className="back-link">
        ‹ رجوع للرئيسية
      </Link>

      <div className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-2xl p-7 sm:p-9 mt-5 max-w-2xl mx-auto text-center dc-fade-in">
        {/* الأيقونة */}
        <div className="w-16 h-16 rounded-2xl bg-[var(--color-canvas)] flex items-center justify-center mx-auto mb-5">
          <Icon size={30} color="var(--color-brand)" strokeWidth={1.6} />
        </div>

        <h1 className="text-[22px] sm:text-2xl font-extrabold text-[var(--color-ink)] mb-2.5">
          {title}
        </h1>
        <p className="text-[14px] text-[var(--color-muted)] leading-7 mb-7 max-w-md mx-auto">
          {description}
        </p>

        {/* فاصل */}
        <div className="border-t border-[var(--color-line)] pt-6">
          <div className="text-[13px] font-bold text-[var(--color-ink)] mb-3.5">
            محتاج مساعدة دلوقتي؟ تواصل معانا على طول
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white hover:bg-[#1fb855] rounded-lg px-5 py-3 font-bold text-[13px] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={17} />
              راسلنا على واتساب
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-dark)] rounded-lg px-5 py-3 font-bold text-[13px] transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={17} />
              <span dir="ltr">{CONTACT.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
