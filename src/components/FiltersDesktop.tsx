import GenresBar from "./SearchOptions/GenresBar";
import LanguageBar from "./SearchOptions/LanguageBar";
import { PriceBar } from "./SearchOptions/PriceBar";
import YearBar from "./SearchOptions/YearBar";
import { Button } from "./ui/button";
import { useSearchStore } from "@/stores/useSearchStore";

const FiltersDesktop = () => {
  const resetFilters = useSearchStore((state) => state.resetFilters);
  return (
    <div className="hidden xl:flex flex-col gap-4">
      <Button className="w-fit" onClick={resetFilters}>
        Reset filters
      </Button>
      <YearBar />
      <PriceBar />
      <GenresBar />
      <LanguageBar />
    </div>
  );
};
export default FiltersDesktop;
