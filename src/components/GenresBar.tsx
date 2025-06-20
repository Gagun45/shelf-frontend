import { GENRES } from "@/config/genres";
import { useSearch } from "@/context/SearchContext";

const GenresBar = () => {
  const { setGenres } = useSearch();
  return (
    <div className="flex flex-wrap gap-x-4">
      {GENRES.map((genre) => (
        <label key={genre} className="flex gap-1">
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                setGenres((prev) => [...prev, genre]);
              } else {
                setGenres((prev) => prev.filter((g) => g !== genre));
              }
            }}
          />
          <span>{genre}</span>
        </label>
      ))}
    </div>
  );
};
export default GenresBar;
