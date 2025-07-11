import FilterBadges from "@/components/FilterBadges/FilterBadges";
import FiltersDesktop from "@/components/FiltersDesktop";
import FiltersMobile from "@/components/FiltersMobile";
import SearchBar from "@/components/SearchOptions/SearchBar";
import SortBar from "@/components/SearchOptions/SortBar";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  heading: "All books" | "My books";
};

const BooksPagesLayout = ({ children, heading }: Props) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[250px_1fr]">
      <div className="hidden xl:flex">
        <FiltersDesktop />
      </div>
      <div className="flex flex-col gap-4">
        <SearchBar />
        <FilterBadges/>
        <FiltersMobile />
        <div className="flex flex-wrap">
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-col gap-2 xs:flex-row justify-between">
              <span className="title">{heading}</span>
              <SortBar />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BooksPagesLayout;
