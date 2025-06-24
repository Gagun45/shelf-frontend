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
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={5}>5</option>
        </select>
      </label>
    </div>
  );
};
export default BooksOnPage;
