import { categories } from "@/lib/data";
import { CONTACT } from "@/lib/constants";
import { Phone } from "lucide-react";
import Link from "next/link";

/**
 * الفوتر الموحّد (Shared Footer)
 * بيظهر في كل الصفحات عن طريق layout.tsx.
 */

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.5 2h-3v13.4a2.6 2.6 0 1 1-2.2-2.57v-3.06a5.66 5.66 0 1 0 5.2 5.63V8.8a7.5 7.5 0 0 0 4.5 1.5V7.3a4.5 4.5 0 0 1-4.5-4.5V2Z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

const customerLinks = [
  "تتبع الطلب",
  "الشحن والتوصيل",
  "الاسترجاع والاستبدال",
  "الأسئلة الشائعة",
  "تواصل معنا",
];

const companyLinks = ["عن دبيل كليك", "الوظائف", "الشروط والأحكام", "سياسة الخصوصية"];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-deep)] text-white mt-8">
      <div className="dc-container grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
        {/* العمود الأول: عن المتجر */}
        <div className="col-span-2 md:col-span-1">
          <div className="font-extrabold mb-3.5 text-lg">Double Click</div>
          <p className="text-[13px] opacity-80 leading-7 mb-4">
            وجهتك لكل مستلزمات الكمبيوتر في مصر — أصلي، بضمان، وتوصيل لباب البيت.
          </p>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[13px] opacity-90 mb-3.5 hover:opacity-100"
          >
            <WhatsAppIcon size={16} /> <span dir="ltr">{CONTACT.phone}</span>
          </a>
          <a
            href={`tel:${CONTACT.phone}`}
            className="flex items-center gap-2 text-[13px] opacity-90 mb-3.5 hover:opacity-100"
          >
            <Phone size={16} /> <span dir="ltr">{CONTACT.phone}</span>
          </a>
          <div className="flex gap-2.5">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="واتساب"
              className="w-[34px] h-[34px] rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 flex items-center justify-center transition-colors"
            >
              <WhatsAppIcon />
            </a>
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="فيسبوك"
              className="w-[34px] h-[34px] rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <FacebookIcon />
            </a>
            <a
              href={CONTACT.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تيك توك"
              className="w-[34px] h-[34px] rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <TikTokIcon />
            </a>
          </div>
        </div>

        {/* تسوق */}
        <div>
          <div className="font-bold mb-3.5 text-sm">تسوق</div>
          {categories.slice(0, 5).map((c) => (
            <Link
              key={c.slug}
              href={`/category/${encodeURIComponent(c.slug)}`}
              className="block text-[13px] opacity-80 mb-2.5 hover:opacity-100 hover:text-[var(--color-accent)] transition-colors"
            >
              {c.name}
            </Link>
          ))}
        </div>

        {/* خدمة العملاء */}
        <div>
          <div className="font-bold mb-3.5 text-sm">خدمة العملاء</div>
          {customerLinks.map((l) => (
            <a
              key={l}
              href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("مرحبًا، عندي استفسار عن: " + l)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[13px] opacity-80 mb-2.5 hover:opacity-100 hover:text-[var(--color-accent)] cursor-pointer transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        {/* الشركة */}
        <div>
          <div className="font-bold mb-3.5 text-sm">الشركة</div>
          {companyLinks.map((l) => (
            <div
              key={l}
              className="text-[13px] opacity-80 mb-2.5 hover:opacity-100 cursor-pointer transition-opacity"
            >
              {l}
            </div>
          ))}
        </div>
      </div>

      {/* كريديت التطوير */}
      <div className="border-t border-white/15 py-4 text-center text-xs opacity-70">
        © 2026 Double Click — كل الحقوق محفوظة
        <span className="mx-2">·</span>
        <a
          href="https://wa.me/201207771639"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-100 hover:text-white transition-colors"
        >
          تطوير الموقع من شركة{" "}
          <span className="font-bold text-white/90">kernel-z</span>
        </a>
      </div>
    </footer>
  );
}
