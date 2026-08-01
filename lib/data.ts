/**
 * طبقة البيانات (Data Layer)
 *
 * دلوقتي دي بيانات تجريبية (mock) معرّفة في الكود.
 * لما تربط الباك إند، استبدل جسم الدوال بـ fetch لـ API بنفس الشكل.
 * مثال:
 *
 *   export async function getProducts(): Promise<Product[]> {
 *     const res = await fetch(`${process.env.API_URL}/products`, { next: { revalidate: 60 } });
 *     return res.json();
 *   }
 */

import { Mouse, Keyboard, Monitor, HardDrive, Headphones, Cpu, Laptop } from "lucide-react";
import type { Category, Product } from "./types";

/* --------------------------------------------------------------------------
 * الفئات
 * ------------------------------------------------------------------------ */

export const categories: Category[] = [
  { name: "ماوس", slug: "ماوس", icon: Mouse },
  { name: "كيبورد", slug: "كيبورد", icon: Keyboard },
  { name: "شاشات", slug: "شاشات", icon: Monitor },
  { name: "كيسات PC", slug: "كيسات PC", icon: HardDrive },
  { name: "سماعات", slug: "سماعات", icon: Headphones },
  { name: "معالجات", slug: "معالجات", icon: Cpu },
  { name: "لابتوبات", slug: "لابتوبات", icon: Laptop },
];

/* --------------------------------------------------------------------------
 * المنتجات
 * ملاحظة: مفيش أيقونات جوّه المنتجات عشان تقدر تتعملها serialize وتنتقل
 * بين Server و Client components من غير أخطاء.
 * ------------------------------------------------------------------------ */

export const products: Product[] = [
  // عروض
  {
    id: "mouse-vertex-x3",
    name: "ماوس ألعاب Vertex X3 وايرلس",
    price: "٩٥٠",
    oldPrice: "١,٢٠٠",
    discount: "٢١٪",
    rating: 4.6,
    reviews: 312,
    category: "ماوس",
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "monitor-curve-27-qhd",
    name: 'شاشة كيرف 27" QHD 165Hz',
    price: "٦,٤٠٠",
    oldPrice: "٧,٥٠٠",
    discount: "١٥٪",
    rating: 4.8,
    reviews: 189,
    category: "شاشات",
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "case-airflow-pro",
    name: "كيسة Airflow Pro Mid Tower",
    price: "٢,١٥٠",
    oldPrice: "٢,٦٠٠",
    discount: "١٧٪",
    rating: 4.5,
    reviews: 97,
    category: "كيسات PC",
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "keyboard-nova-87",
    name: "كيبورد ميكانيكي Nova 87 Hot-swap",
    price: "١,٢٠٠",
    oldPrice: "١,٤٥٠",
    discount: "١٧٪",
    rating: 4.7,
    reviews: 224,
    category: "كيبورد",
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "headset-aero-h7",
    name: "سماعة Aero H7 7.1 Surround",
    price: "٨٥٠",
    oldPrice: "١,٠٥٠",
    discount: "١٩٪",
    rating: 4.4,
    reviews: 156,
    category: "سماعات",
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cpu-ryzen-7",
    name: "معالج Ryzen 7 8 Core 5GHz",
    price: "١١,٩٠٠",
    oldPrice: "١٣,٥٠٠",
    discount: "١٢٪",
    rating: 4.9,
    reviews: 78,
    category: "معالجات",
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80",
  },

  // لابتوبات
  {
    id: "laptop-probook-g15",
    name: "لابتوب جيمنج ProBook G15",
    price: "٢٨,٩٠٠",
    rating: 4.6,
    reviews: 64,
    category: "لابتوبات",
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "laptop-probook-slim-14",
    name: 'لابتوب ProBook Slim 14"',
    price: "١٩,٥٠٠",
    rating: 4.5,
    reviews: 132,
    category: "لابتوبات",
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "laptop-workstation-x1",
    name: "لابتوب Workstation X1",
    price: "٣٤,٢٠٠",
    rating: 4.8,
    reviews: 41,
    category: "لابتوبات",
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "laptop-student-13",
    name: 'لابتوب Student Book 13"',
    price: "١٤,٧٠٠",
    rating: 4.3,
    reviews: 210,
    category: "لابتوبات",
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=800&q=80",
  },

  // قطع غيار
  {
    id: "ram-ddr5-16",
    name: "رامة DDR5 16GB 6000MHz",
    price: "٢,٤٠٠",
    rating: 4.7,
    reviews: 88,
    category: "قطع غيار",
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ssd-nvme-1tb",
    name: "SSD NVMe 1TB Gen4",
    price: "١,٨٥٠",
    rating: 4.8,
    reviews: 305,
    category: "قطع غيار",
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "psu-750w-gold",
    name: "باور سبلاي 750W Gold",
    price: "٣,١٠٠",
    rating: 4.6,
    reviews: 59,
    category: "قطع غيار",
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "gpu-rtx-8gb",
    name: "كارت شاشة RTX Series 8GB",
    price: "١٦,٥٠٠",
    rating: 4.9,
    reviews: 27,
    category: "قطع غيار",
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
  },
];

