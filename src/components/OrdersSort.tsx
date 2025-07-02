import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useOrderSearchStore } from "@/stores/useOrderSearchStore";
import type { StatusType } from "@/types/types";
const OrdersSort = () => {
  const sortOption = useOrderSearchStore((s) => s.sortOption);
  const setSortOption = useOrderSearchStore((s) => s.setSortOption);
  return (
    <Select
      value={sortOption}
      onValueChange={(val) => setSortOption(val as StatusType | "all")}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={sortOption} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="success">Success</SelectItem>
        <SelectItem value="cancelled">Cancelled</SelectItem>
        <SelectItem value="pending">Pending</SelectItem>
      </SelectContent>
    </Select>
  );
};
export default OrdersSort;
