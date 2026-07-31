import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Double Click — مستلزمات الكمبيوتر في مصر",
  description:
    "وجهتك لكل مستلزمات الكمبيوتر في مصر — ماوس، شاشات، كيسات، لابتوبات، وقطع غيار. أصلي، بضمان، وتوصيل لباب البيت.",
};

/**
 * الـ Layout الجذري (Root Layout)
 * النافبار والفوتر بيتحطّوا مرة واحدة هنا، فكل الصفحات بتبقى "مربوط احترافي ببعض".
 * الخط بيتحمّل عبر next/font (self-host) لسرعة أفضل ومن غير اعتماد على Google وقت الـ runtime.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <CartProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
