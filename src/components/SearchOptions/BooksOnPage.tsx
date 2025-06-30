import { useSearchStore } from "@/stores/useSearchStore";

const BooksOnPage = () => {
  const limit = useSearchStore(state=>state.limit)
  const setLimit = useSearchStore(state=>state.setLimit)
  return (
    <select value={limit} onChange={(e) => setLimit(parseInt(e.target.value))}>
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={15}>15</option>
    </select>
  );
};
export default BooksOnPage;
