import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
};

export const AllSortOptions = ["YEAR-ASC", "YEAR-DESC"];

type ContextType = {
  title: string;
  setTitle: (title: string) => void;
  year: number;
  setYear: (year: number) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
  searchQuery: string;
  genres: string[];
  setGenres: React.Dispatch<React.SetStateAction<string[]>>;
};

const SearchContext = createContext<ContextType | null>(null);

export const SearchProvider = ({ children }: Props) => {
  const [title, setTitle] = useState<string>("");
  const [year, setYear] = useState<number>(0);
  const [sortOption, setSortOption] = useState<string>("");
  const [genres, setGenres] = useState<string[]>([]);

  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const queryParts: string[] = [];
    if (title) queryParts.push(`title=${title}`);
    if (year) queryParts.push(`year=${year}`);
    if (sortOption) queryParts.push(`sortOption=${sortOption}`);
    if (genres && genres.length > 0) {
      queryParts.push(`genres=${genres.join(",")}`);
    }
    setSearchQuery(queryParts.join("&").replace(" ", "%20"));
  }, [title, year, sortOption, genres]);

  return (
    <SearchContext.Provider
      value={{
        title,
        setTitle,
        year,
        setYear,
        sortOption,
        setSortOption,
        searchQuery,
        genres,
        setGenres,
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
