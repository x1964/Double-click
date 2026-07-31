/**
 * أنواع البيانات (Data Types)
 *
 * الـ types دي مرآة لشكل البيانات اللي هيجي من الباك إند (API).
 * لما تربط الباك، استبدل الـ mock data بـ fetch من الـ API بنفس الشكل ده.
 */

import type { LucideIcon } from "lucide-react";

/** فئة منتج (مثلاً: ماوس، كيبورد) */
export type Category = {
  /** الاسم المعروض */
  name: string;
  /** السلاج المستخدم في الرابط — لازم يكون مطابق لـ name دلوقتي عشان الـ routing */
  slug: string;
  icon: LucideIcon;
};

/**
 * منتج.
 * ملاحظة: الأيقونات مش مخزّنة هنا عمدًا — عشان المنتجات تقدر تتعملها serialize
 * وتتنتقل من Server Component لـ Client Component من غير مشاكل.
 * استخدم iconForCategory(category) لو احتجت أيقونة عرض.
 */
export type Product = {
  /** المعرّف الفريد — هنفضّل نستخدم id بدل name لما يجي الباك */
  id: string;
  name: string;
  /** السعر كنص بالأرقام العربية للعرض */
  price: string;
  /** السعر القديم (لو فيه عرض) */
  oldPrice?: string;
  /** نسبة الخصم (نص) */
  discount?: string;
  /** التقييم من ٥ */
  rating: number;
  /** عدد المراجعات */
  reviews: number;
  /** فئة المنتج (تطابق Category.name) */
  category: string;
  /** هل المنتج متوفر؟ */
  inStock?: boolean;
  /** وصف مختصر يظهر تحت السعر */
  badge?: string;
};
