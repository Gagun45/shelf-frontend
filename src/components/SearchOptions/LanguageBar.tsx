import { LANGUAGES } from "@/config/languages";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { useSearchStore } from "@/stores/useSearchStore";
import { useEffect, useState } from "react";

const LanguageBar = () => {
  const languages = useSearchStore((state) => state.languages);
  const setLanguages = useSearchStore((state) => state.setLanguages);

  const [localLanguages, setLocalLanguages] = useState(languages);

  useEffect(() => {
    setLocalLanguages(languages);
  }, [languages]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (localLanguages.length === 0) {
        setLanguages(LANGUAGES);
      } else {
        setLanguages(localLanguages);
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [localLanguages, setLocalLanguages, setLanguages]);
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-bold">Languages:</h2>
      {LANGUAGES.map((lang) => {
        const checked = localLanguages.includes(lang);
        return (
          <Label className="flex items-center gap-1" key={lang}>
            <Checkbox
              checked={checked}
              onCheckedChange={() =>
                setLocalLanguages((prev) =>
                  prev.includes(lang)
                    ? prev.filter((l) => l !== lang)
                    : [...prev, lang]
                )
              }
            />
            {lang}
          </Label>
        );
      })}
      <Label className="flex items-center gap-1">
        <Checkbox
          checked={localLanguages.length === LANGUAGES.length}
          onCheckedChange={(checked) => {
            if (checked) setLocalLanguages(LANGUAGES);
            else setLocalLanguages([]);
          }}
        />
        All
      </Label>
    </div>
  );
};
export default LanguageBar;
