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
  Truck,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import Image from "next/image";
import { categories } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { toArabicNumber } from "@/lib/data";

/**
 * النافبار الموحّد (Shared Navbar) — تصميم احترافي عصري
 * شريط علوي للإعلان + هيدر زجاجي عائم + شريط فئات.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [catsOpen, setCatsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalCount } = useCart();
  const pathname = usePathname();
  const catsRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => pathname === href;

  // كشف التمرير لإضافة تأثير الهيدر
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
      {/* الشريط العلوي — إعلان + مميزات */}
      <div className="hidden md:block bg-[var(--color-brand-deep)] text-white/90 text-xs">
        <div className="dc-container flex items-center justify-between h-9">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Truck size={13} className="text-[var(--color-accent)]" />
              توصيل مجاني للطلبات فوق 2000 ج.م
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-[var(--color-accent)]" />
              ضمان أصلي على كل المنتجات
            </span>
            <span className="flex items-center gap-1.5">
              <Headphones size={13} className="text-[var(--color-accent)]" />
              دعم فني 24/7
            </span>
          </div>
          <div className="flex items-center gap-4 opacity-80">
            <Link
              href="/track-order"
              className="hover:text-white transition-colors"
            >
              تتبع طلبك
            </Link>
            <span className="w-px h-3 bg-white/20" />
            <a
              href="tel:+20 10 61013177"
              dir="ltr"
              className="hover:text-white transition-colors"
            >
              +20 10 61013177
            </a>
          </div>
        </div>
      </div>

      {/* الهيدر الرئيسي — زجاجي عائم */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "dc-glass shadow-[0_8px_30px_rgba(20,8,10,0.08)]"
            : "bg-white"
        }`}
      >
        <div className="dc-container flex items-center gap-3 sm:gap-5 py-3.5">
          {/* زر القائمة للموبايل */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`${searchOpen ? "hidden" : ""} md:hidden text-[var(--color-ink)] p-1.5 rounded-lg transition-colors hover:bg-[var(--color-canvas)] focus:outline-none`}
            aria-label="فتح القائمة"
          >
            <Menu size={22} />
          </button>

          {searchOpen && (
            <button
              onClick={() => setSearchOpen(false)}
              className="md:hidden text-[var(--color-ink)] p-1.5 rounded-lg transition-colors hover:bg-[var(--color-canvas)] focus:outline-none"
              aria-label="إغلاق البحث"
            >
              <X size={22} />
            </button>
          )}

          {/* اللوجو */}
          <Link
            href="/"
            className={`${searchOpen ? "hidden" : "flex"} md:flex items-center gap-2.5 shrink-0 focus:outline-none group`}
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-dark)] flex items-center justify-center shadow-[0_6px_16px_-4px_rgba(225,29,42,0.5)] transition-transform group-hover:scale-105">
              <Image
                src="/logo.jpeg"
                alt="Double Click"
                width={32}
                height={32}
                className="rounded-md object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-[17px] sm:text-lg tracking-tight text-[var(--color-ink)]">
                Double Click
              </span>
              <span className="text-[10px] text-[var(--color-muted)] hidden sm:block -mt-0.5">
                مستلزمات الكمبيوتر
              </span>
            </div>
          </Link>

          {/* الموقع */}
          <div
            className={`${searchOpen ? "hidden" : "hidden lg:flex"} items-center gap-1.5 text-xs pr-4 mr-1 leading-tight border-r border-[var(--color-line)]`}
          >
            <MapPin size={15} className="text-[var(--color-brand)]" />
            <div>
              <div className="text-[var(--color-muted)]">التوصيل لـ</div>
              <div className="font-bold text-[var(--color-ink)]">
                الإسكندرية
              </div>
            </div>
          </div>

          {/* البحث */}
          <div
            className={`${searchOpen ? "flex" : "hidden"} md:flex flex-1 bg-[var(--color-canvas)] rounded-2xl overflow-hidden min-w-0 ring-1 ring-[var(--color-line)] focus-within:ring-2 focus-within:ring-[var(--color-brand)] transition-all`}
          >
            <select
              className="hidden sm:block bg-transparent px-3 text-[13px] text-[var(--color-muted)] outline-none border-l border-[var(--color-line)] cursor-pointer"
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
              className="flex-1 min-w-0 border-none bg-transparent px-3.5 py-3 text-sm outline-none text-[var(--color-ink)] placeholder:text-[var(--color-muted)]"
            />
            <button
              className="dc-btn-primary px-5 flex items-center justify-center rounded-none"
              aria-label="بحث"
            >
              <Search size={18} color="#fff" />
            </button>
          </div>

          {!searchOpen && (
            <button
              onClick={() => setSearchOpen(true)}
              className="md:hidden text-[var(--color-ink)] p-1.5 rounded-lg transition-colors hover:bg-[var(--color-canvas)] focus:outline-none mr-auto"
              aria-label="فتح البحث"
            >
              <Search size={22} />
            </button>
          )}

          {/* حسابي */}
          <Link
            href="/account"
            className={`${searchOpen ? "hidden" : "hidden md:flex"} items-center gap-2 text-xs leading-tight px-3 py-1.5 rounded-xl transition-colors border border-[var(--color-line)] ${
              isActive("/account")
                ? "bg-[var(--color-brand)] text-white border-transparent"
                : "hover:bg-[var(--color-canvas)] text-[var(--color-ink)]"
            }`}
          >
            <div>
              <div className="text-[var(--color-muted)] text-[10px]">
                مرحبًا
              </div>
              <div className="font-bold">حسابي</div>
            </div>
          </Link>

          {/* السلة */}
          <Link
            href="/cart"
            className={`${searchOpen ? "hidden md:flex" : ""} relative p-2.5 rounded-xl transition-all ${
              isActive("/cart")
                ? "bg-[var(--color-brand)] text-white"
                : "bg-[var(--color-canvas)] hover:bg-[var(--color-line)] text-[var(--color-ink)]"
            }`}
            aria-label="السلة"
          >
            <ShoppingCart size={22} />
            {totalCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[var(--color-accent)] text-white text-[10px] font-black rounded-full w-[20px] h-[20px] flex items-center justify-center shadow-[0_4px_10px_rgba(255,45,63,0.5)] dc-fade-in dc-pulse-glow">
                {toArabicNumber(totalCount)}
              </span>
            )}
          </Link>
        </div>

        {/* شريط الفئات */}
        <div className="border-t border-[var(--color-line)] bg-white/50">
          <div className="dc-container flex gap-6 items-center text-[13px] whitespace-nowrap overflow-x-auto no-scrollbar py-2.5 relative">
            <div ref={catsRef} className="relative shrink-0">
              <button
                onClick={() => setCatsOpen((v) => !v)}
                className="flex items-center gap-1.5 font-bold shrink-0 py-1 text-[var(--color-ink)] hover:text-[var(--color-brand)] transition-colors focus:outline-none"
                aria-expanded={catsOpen}
              >
                <Menu size={14} />
                كل الفئات
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${catsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {catsOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-[var(--shadow-float)] ring-1 ring-[var(--color-line)] py-2.5 z-50 dc-fade-in">
                  {categories.map((c) => {
                    const Icon = c.icon;
                    return (
                      <Link
                        key={c.slug}
                        href={`/category/${encodeURIComponent(c.slug)}`}
                        onClick={() => setCatsOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-[var(--color-ink)] hover:bg-[var(--color-canvas)] hover:text-[var(--color-brand)] transition-colors group"
                      >
                        <span className="w-8 h-8 rounded-lg bg-[var(--color-canvas)] flex items-center justify-center group-hover:bg-[var(--color-brand)] group-hover:text-white transition-colors">
                          <Icon size={16} />
                        </span>
                        <span className="text-sm font-medium">{c.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <span className="w-px h-4 bg-[var(--color-line)] shrink-0" />

            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${encodeURIComponent(c.slug)}`}
                className={`shrink-0 transition-colors pb-0.5 border-b-2 ${
                  isActive(`/category/${c.slug}`)
                    ? "text-[var(--color-brand)] border-[var(--color-brand)] font-bold"
                    : "text-[var(--color-ink)]/70 border-transparent hover:text-[var(--color-brand)] hover:border-[var(--color-brand)]/40"
                }`}
              >
                {c.name}
              </Link>
            ))}
            <Link
              href="/deals"
              className="text-[var(--color-accent)] font-bold shrink-0 hover:underline mr-auto flex items-center gap-1 dc-text-glow"
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
          className="fixed inset-0 bg-black/50 z-[60] dc-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-0 right-0 bottom-0 w-[320px] max-w-[88vw] bg-white p-6 shadow-2xl dc-slide-in overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-dark)] flex items-center justify-center">
                  <Image
                    src="/logo.jpeg"
                    alt=""
                    width={26}
                    height={26}
                    className="rounded object-contain"
                  />
                </div>
                <span className="font-extrabold text-base text-[var(--color-ink)]">
                  القائمة
                </span>
              </div>
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
              className="flex items-center gap-3 py-3.5 border-b border-[var(--color-line)] text-[var(--color-ink)] font-bold"
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
                  className="flex items-center gap-3 py-3.5 border-b border-[var(--color-line)] text-[var(--color-ink)] hover:text-[var(--color-brand)] transition-colors"
                >
                  <Icon size={18} color="var(--color-brand)" />
                  <span className="text-sm font-medium">{c.name}</span>
                </Link>
              );
            })}
            <Link
              href="/custom-build"
              onClick={() => setMenuOpen(false)}
              className="block mt-5 text-center dc-btn-primary font-bold py-3.5 rounded-xl"
            >
              اطلب بيلد مخصص
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
