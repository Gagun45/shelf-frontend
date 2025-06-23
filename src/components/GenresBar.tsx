import { GENRES } from "@/config/genres";
import { useSearch } from "@/context/SearchContext";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

const GenresBar = () => {
  const { genres, setGenres } = useSearch();
  return (
    <div className="flex flex-col">
      <h2 className="font-bold">Genres:</h2>
      <div className="grid grid-cols-3 xl:grid-cols-1 gap-y-1">
        {GENRES.map((genre) => {
          const checked = genres.includes(genre);
          return (
            <Label key={genre} className="flex items-center gap-1">
              <Checkbox
                checked={checked}
                onCheckedChange={(e) => {
                  if (e) {
                    setGenres((prev) => [...prev, genre]);
                  } else {
                    setGenres((prev) => prev.filter((g) => g !== genre));
                  }
                }}
              />
              <span>{genre}</span>
            </Label>
          );
        })}
      </div>
    </div>
  );
};
export default GenresBar;
