import GenresBar from "./GenresBar";
import LanguageBar from "./LanguageBar";
import { PriceBar } from "./SearchOptions/PriceBar";
import YearBar from "./SearchOptions/YearBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FiltersMobile = () => {
  return (
    <div className="flex flex-col xl:w-50 gap-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="max-w-fit p-2 pl-0 cursor-pointer">
            Show Filters
          </AccordionTrigger>
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
