import { LANGUAGES } from "@/config/languages";
import { Button } from "../ui/button";
import { useSearchStore } from "@/stores/useSearchStore";

const FilterBadges = () => {
  const genres = useSearchStore((state) => state.genres);
  const languages = useSearchStore((state) => state.languages);
  const setGenres = useSearchStore((state) => state.setGenres);
  const setLanguages = useSearchStore((state) => state.setLanguages);
  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((genre) => (
        <Button
          className="bg-purple-800"
          key={genre}
          onClick={() => setGenres(genre)}
        >
          {genre}
        </Button>
      ))}
      {![0, LANGUAGES.length].includes(languages.length) &&
        languages.map((lang) => (
          <Button
            className="bg-yellow-800"
            key={lang}
            onClick={() => setLanguages(lang)}
          >
            {lang}
          </Button>
        ))}
    </div>
  );
};
export default FilterBadges;
