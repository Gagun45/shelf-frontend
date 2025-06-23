import { LANGUAGES } from "@/config/languages";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { useDebounce } from "use-debounce";

type Props = {
  children: ReactNode;
};

type ContextType = {
  title: string;
  setTitle: (title: string) => void;
  price: SearchPrice;
  setPrice: React.Dispatch<React.SetStateAction<SearchPrice>>;
  year: SearchYear;
  setYear: React.Dispatch<React.SetStateAction<SearchYear>>;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
  genres: string[];
  setGenres: React.Dispatch<React.SetStateAction<string[]>>;
  language: string[];
  setLanguage: React.Dispatch<React.SetStateAction<string[]>>;
  searchQuery: string;
};

const SearchContext = createContext<ContextType | null>(null);

type SearchYear = {
  fromYear: number;
  toYear: number;
};

type SearchPrice = {
  fromPrice: number;
  toPrice: number;
};

export const SearchProvider = ({ children }: Props) => {
  const [price, setPrice] = useState<SearchPrice>({
    fromPrice: 0,
    toPrice: 2000,
  });
  const [title, setTitle] = useState<string>("");
  const [year, setYear] = useState<SearchYear>({
    fromYear: 1980,
    toYear: 2025,
  });
  const [sortOption, setSortOption] = useState<string>("AlphabetAsc");
  const [genres, setGenres] = useState<string[]>([]);
  const [language, setLanguage] = useState<string[]>(LANGUAGES);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [debouncedPrice] = useDebounce(price, 500);
  const [debouncedYear] = useDebounce(year, 500);
  const [debouncedGenres] = useDebounce(genres, 500);

  useEffect(() => {
    const queryParts: string[] = [];
    if (title) queryParts.push(`title=${title}`);
    if (debouncedYear.fromYear !== 1980)
      queryParts.push(`fromYear=${debouncedYear.fromYear}`);
    if (debouncedYear.toYear !== 2025)
      queryParts.push(`toYear=${debouncedYear.toYear}`);

    if (debouncedPrice.fromPrice !== 0)
      queryParts.push(`fromPrice=${debouncedPrice.fromPrice}`);
    if (debouncedPrice.toPrice !== 2000)
      queryParts.push(`toPrice=${debouncedPrice.toPrice}`);

    if (sortOption && sortOption !== "AlphabetAsc")
      queryParts.push(`sortOption=${sortOption}`);
    if (debouncedGenres && debouncedGenres.length > 0) {
      queryParts.push(`genres=${debouncedGenres.join(",")}`);
    }
    if (language && language.length > 0 && language.length !== 3) {
      queryParts.push(`language=${language.join(",")}`);
    }
    setSearchQuery(queryParts.join("&").replace(" ", "%20"));
  }, [
    title,
    debouncedYear,
    sortOption,
    debouncedGenres,
    language,
    debouncedPrice,
  ]);

  return (
    <SearchContext.Provider
      value={{
        title,
        setTitle,
        price,
        setPrice,
        year,
        setYear,
        sortOption,
        setSortOption,
        searchQuery,
        genres,
        setGenres,
        language,
        setLanguage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be within a Search Provider");
  }
  return context;
};
