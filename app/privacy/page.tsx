import PagePlaceholder from "@/components/PagePlaceholder";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <PagePlaceholder
      title="سياسة الخصوصية"
      description="سياسة الخصوصية الكاملة اللي بتوضّح إزاي بنحمي بياناتك بتتجهّز دلوقتي وهتتنزّل قريب."
      icon={ShieldCheck}
    />
  );
}
