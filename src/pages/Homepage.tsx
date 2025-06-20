import AllBooks from "@/components/AllBooks";
import GenresBar from "@/components/GenresBar";

import SearchBar from "@/components/SearchOptions/SearchBar";
import SortBar from "@/components/SearchOptions/SortBar";
import YearBar from "@/components/SearchOptions/YearBar";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-4">
      <SearchBar />
      <YearBar />
      <SortBar />
      <GenresBar />
      <AllBooks />
    </div>
  );
};
export default Homepage;
