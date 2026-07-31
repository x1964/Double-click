import Link from "next/link";

export default function AccountPage() {
  return (
    <div className="dc-container py-10 flex-1">
      <Link href="/" className="back-link">
        ‹ رجوع للرئيسية
      </Link>

      <div className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-2xl p-7 mt-5 max-w-md mx-auto">
        <h1 className="text-[22px] font-extrabold text-[var(--color-ink)] mb-1.5">
          تسجيل الدخول لحسابي
        </h1>
        <p className="text-[13px] text-[var(--color-muted)] mb-6">
          سجّل دخولك لمتابعة طلباتك وقائمة المفضلة
        </p>

        <form action="#" method="post" className="space-y-4">
          <div>
            <label className="text-[13px] font-semibold block mb-1.5 text-[var(--color-ink)]">
              رقم الموبايل أو الإيميل
            </label>
            <input
              type="text"
              placeholder="01xxxxxxxxx"
              className="w-full border border-[var(--color-line)] rounded-lg px-3 py-3 text-sm outline-none focus:border-[var(--color-brand)] transition-colors"
            />
          </div>

          <div>
            <label className="text-[13px] font-semibold block mb-1.5 text-[var(--color-ink)]">
              كلمة المرور
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-[var(--color-line)] rounded-lg px-3 py-3 text-sm outline-none focus:border-[var(--color-brand)] transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] border-none rounded-lg py-3 font-extrabold text-sm transition-colors"
          >
            دخول
          </button>
        </form>

        <div className="text-center text-[13px] text-[var(--color-muted)] mt-4">
          لسه معملتش حساب؟{" "}
          <a href="#" className="text-[var(--color-brand)] font-bold">
            سجّل دلوقتي
          </a>
        </div>
      </div>
    </div>
  );
}
