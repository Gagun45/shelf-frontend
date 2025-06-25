import { useSearch } from "@/context/SearchContext";

const BooksOnPage = () => {
  const { limit, setLimit } = useSearch();
  return (
    <select value={limit} onChange={(e) => setLimit(parseInt(e.target.value))}>
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={15}>15</option>
    </select>
  );
};
export default BooksOnPage;
