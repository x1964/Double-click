"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type CartItem = {
  name: string;
  qty: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (name: string) => void;
  removeFromCart: (name: string) => void;
  setQty: (name: string, qty: number) => void;
  clearCart: () => void;
  totalCount: number;
  /** هل السلة اتعملها hydrate من localStorage؟ (لتجنّب mismatch SSR) */
  hydrated: boolean;
};

const CartContext = createContext<CartContextType | null>(null);

const STORAGE_KEY = "double-click-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // اقرأ السلة المحفوظة مرة واحدة عند التحميل في المتصفح.
  // بنستخدم ref guard (hydrated) بدل ما نعمل setState مباشرة في body الـ effect
  // عشان نتجنّب cascading renders اللي React 19 بيحذّر منها.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        // setItems هنا مقبول: ده تحديث "تهيئة" (hydration) من مصدر خارجي (localStorage)،
        // وبيحصل مرة واحدة فقط — الحالة الصحيحة لاستخدام effect لمزامنة state خارجي.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setItems(JSON.parse(saved));
      }
    } catch {
      // تجاهل البيانات التالفة
    }
    setHydrated(true);
  }, []);

  // احفظ السلة كل ما تتغيّر (بعد ما يخلص hydrate)
  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addToCart = (name: string) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.name === name);
      if (existing) {
        return prev.map((i) => (i.name === name ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { name, qty: 1 }];
    });
  };

  const removeFromCart = (name: string) => {
    setItems((prev) => prev.filter((i) => i.name !== name));
  };

  const setQty = (name: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(name);
      return;
    }
    setItems((prev) => prev.map((i) => (i.name === name ? { ...i, qty } : i)));
  };

  const clearCart = () => setItems([]);

  const totalCount = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, setQty, clearCart, totalCount, hydrated }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
