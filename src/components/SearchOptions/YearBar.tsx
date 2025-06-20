import { useSearch } from "@/context/SearchContext";

const YearBar = () => {
  const { year, setYear } = useSearch();

  return (
    <input type="number" value={year} onChange={(e) => setYear(parseInt(e.target.value))} />
  );
};
export default YearBar;
