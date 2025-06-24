import { useSearch } from "@/context/SearchContext";

const BooksOnPage = () => {
  const { limit, setLimit } = useSearch();
  return (
    <div className="flex items-center flex-wrap">
      <label>
        <select
          value={limit}
          onChange={(e) => setLimit(parseInt(e.target.value))}
        >
          Books on pages
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </label>
    </div>
  );
};
export default BooksOnPage;
