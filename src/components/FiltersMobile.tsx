import GenresBar from "./SearchOptions/GenresBar";
import LanguageBar from "./SearchOptions/LanguageBar";
import { PriceBar } from "./SearchOptions/PriceBar";
import YearBar from "./SearchOptions/YearBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { useSearchStore } from "@/stores/useSearchStore";

const FiltersMobile = () => {
  const resetFilters = useSearchStore((state) => state.resetFilters);
  return (
    <div className="flex flex-col xl:hidden gap-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <div className="flex items-center gap-4">
            <AccordionTrigger className="max-w-fit p-2 pl-0 cursor-pointer">
              Show Filters
            </AccordionTrigger>
            <Button onClick={resetFilters}>Reset filters</Button>
          </div>
          <AccordionContent className="space-y-2">
            <YearBar />
            <PriceBar />
            <GenresBar />
            <LanguageBar />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default FiltersMobile;
