import Link from "next/link";
import { Truck, Clock, Wallet, MapPin, PackageCheck } from "lucide-react";

/**
 * صفحة الشحن والتوصيل
 * سياسة الشحن بشكل واضح ومنظّم بنفس تصميم الموقع.
 */
export default function ShippingPage() {
  const highlights = [
    {
      icon: Clock,
      title: "مدة التوصيل",
      desc: "الإسكندرية: 1-2 يوم · باقي المحافظات: 2-4 أيام عمل",
    },
    {
      icon: Wallet,
      title: "الدفع عند الاستلام",
      desc: "ادفع كاش للمندوب بعد ما تستلم طلبك وتتأكد منه",
    },
    {
      icon: PackageCheck,
      title: "تتبّع وشحن آمن",
      desc: "شحنتك بتتبعت مع شركات شحن موثوقة ومعاها رقم تتبع",
    },
  ];

  const zones = [
    { zone: "داخل الإسكندرية", time: "1 - 2 يوم", fee: "مجاني*" },
    { zone: "القاهرة الكبرى", time: "2 - 3 أيام", fee: "حسب المنطقة" },
    { zone: "الدلتا والوجه البحري", time: "2 - 4 أيام", fee: "حسب المنطقة" },
    { zone: "الصعيد والوجه القبلي", time: "3 - 5 أيام", fee: "حسب المنطقة" },
  ];

  return (
    <div className="dc-container py-8 flex-1">
      <Link href="/" className="back-link">
        ‹ رجوع للرئيسية
      </Link>

      <div className="mt-4 mb-6">
        <h1 className="text-2xl sm:text-[26px] font-extrabold text-[var(--color-ink)]">
          الشحن والتوصيل
        </h1>
        <p className="text-sm text-[var(--color-muted)] mt-1">
          بنوصّل لكل محافظات مصر — تعرّف على مدة التوصيل والرسوم.
        </p>
      </div>

      {/* مميزات */}
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        {highlights.map((h) => {
          const I = h.icon;
          return (
            <div
              key={h.title}
              className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-2xl p-5"
            >
              <div className="w-11 h-11 rounded-[10px] bg-[var(--color-canvas)] flex items-center justify-center mb-3">
                <I size={21} color="var(--color-brand)" />
              </div>
              <div className="font-bold text-sm text-[var(--color-ink)] mb-1">
                {h.title}
              </div>
              <div className="text-[13px] text-[var(--color-muted)] leading-6">
                {h.desc}
              </div>
            </div>
          );
        })}
      </div>

      {/* جدول المناطق */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-2xl p-5 sm:p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <MapPin size={18} color="var(--color-brand)" />
          <h2 className="font-extrabold text-[var(--color-ink)]">
            مناطق التوصيل والمدة
          </h2>
        </div>
        <div className="overflow-hidden rounded-xl border border-[var(--color-line)]">
          {zones.map((z, i) => (
            <div
              key={z.zone}
              className={`grid grid-cols-3 gap-2 px-4 py-3.5 text-[13px] ${
                i % 2 === 0 ? "bg-[var(--color-canvas)]/50" : ""
              }`}
            >
              <div className="font-semibold text-[var(--color-ink)]">
                {z.zone}
              </div>
              <div className="text-[var(--color-muted)]">{z.time}</div>
              <div className="text-[var(--color-brand)] font-bold">{z.fee}</div>
            </div>
          ))}
        </div>
        <p className="text-[12px] text-[var(--color-muted)] mt-3 leading-6">
          * الشحن مجاني داخل الإسكندرية على الطلبات اللي فوق مبلغ معيّن. بتشوف
          رسوم الشحن النهائية قبل ما تؤكد طلبك.
        </p>
      </div>

      {/* خطوات */}
      <div className="bg-[var(--color-brand-deep)] rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4 text-white">
          <Truck size={18} />
          <h2 className="font-extrabold">إزاي بيوصل طلبك؟</h2>
        </div>
        <div className="grid sm:grid-cols-4 gap-4">
          {[
            ["تأكيد الطلب", "نتواصل معاك لتأكيد الطلب والتفاصيل"],
            ["تجهيز", "بنجهّز طلبك ونتأكد من كل قطعة"],
            ["شحن", "نسلّمه لشركة الشحن برقم تتبع"],
            ["استلام", "تستلم طلبك وتدفع عند الاستلام"],
          ].map(([step, desc], i) => (
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
    </div>
  );
}
