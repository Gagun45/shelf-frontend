import { AllSortOptions } from "@/types/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useSearchStore } from "@/stores/useSearchStore";
import ItemsOnPage from "./ItemsOnPage";

const SortBar = () => {
  const limit = useSearchStore((state) => state.limit);
  const setLimit = useSearchStore((state) => state.setLimit);

  const sortOption = useSearchStore((state) => state.sortOption);
  const setSortOption = useSearchStore((state) => state.setSortOption);

  return (
    <div className="flex items-center gap-1">
      <ItemsOnPage value={limit} onChange={setLimit}/>
      <Select onValueChange={(val) => setSortOption(val)}>
        <SelectTrigger className="w-fit">
          <SelectValue
            placeholder={
              AllSortOptions.find((opt) => opt.value === sortOption)?.title
            }
          />
        </SelectTrigger>
        <SelectContent>
          {AllSortOptions.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
export default SortBar;
