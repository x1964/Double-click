"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  ShoppingCart,
  MapPin,
  Menu,
  ChevronDown,
  X,
} from "lucide-react";
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
  const [catsOpen, setCatsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { totalCount } = useCart();
  const pathname = usePathname();
  const catsRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => pathname === href;

  // قفل السكرول لما القائمة الجانبية تفتح
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // قفل قائمة "كل الفئات" لما تدوس بره منها
  useEffect(() => {
    if (!catsOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (catsRef.current && !catsRef.current.contains(e.target as Node)) {
        setCatsOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCatsOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [catsOpen]);

  return (
    <>
      {/* الهيدر الرئيسي */}
      <header className="bg-[var(--color-brand)] text-white sticky top-0 z-50 shadow-lg">
        <div className="dc-container flex items-center gap-3 sm:gap-4 py-3">
          {/* زر القائمة للموبايل */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`${searchOpen ? "hidden" : ""} md:hidden text-white p-1.5 rounded-lg transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60`}
            aria-label="فتح القائمة"
          >
            <Menu size={22} />
          </button>

          {/* زرار إغلاق البحث (موبايل فقط، لما البحث يكون مفتوح) */}
          {searchOpen && (
            <button
              onClick={() => setSearchOpen(false)}
              className="md:hidden text-white p-1.5 rounded-lg transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label="إغلاق البحث"
            >
              <X size={22} />
            </button>
          )}

          {/* اللوجو */}
          <Link
            href="/"
            className={`${searchOpen ? "hidden" : "flex"} md:flex items-center gap-2 shrink-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/60`}
          >
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center p-1 shadow-sm">
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
              <span className="text-[10px] opacity-70 hidden sm:block">
                مستلزمات الكمبيوتر
              </span>
            </div>
          </Link>

          {/* الموقع */}
          <div
            className={`${
              searchOpen ? "hidden" : "hidden lg:flex"
            } items-center gap-1.5 text-xs border-r border-white/30 pr-3.5 mr-1 leading-tight`}
          >
            <MapPin size={16} className="opacity-90" />
            <div>
              <div className="opacity-85">التوصيل لـ</div>
              <div className="font-bold">الإسكندرية</div>
            </div>
          </div>

          {/* البحث — مربع كامل على الكمبيوتر دايمًا، وعلى الموبايل بيتفتح لما تدوس على الأيقونة */}
          <div
            className={`${
              searchOpen ? "flex" : "hidden"
            } md:flex flex-1 bg-white rounded-xl overflow-hidden min-w-0 shadow-sm ring-1 ring-black/5 focus-within:ring-2 focus-within:ring-[var(--color-accent)] transition-shadow`}
          >
            <select
              className="hidden sm:block bg-[var(--color-canvas)] px-2.5 text-[13px] text-[var(--color-muted)] outline-none border-l border-[var(--color-line)] cursor-pointer"
              defaultValue="all"
            >
              <option value="all">كل الفئات</option>
              {categories.map((c) => (
                <option key={c.slug}>{c.name}</option>
              ))}
            </select>
            <input
              autoFocus={searchOpen}
              placeholder="دور على منتج، ماركة، أو فئة..."
              className="flex-1 min-w-0 border-none px-3 py-2.5 text-sm outline-none text-[var(--color-ink)] placeholder:text-[var(--color-muted)]"
            />
            <button
              className="bg-[var(--color-accent)] px-4 flex items-center justify-center hover:bg-[var(--color-accent-hover)] active:scale-95 transition-all"
              aria-label="بحث"
            >
              <Search size={18} color="#fff" />
            </button>
          </div>

          {/* أيقونة البحث (موبايل فقط، لما البحث يكون مقفول) */}
          {!searchOpen && (
            <button
              onClick={() => setSearchOpen(true)}
              className="md:hidden text-white p-1.5 rounded-lg transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60 mr-auto"
              aria-label="فتح البحث"
            >
              <Search size={22} />
            </button>
          )}

          {/* حسابي */}
          <Link
            href="/account"
            className={`${searchOpen ? "hidden" : "hidden md:block"} text-xs leading-tight px-2.5 py-1.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/60 ${
              isActive("/account") ? "bg-white/15" : "hover:bg-white/10"
            }`}
          >
            <div className="opacity-85">مرحبًا، سجل دخول</div>
            <div className="font-bold">حسابي</div>
          </Link>

          {/* السلة */}
          <Link
            href="/cart"
            className={`${searchOpen ? "hidden md:block" : ""} relative p-1.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/60 ${
              isActive("/cart") ? "bg-white/15" : "hover:bg-white/10"
            }`}
            aria-label="السلة"
          >
            <ShoppingCart size={24} />
            {totalCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[var(--color-accent)] text-white text-[10px] font-black rounded-full w-[18px] h-[18px] flex items-center justify-center shadow-sm dc-fade-in">
                {toArabicNumber(totalCount)}
              </span>
            )}
          </Link>
        </div>

        {/* شريط الفئات */}
        <div className="bg-[var(--color-brand-dark)]">
          <div className="dc-container flex gap-5 items-center text-[13px] whitespace-nowrap overflow-x-auto no-scrollbar py-2 relative">
            <div ref={catsRef} className="relative shrink-0">
              <button
                onClick={() => setCatsOpen((v) => !v)}
                className="flex items-center gap-1 font-bold shrink-0 py-1 hover:text-[var(--color-accent)] transition-colors focus:outline-none"
                aria-expanded={catsOpen}
              >
                كل الفئات
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${catsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {catsOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl ring-1 ring-black/5 py-2 z-50 dc-fade-in">
                  {categories.map((c) => {
                    const Icon = c.icon;
                    return (
                      <Link
                        key={c.slug}
                        href={`/category/${encodeURIComponent(c.slug)}`}
                        onClick={() => setCatsOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-[var(--color-ink)] hover:bg-[var(--color-canvas)] transition-colors"
                      >
                        <Icon size={16} color="var(--color-brand)" />
                        <span>{c.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <span className="w-px h-4 bg-white/20 shrink-0" />

            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${encodeURIComponent(c.slug)}`}
                className={`shrink-0 transition-colors pb-0.5 border-b-2 ${
                  isActive(`/category/${c.slug}`)
                    ? "text-white border-[var(--color-accent)]"
                    : "text-white/85 border-transparent hover:text-white hover:border-white/40"
                }`}
              >
                {c.name}
              </Link>
            ))}
            <Link
              href="/deals"
              className="text-[var(--color-accent)] font-bold shrink-0 hover:text-white transition-colors mr-auto flex items-center gap-1"
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
            className="absolute top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-white p-5 shadow-2xl dc-slide-in overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-5">
              <span className="font-extrabold text-base text-[var(--color-ink)]">
                القائمة
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-1.5 rounded-lg hover:bg-[var(--color-canvas)] transition-colors"
                aria-label="إغلاق"
              >
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
                  className="flex items-center gap-3 py-3 border-b border-[var(--color-line)] text-[var(--color-ink)] hover:text-[var(--color-brand)] transition-colors"
                >
                  <Icon size={18} color="var(--color-brand)" />
                  <span className="text-sm">{c.name}</span>
                </Link>
              );
            })}
            <Link
              href="/custom-build"
              onClick={() => setMenuOpen(false)}
              className="block mt-4 text-center bg-[var(--color-brand)] text-white font-bold py-3 rounded-lg hover:bg-[var(--color-brand-dark)] transition-colors"
            >
              اطلب بيلد مخصص
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
