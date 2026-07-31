"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { products, parseArabicPrice, toArabicNumber, placeholderImage } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { WHATSAPP_NUMBER, buildWhatsAppOrderMessage } from "@/lib/constants";

export default function CartPage() {
  const { items, setQty, removeFromCart, clearCart } = useCart();

  const rows = items
    .map((item) => {
      const product = products.find((p) => p.name === item.name);
      if (!product) return null;
      return { ...product, qty: item.qty };
    })
    .filter(Boolean) as (typeof products[number] & { qty: number })[];

  const total = rows.reduce((sum, r) => sum + parseArabicPrice(r.price) * r.qty, 0);

  const handleCheckout = () => {
    const message = buildWhatsAppOrderMessage(
      rows.map((r) => ({ name: r.name, qty: r.qty, price: r.price })),
      total
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="dc-container py-8 flex-1">
      <Link href="/" className="back-link">
        ‹ رجوع للرئيسية
      </Link>

      <div className="flex justify-between items-center mt-5 mb-5">
        <h1 className="text-2xl font-extrabold text-[var(--color-ink)]">
          سلة المشتريات
        </h1>
        {rows.length > 0 && (
          <button
            onClick={clearCart}
            className="text-[var(--color-muted)] text-[13px] hover:text-[var(--color-brand)] transition-colors"
          >
            إفراغ السلة
          </button>
        )}
      </div>

      {rows.length === 0 ? (
        <div className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-2xl p-10 text-center max-w-md mx-auto">
          <ShoppingCart
            size={40}
            color="var(--color-brand)"
            strokeWidth={1.3}
            className="mx-auto mb-3.5"
          />
          <div className="font-bold mb-1.5 text-[var(--color-ink)]">
            السلة فاضية دلوقتي
          </div>
          <div className="text-[13px] text-[var(--color-muted)] mb-5">
            لسه معضتش أي منتج للسلة
          </div>
          <Link
            href="/"
            className="inline-block bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] rounded-lg px-6 py-3 font-extrabold text-sm transition-colors"
          >
            تصفّح المنتجات
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-[1fr_320px] gap-5 items-start">
          {/* قائمة المنتجات */}
          <div className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-2xl overflow-hidden">
            {rows.map((r) => (
              <div
                key={r.id}
                className="flex items-center gap-3.5 p-4 border-b border-[var(--color-line)] last:border-0"
              >
                <Link
                  href={`/product/${encodeURIComponent(r.name)}`}
                  className="w-[60px] h-[60px] rounded-[10px] overflow-hidden shrink-0 relative"
                >
                  <Image
                    src={placeholderImage(r.name, 120, 120)}
                    alt={r.name}
                    fill
                    sizes="60px"
                    className="object-cover"
                  />
                </Link>

                <div className="flex-1 min-w-0">
                  <Link
                    href={`/product/${encodeURIComponent(r.name)}`}
                    className="text-sm font-semibold text-[var(--color-ink)] block mb-1 hover:text-[var(--color-brand)] transition-colors line-clamp-2"
                  >
                    {r.name}
                  </Link>
                  <div className="text-sm font-bold text-[var(--color-brand)]">
                    {r.price} <span className="text-[11px] font-normal">ج.م</span>
                  </div>
                </div>

                {/* عدّاد الكمية */}
                <div className="flex items-center gap-2 border border-[var(--color-line)] rounded-full px-2 py-1">
                  <button
                    onClick={() => setQty(r.name, r.qty - 1)}
                    className="text-[var(--color-ink)] hover:text-[var(--color-brand)]"
                    aria-label="تقليل"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-[13px] font-bold min-w-[16px] text-center">
                    {toArabicNumber(r.qty)}
                  </span>
                  <button
                    onClick={() => setQty(r.name, r.qty + 1)}
                    className="text-[var(--color-ink)] hover:text-[var(--color-brand)]"
                    aria-label="زيادة"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(r.name)}
                  className="text-[var(--color-muted)] hover:text-[var(--color-brand)]"
                  aria-label="حذف"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* ملخص الطلب */}
          <div className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-2xl p-5 lg:sticky lg:top-24">
            <div className="font-extrabold text-[var(--color-ink)] mb-4">
              ملخص الطلب
            </div>
            <div className="flex justify-between text-sm text-[var(--color-muted)] mb-2">
              <span>الإجمالي الفرعي</span>
              <span>
                {toArabicNumber(total)} <span className="text-xs">ج.م</span>
              </span>
            </div>
            <div className="flex justify-between text-sm text-[var(--color-muted)] mb-2">
              <span>الشحن</span>
              <span className="text-[var(--color-brand)] font-semibold">مجاني</span>
            </div>
            <div className="border-t border-[var(--color-line)] my-3" />
            <div className="flex justify-between items-baseline mb-5">
              <span className="font-bold text-[var(--color-ink)]">الإجمالي</span>
              <span className="text-[22px] font-extrabold text-[var(--color-ink)]">
                {toArabicNumber(total)} <span className="text-[13px] font-normal">ج.م</span>
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-[#25D366] text-white hover:bg-[#1fb855] border-none rounded-lg py-3.5 font-extrabold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle size={18} />
              أكمل الطلب عبر واتساب
            </button>
            <p className="text-center text-xs text-[var(--color-muted)] mt-3">
              هيتم فتح واتساب برسالة فيها تفاصيل طلبك — دفع عند الاستلام متاح
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
