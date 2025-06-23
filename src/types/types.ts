export type BookType = {
  title: string;
  author: string;
  bookPid: string;
  addedBy: string;
  imageUrl: string;
  language: string;
  publishYear: number;
  genres: [string];
  price: number;
};

export type NewBookType = {
  title: string;
  author: string;
  language: string;
  publishYear: number;
  genres: [string];
  price: number;
};

export type UserType = {
  userPid: string;
};

interface SortOptionInt {
  value: string;
  title: string;
}
export const AllSortOptions: SortOptionInt[] = [
  { title: "From A to Z", value: "AlphabetAsc" },
  { title: "From Z to A", value: "AlphabetDesc" },
  { title: "Year from low to high", value: "YearAsc" },
  { title: "Year from high to low", value: "YearDesc" },
  { title: "Price from low to high", value: "PriceAsc" },
  { title: "Price from high to low", value: "PriceDesc" },
];
