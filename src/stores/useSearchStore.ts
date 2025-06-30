import { LANGUAGES } from "@/config/languages";
import type { SearchPrice, SearchYear } from "@/types/types";
import { create } from "zustand";

interface SearchStore {
  title: string;
  setTitle: (title: string) => void;
  price: SearchPrice;
  setPrice: (fromPrice: number, toPrice: number) => void;
  year: SearchYear;
  setYear: (fromYear: number, topYear: number) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
  genres: string[];
  setGenres: (genres: string[]) => void;
  languages: string[];
  setLanguages: (languages: string[]) => void;
  page: number;
  limit: number;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  resetFilters: () => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  title: "",
  setTitle: (title) => set({ title }),
  price: { fromPrice: 0, toPrice: 20000 },
  setPrice: (fromPrice, toPrice) => set({ price: { fromPrice, toPrice } }),
  year: { fromYear: 1980, toYear: 2025 },
  setYear: (fromYear, toYear) => set({ year: { fromYear, toYear } }),
  sortOption: "AlphabetAsc",
  setSortOption: (sortOption) => set({ sortOption }),
  genres: [],
  setGenres: (genres) => set({ genres }),
  languages: LANGUAGES,
  setLanguages: (languages) => set({ languages }),
  limit: 5,
  setLimit: (limit) => set({ limit }),
  page: 1,
  setPage: (page) => set({ page }),
  resetFilters: () =>
    set({
      year: { fromYear: 1980, toYear: 2025 },
      genres: [],
      price: { fromPrice: 0, toPrice: 20000 },
      languages: LANGUAGES,
    }),
}));
