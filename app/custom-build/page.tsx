"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function CustomBuildPage() {
  const [usage, setUsage] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `🖥️ *طلب بيلد مخصص — Double Click*\n\n` +
      `📌 الاستخدام: ${usage}\n` +
      `📱 رقم الموبايل: ${phone}\n\n` +
      `محدّثك بالمواصفات المناسبة 🙏`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="dc-container py-10 flex-1">
      <Link href="/" className="back-link">
        ‹ رجوع للرئيسية
      </Link>

      <div className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-2xl p-7 mt-5 max-w-2xl mx-auto">
        <h1 className="text-[22px] font-extrabold text-[var(--color-ink)] mb-1.5">
          اطلب بيلد مخصص
        </h1>
        <p className="text-[13px] text-[var(--color-muted)] mb-6">
          قولنا احتياجك (جيمنج، مونتاج، برمجة...) وميزانيتك، وهنجهزلك مواصفات ونتواصل معاك عبر واتساب
        </p>

        {submitted ? (
          <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg p-5 text-center dc-fade-in">
            <div className="text-[#25D366] font-extrabold text-lg mb-1">
              ✓ تم فتح واتساب برسالة طلبك
            </div>
            <div className="text-sm text-[var(--color-muted)]">
              لو الرسالة ما اتبعتتش، ابعتل على الرسالة زي ما هي
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-[var(--color-brand)] font-bold text-sm hover:underline"
            >
              إرسال طلب تاني
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[13px] font-semibold block mb-1.5 text-[var(--color-ink)]">
                الاستخدام المطلوب
              </label>
              <input
                type="text"
                value={usage}
                onChange={(e) => setUsage(e.target.value)}
                placeholder="مثال: جيمنج بميزانية ٣٠ ألف"
                required
                className="w-full border border-[var(--color-line)] rounded-lg px-3 py-3 text-sm outline-none focus:border-[var(--color-brand)] transition-colors"
              />
            </div>

            <div>
              <label className="text-[13px] font-semibold block mb-1.5 text-[var(--color-ink)]">
                رقم الموبايل
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="01xxxxxxxxx"
                required
                className="w-full border border-[var(--color-line)] rounded-lg px-3 py-3 text-sm outline-none focus:border-[var(--color-brand)] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#25D366] text-white hover:bg-[#1fb855] border-none rounded-lg py-3 font-extrabold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle size={18} />
              ابعت الطلب على واتساب
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
