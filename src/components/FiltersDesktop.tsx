import GenresBar from "./GenresBar";
import LanguageBar from "./LanguageBar";
import { PriceBar } from "./SearchOptions/PriceBar";
import YearBar from "./SearchOptions/YearBar";

const FiltersDesktop = () => {
  return (
    <div className="hidden xl:flex flex-col">
      <YearBar />
      <PriceBar />
      <GenresBar />
      <LanguageBar />
    </div>
  );
};
export default FiltersDesktop;
