import PagePlaceholder from "@/components/PagePlaceholder";
import { PackageSearch } from "lucide-react";

export default function TrackOrderPage() {
  return (
    <PagePlaceholder
      title="تتبع طلبك"
      description="صفحة تتبع الطلب هتكون متاحة قريب لما نظام إدارة الطلبات يشتغل. هتعرف منها مكان شحنتك ووصلت لفين في كل لحظة."
      icon={PackageSearch}
    />
  );
}