/* --------------------------------------------------------------------------
 * دوال استعلام (Queries) — جاهزة للترقية لـ API calls
 * ------------------------------------------------------------------------ */

/** كل المنتجات */
export function getProducts(): Product[] {
  return products;
}

/** كل المنتجات اللي عليها عرض */
export function getDeals(): Product[] {
  return products.filter((p) => p.discount);
}

/** كل لابتوبات */
export function getLaptops(): Product[] {
  return products.filter((p) => p.category === "لابتوبات");
}

/** كل قطع الغيار */
export function getParts(): Product[] {
  return products.filter((p) => p.category === "قطع غيار");
}

/** منتج واحد بالـ id */
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

/** منتج واحد بالاسم (متاح مؤقتاً للتوافق مع الـ routing الحالي) */
export function getProductByName(name: string): Product | undefined {
  return products.find((p) => p.name === name);
}

/** المنتجات داخل فئة معيّنة */
export function getProductsByCategory(categoryName: string): Product[] {
  return products.filter((p) => p.category === categoryName);
}

/* --------------------------------------------------------------------------
 * أدوات مساعدة للعرض
 * ------------------------------------------------------------------------ */

/** "٩٥٠" أو "١,٢٠٠" -> 950 / 1200 */
export function parseArabicPrice(str: string): number {
  const eastern = "٠١٢٣٤٥٦٧٨٩";
  const converted = str
    .split("")
    .map((ch) => (eastern.includes(ch) ? String(eastern.indexOf(ch)) : ch))
    .join("")
    .replace(/,/g, "");
  return Number(converted) || 0;
}

/** 950 -> "٩٥٠" */
export function toArabicNumber(num: number): string {
  const eastern = "٠١٢٣٤٥٦٧٨٩";
  return num
    .toLocaleString("en-US")
    .split("")
    .map((ch) => (/\d/.test(ch) ? eastern[Number(ch)] : ch))
    .join("");
}

/**
 * بترجّع أيقونة مناسبة لكل فئة (للعرض في الأماكن اللي محتاجة أيقونة).
 * منفصلة عن بيانات المنتج عشان البيانات تفضل serializable.
 */
export function iconForCategory(categoryName: string) {
  return (
    categories.find((c) => c.name === categoryName)?.icon ?? Cpu
  );
}

/**
 * بترجّع صورة المنتج.
 * - لو المنتج معاه صورة (image)، بتستخدمها على طول.
 * - لو لأ، بتولّد صورة مؤقتة (placeholder) بألوان البراند.
 * لما تجهز صور إضافية: حطها في /public/products/ وحدّث الـ Product عشان يستخدم حقل image.
 */
export function placeholderImage(name: string, w = 400, h = 400, image?: string): string {
  if (image) return image;
  const label = encodeURIComponent(name.split(" ").slice(0, 2).join(" "));
  return `https://placehold.co/${w}x${h}/0A0A0A/E5383B?text=${label}&font=roboto`;
}
