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

export type BooksResponse = {
  books: BookType[];
  totalBooks: number;
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
  role: "user" | "admin";
};

interface SortOptionInt {
  value: string;
  title: string;
}
export const AllSortOptions: SortOptionInt[] = [
  { title: "From A to Z", value: "AlphabetAsc" },
  { title: "From Z to A", value: "AlphabetDesc" },
  { title: "Old to new (by year)", value: "YearAsc" },
  { title: "New to old (by year)", value: "YearDesc" },
  { title: "Price from low to high", value: "PriceAsc" },
  { title: "Price from high to low", value: "PriceDesc" },
];

export interface BookOrderInterface {
  title: string;
  author: string;
  price: number;
  quantity: number;
}

export type OrderType = {
  orderPid: string;
  books: BookOrderInterface[];
  totalPrice: number;
};

export interface OrderItemInterface {
  bookPid: string;
  quantity: number;
}
