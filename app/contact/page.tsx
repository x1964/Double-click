"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Send } from "lucide-react";
import { CONTACT, WHATSAPP_NUMBER } from "@/lib/constants";

/**
 * صفحة "تواصل معنا"
 * - بتعرض كل طرق التواصل (واتساب، اتصال، فيسبوك، تيك توك).
 * - فورم رسالة بيبني رسالة واتساب وبيبعتها (زي نمط custom-build).
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

export default function ContactPage() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `📩 *رسالة جديدة من موقع Double Click*\n\n` +
        `👤 الاسم: ${name || "—"}\n` +
        `📝 الرسالة: ${msg}\n`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setSent(true);
  };

  const channels = [
    {
      icon: MessageCircle,
      label: "واتساب",
      value: CONTACT.phone,
      href: `https://wa.me/${CONTACT.whatsapp}`,
      color: "#25D366",
      external: true,
    },
    {
      icon: Phone,
      label: "اتصال مباشر",
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone}`,
      color: "var(--color-brand)",
      external: false,
    },
    {
      icon: FacebookIcon,
      label: "فيسبوك",
      value: "Double.Click",
      href: CONTACT.facebook,
      color: "#1877F2",
      external: true,
    },
    {
      icon: TikTokIcon,
      label: "تيك توك",
      value: "@double_click0",
      href: CONTACT.tiktok,
      color: "#0f172a",
      external: true,
    },
  ];

  return (
    <div className="dc-container py-8 flex-1">
      <Link href="/" className="back-link">
        ‹ رجوع للرئيسية
      </Link>

      <div className="mt-4 mb-6">
        <h1 className="text-2xl sm:text-[26px] font-extrabold text-[var(--color-ink)]">
          تواصل معانا
        </h1>
        <p className="text-sm text-[var(--color-muted)] mt-1">
          عندك سؤال أو استفسار عن منتج؟ فريقنا جاهز يساعدك على طول.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-5 items-start">
        {/* طرق التواصل */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-2xl p-5 sm:p-6">
          <div className="font-extrabold text-[var(--color-ink)] mb-4">
            طرق التواصل
          </div>
          <div className="space-y-3">
            {channels.map((c) => {
              const I = c.icon as typeof Phone;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 p-3 rounded-xl border border-[var(--color-line)] hover:border-[var(--color-brand)] hover:bg-[var(--color-canvas)] transition-colors"
                >
                  <div
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${c.color}15` }}
                  >
                    <I size={20} color={c.color} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[13px] text-[var(--color-muted)]">
                      {c.label}
                    </div>
                    <div className="text-sm font-bold text-[var(--color-ink)]" dir="ltr">
                      {c.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2.5 mt-5 pt-5 border-t border-[var(--color-line)] text-[13px] text-[var(--color-muted)]">
            <MapPin size={16} color="var(--color-brand)" className="shrink-0" />
            الإسكندرية، مصر — خدمة التوصيل لكل المحافظات
          </div>
        </div>

        {/* فورم الرسالة */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-2xl p-5 sm:p-6">
          <div className="font-extrabold text-[var(--color-ink)] mb-1">
            ابعتلنا رسالة
          </div>
          <div className="text-[13px] text-[var(--color-muted)] mb-5">
            اكتب رسالتك وهتتبعت مباشرة على واتساب
          </div>

          {sent ? (
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg p-5 text-center dc-fade-in">
              <div className="text-[#25D366] font-extrabold text-lg mb-1">
                ✓ تم فتح واتساب برسالتك
              </div>
              <div className="text-sm text-[var(--color-muted)]">
                لو الرسالة ما اتبعتتش، ابعتها زي ما هي من واتساب
              </div>
              <button
                onClick={() => setSent(false)}
                className="mt-4 text-[var(--color-brand)] font-bold text-sm hover:underline"
              >
                ابعت رسالة تانية
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[13px] font-semibold block mb-1.5 text-[var(--color-ink)]">
                  الاسم
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="اسمك الكريم"
                  className="w-full border border-[var(--color-line)] rounded-lg px-3 py-3 text-sm outline-none focus:border-[var(--color-brand)] transition-colors"
                />
              </div>
              <div>
                <label className="text-[13px] font-semibold block mb-1.5 text-[var(--color-ink)]">
                  الرسالة
                </label>
                <textarea
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="اكتب استفسارك هنا..."
                  required
                  rows={5}
                  className="w-full border border-[var(--color-line)] rounded-lg px-3 py-3 text-sm outline-none focus:border-[var(--color-brand)] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#25D366] text-white hover:bg-[#1fb855] border-none rounded-lg py-3 font-extrabold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={17} />
                ابعت على واتساب
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
