import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // الصور المؤقتة (placeholders) بتيجي من placehold.co.
    // لما تجهز صور المنتجات الحقيقية، ضيف الـ domains بتاعتك هنا أو استخدم remotePatterns.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
