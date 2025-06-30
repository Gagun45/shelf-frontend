import { useAllBooks } from "@/api/books";

import Loading from "./Loading";

import BooksCardsLayout from "@/layouts/BooksCardsLayout";

const AllBooks = () => {
  const { booksResponse, isLoading } = useAllBooks();

  if (isLoading) {
    return <Loading />;
  }
  if (!booksResponse) {
    return <span>No books found</span>;
  }
  return <BooksCardsLayout booksResponse={booksResponse} />;
};
export default AllBooks;
