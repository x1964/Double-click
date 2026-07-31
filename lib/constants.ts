/**
 * ثوابت التطبيق (App Constants)
 * - بيانات التواصل، واتساب، إلخ.
 */

/** رقم الواتساب (مع كود مصر +2 بدون الـ 0 الأول من الرقم) */
export const WHATSAPP_NUMBER = "201275987554";

/** رقم الهاتف للعرض */
export const PHONE_DISPLAY = "01275987554";

/** روابط التواصل */
export const CONTACT = {
  phone: PHONE_DISPLAY,
  whatsapp: WHATSAPP_NUMBER,
  facebook: "https://www.facebook.com/Double.Click2017",
  tiktok: "https://www.tiktok.com/@double_click0?_r=1",
};

/**
 * بني رسالة واتساب من قائمة المنتجات
 * بتبعت الرسالة على هيئة نص منظم بالعربي
 */
export function buildWhatsAppOrderMessage(
  items: { name: string; qty: number; price: string }[],
  total: number
): string {
  const lines = ["🛒 *طلب جديد من Double Click*", ""];

  items.forEach((item, i) => {
    const num = i + 1;
    lines.push(num + ". *" + item.name + "*");
    lines.push("   الكمية: " + item.qty + " · السعر: " + item.price + " ج.م");
    lines.push("");
  });

  lines.push("💰 *الإجمالي: " + total + " ج.م*");
  lines.push("");
  lines.push("محدّثك، تمام؟ 👍");

  return encodeURIComponent(lines.join("\n"));
}
