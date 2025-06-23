import AllBooks from "@/components/AllBooks";
import FiltersDesktop from "@/components/FiltersDesktop";
import FiltersMobile from "@/components/FiltersMobile";
import SearchBar from "@/components/SearchOptions/SearchBar";
import SortBar from "@/components/SearchOptions/SortBar";

import { useSearch } from "@/context/SearchContext";

const Homepage = () => {
  const { title } = useSearch();
  return (
    <div className="flex flex-col gap-4">
      <SearchBar />
      <div className="xl:hidden">
        <FiltersMobile />
      </div>

      <div className="flex flex-wrap xl:grid grid-cols-[250px_1fr]">
        <FiltersDesktop />
        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <span className="title">All Books</span>
            <SortBar />
          </div>
          {title && <span>Results for search '{title}</span>}
          <AllBooks />
        </div>
      </div>
    </div>
  );
};
export default Homepage;
