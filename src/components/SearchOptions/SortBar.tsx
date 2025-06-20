import { AllSortOptions, useSearch } from "@/context/SearchContext";

const SortBar = () => {
  const { sortOption, setSortOption } = useSearch();
  return (
    <div>
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        {AllSortOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SortBar;
