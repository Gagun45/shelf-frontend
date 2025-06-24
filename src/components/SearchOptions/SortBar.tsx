import { useSearch } from "@/context/SearchContext";
import { AllSortOptions } from "@/types/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import BooksOnPage from "./BooksOnPage";

const SortBar = () => {
  const { sortOption, setSortOption } = useSearch();
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
