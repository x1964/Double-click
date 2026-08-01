import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // مصادر الصور البعيدة:
    // - placehold.co: الصور المؤقتة النصية.
    // - images.unsplash.com: صور المنتجات الحقيقية (مجانية للاستخدام التجاري).
    // لما تجهز صور منتجاتك على دومين خاص بيك، ضيفه هنا.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
