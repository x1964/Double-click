"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, MapPin, Menu, ChevronDown, X } from "lucide-react";
import Image from "next/image";
import { categories } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { toArabicNumber } from "@/lib/data";

/**
 * النافبار الموحّد (Shared Navbar)
 * بيظهر في كل الصفحات عن طريق layout.tsx.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalCount } = useCart();
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* شريط علوي ترويجي */}
      <div className="bg-[var(--color-brand-deep)] text-white text-center text-xs py-1.5 px-2.5">
        توصيل مجاني لأي طلب فوق ١٥٠٠ ج.م · دفع عند الاستلام متاح في كل مصر
      </div>

      {/* الهيدر الرئيسي */}
      <header className="bg-[var(--color-brand)] text-white sticky top-0 z-50 shadow-lg">
        <div className="dc-container flex items-center gap-3 sm:gap-4 py-3">
          {/* زر القائمة للموبايل */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white p-1"
            aria-label="القائمة"
          >
            <Menu size={22} />
          </button>

          {/* اللوجو */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center p-1">
              <Image
                src="/logo.jpeg"
                alt="Double Click"
                width={36}
                height={36}
                className="rounded-md object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-base sm:text-lg tracking-tight">
                Double Click
              </span>
              <span className="text-[10px] opacity-70 hidden sm:block">مستلزمات الكمبيوتر</span>
            </div>
          </Link>

          {/* الموقع */}
          <div className="hidden lg:flex items-center gap-1.5 text-xs border-r border-white/30 pr-3.5 mr-1 leading-tight">
            <MapPin size={16} />
            <div>
              <div className="opacity-85">التوصيل لـ</div>
              <div className="font-bold">الإسكندرية</div>
            </div>
          </div>

          {/* البحث */}
          <div className="flex-1 flex bg-white rounded-xl overflow-hidden min-w-0 shadow-sm">
            <select
              className="hidden sm:block bg-[var(--color-canvas)] px-2.5 text-[13px] text-[var(--color-muted)] outline-none border-l border-[var(--color-line)]"
              defaultValue="all"
            >
              <option value="all">كل الفئات</option>
              {categories.map((c) => (
                <option key={c.slug}>{c.name}</option>
              ))}
            </select>
            <input
              placeholder="دور على منتج، ماركة، أو فئة..."
              className="flex-1 min-w-0 border-none px-3 py-2.5 text-sm outline-none text-[var(--color-ink)]"
            />
            <button className="bg-[var(--color-accent)] px-4 flex items-center justify-center hover:bg-[var(--color-accent-hover)] transition-colors">
              <Search size={18} color="#fff" />
            </button>
          </div>

          {/* حسابي */}
          <Link
            href="/account"
            className={`hidden md:block text-xs leading-tight px-2 py-1 rounded-lg transition-colors ${
              isActive("/account") ? "bg-white/15" : "hover:bg-white/10"
            }`}
          >
            <div className="opacity-85">مرحبًا، سجل دخول</div>
            <div className="font-bold">حسابي</div>
          </Link>

          {/* السلة */}
          <Link
            href="/cart"
            className={`relative p-1.5 rounded-lg transition-colors ${
              isActive("/cart") ? "bg-white/15" : "hover:bg-white/10"
            }`}
            aria-label="السلة"
          >
            <ShoppingCart size={24} />
            {totalCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[var(--color-accent)] text-white text-[10px] font-black rounded-full w-[18px] h-[18px] flex items-center justify-center">
                {toArabicNumber(totalCount)}
              </span>
            )}
          </Link>
        </div>

        {/* شريط الفئات */}
        <div className="bg-[var(--color-brand-dark)]">
          <div className="dc-container flex gap-5 items-center text-[13px] whitespace-nowrap overflow-x-auto no-scrollbar py-2">
            <span className="flex items-center gap-1 font-bold shrink-0">
              كل الفئات <ChevronDown size={14} />
            </span>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${encodeURIComponent(c.slug)}`}
                className="text-white/90 hover:text-white shrink-0 transition-colors"
              >
                {c.name}
              </Link>
            ))}
            <Link
              href="/deals"
              className="text-[var(--color-accent)] font-bold shrink-0 hover:text-white transition-colors"
            >
              🔥 عروض اليوم
            </Link>
          </div>
        </div>
      </header>

      {/* القائمة الجانبية للموبايل */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-[60] dc-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-white p-5 shadow-xl"
          >
            <div className="flex justify-between items-center mb-5">
              <span className="font-extrabold text-base">القائمة</span>
              <button onClick={() => setMenuOpen(false)} aria-label="إغلاق">
                <X size={20} />
              </button>
            </div>
            <Link
              href="/account"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 py-3 border-b border-[var(--color-line)] text-[var(--color-ink)] font-bold"
            >
              حسابي
            </Link>
            {categories.map((c) => {
              const Icon = c.icon;
              return (
                <Link
                  key={c.slug}
                  href={`/category/${encodeURIComponent(c.slug)}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 py-3 border-b border-[var(--color-line)] text-[var(--color-ink)]"
                >
                  <Icon size={18} color="var(--color-brand)" />
                  <span className="text-sm">{c.name}</span>
                </Link>
              );
            })}
            <Link
              href="/custom-build"
              onClick={() => setMenuOpen(false)}
              className="block mt-4 text-center bg-[var(--color-brand)] text-white font-bold py-3 rounded-lg"
            >
              اطلب بيلد مخصص
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
