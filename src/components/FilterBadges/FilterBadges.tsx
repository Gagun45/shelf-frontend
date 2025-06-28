import { LANGUAGES } from "@/config/languages";
import { useSearch } from "@/context/SearchContext";
import { Button } from "../ui/button";

const FilterBadges = () => {
  const { genres, language, setGenres, setLanguage } = useSearch();
  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((genre) => (
        <Button
          className="bg-purple-800"
          key={genre}
          onClick={() => setGenres((prev) => prev.filter((g) => g !== genre))}
        >
          {genre}
        </Button>
      ))}
      {![0, LANGUAGES.length].includes(language.length) &&
        language.map((lang) => (
          <Button
            className="bg-yellow-800"
            key={lang}
            onClick={() =>
              setLanguage((prev) => prev.filter((l) => l !== lang))
            }
          >
            {lang}
          </Button>
        ))}
    </div>
  );
};
export default FilterBadges;
