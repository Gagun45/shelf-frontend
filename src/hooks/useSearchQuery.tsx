import { useSearchStore } from "@/stores/useSearchStore";
import { useMemo } from "react";
import { useShallow } from "zustand/react/shallow";

export const useSearchQuery = () => {
  const { title, year, genres, languages, limit, page, price, sortOption } =
    useSearchStore(
      useShallow((state) => ({
        title: state.title,
        year: state.year,
        genres: state.genres,
        languages: state.languages,
        limit: state.limit,
        page: state.page,
        price: state.price,
        sortOption: state.sortOption,
      }))
    );

  const queryString = useMemo(() => {
    const queryParts: string[] = [];
    if (title) queryParts.push(`title=${title}`);

    if (year.fromYear !== 1980) queryParts.push(`fromYear=${year.fromYear}`);
    if (year.toYear !== 2025) queryParts.push(`toYear=${year.toYear}`);

    if (price.fromPrice !== 0) queryParts.push(`fromPrice=${price.fromPrice}`);
    if (price.toPrice !== 20000) queryParts.push(`toPrice=${price.toPrice}`);

    if (sortOption && sortOption !== "AlphabetAsc")
      queryParts.push(`sortOption=${sortOption}`);
    if (genres && genres.length > 0) {
      queryParts.push(`genres=${genres.join(",")}`);
    }
    if (languages && languages.length > 0 && languages.length !== 3) {
      queryParts.push(`languages=${languages.join(",")}`);
    }
    queryParts.push(`page=${page}`);
    queryParts.push(`limit=${limit}`);

    const result = queryParts.join("&").replace(" ", "%20");
    return result;
  }, [
    title,
    year.fromYear,
    year.toYear,
    price.fromPrice,
    price.toPrice,
    sortOption,
    genres,
    languages,
    limit,
    page,
  ]);
  return queryString;
};
