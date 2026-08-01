import PagePlaceholder from "@/components/PagePlaceholder";
import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <PagePlaceholder
      title="الشروط والأحكام"
      description="بناءً على ربط الصفحة بنظام إدارة المحتوى، هيتنزّل هنا النص الكامل لشروط وأحكام الاستخدام والشراء من الموقع."
      icon={FileText}
    />
  );
}
