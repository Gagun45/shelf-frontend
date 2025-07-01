import { useAllBooks } from "@/api/books";

import Loading from "../Loading";

import BooksCardsLayout from "@/layouts/BooksCardsLayout";
import AllBooksCard from "./AllBooksCard";

const AllBooks = () => {
  const { booksResponse, isLoading } = useAllBooks();

  if (isLoading) {
    return <Loading />;
  }
  if (!booksResponse) {
    return <span>No books found</span>;
  }
  const { books, totalBooks } = booksResponse;
  return (
    <BooksCardsLayout totalBooks={totalBooks}>
      {books?.map((book) => (
        <AllBooksCard key={book.bookPid} book={book} />
      ))}
    </BooksCardsLayout>
  );
};
export default AllBooks;
