import { AllSortOptions } from "@/types/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import BooksOnPage from "./BooksOnPage";
import { useSearchStore } from "@/stores/useSearchStore";

const SortBar = () => {
  const sortOption = useSearchStore((state) => state.sortOption);
  const setSortOption = useSearchStore((state) => state.setSortOption);

  return (
    <div className="flex items-center gap-1">
      <BooksOnPage />
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
