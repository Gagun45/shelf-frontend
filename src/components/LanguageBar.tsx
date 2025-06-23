import { LANGUAGES } from "@/config/languages";
import { useSearch } from "@/context/SearchContext";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

const LanguageBar = () => {
  const { language, setLanguage } = useSearch();
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-bold">Languages:</h2>
      {LANGUAGES.map((lang) => {
        const checked = language.includes(lang);
        return (
          <Label className="flex items-center gap-1" key={lang}>
            <Checkbox
              checked={checked}
              onCheckedChange={(checked) => {
                if (checked) {
                  setLanguage((prev) => [...prev, lang]);
                } else {
                  setLanguage((prev) => prev.filter((l) => l !== lang));
                }
              }}
            />
            {lang}
          </Label>
        );
      })}
      <Label className="flex items-center gap-1">
        <Checkbox
          checked={language.length === LANGUAGES.length}
          onCheckedChange={(checked) => {
            if (checked) {
              setLanguage(LANGUAGES);
            } else {
              setLanguage([]);
            }
          }}
        />
        All
      </Label>
    </div>
  );
};
export default LanguageBar;
