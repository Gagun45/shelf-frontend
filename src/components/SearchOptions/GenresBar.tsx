import { GENRES } from "@/config/genres";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { useSearchStore } from "@/stores/useSearchStore";
import { useEffect, useState } from "react";

const GenresBar = () => {
  const genres = useSearchStore((s) => s.genres);
  const setGenres = useSearchStore((s) => s.setGenres);

  const [localGenres, setLocalGenres] = useState(genres);

  useEffect(() => {
    setLocalGenres(genres);
  }, [genres]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setGenres(localGenres);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [localGenres, setLocalGenres, setGenres]);
  return (
    <div className="flex flex-col">
      <h2 className="font-bold">Genres:</h2>
      <div className="grid grid-cols-3 xl:grid-cols-1 gap-y-1">
        {GENRES.map((genre) => {
          const checked = localGenres.includes(genre);
          return (
            <Label key={genre} className="flex items-center gap-1">
              <Checkbox
                checked={checked}
                onCheckedChange={() =>
                  setLocalGenres((prev) =>
                    prev.includes(genre)
                      ? prev.filter((g) => g !== genre)
                      : [...prev, genre]
                  )
                }
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
