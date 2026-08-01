import PagePlaceholder from "@/components/PagePlaceholder";
import { Store } from "lucide-react";

export default function AboutPage() {
  return (
    <PagePlaceholder
      title="عن Double Click"
      description="قصة Double Click ورسالتنا في توفير مستلزمات الكمبيوتر الأصلية في مصر هتتنزل قريب في الصفحة دي."
      icon={Store}
    />
  );
}
