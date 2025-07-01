import { useMyBooks } from "@/api/books";
import BooksCardsLayout from "@/layouts/BooksCardsLayout";
import Loading from "../Loading";
import MyBooksCard from "./MyBooksCard";

const MyBooks = () => {
  const { booksResponse, isLoading } = useMyBooks();
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
        <MyBooksCard key={book.bookPid} book={book} />
      ))}
    </BooksCardsLayout>
  );
};
export default MyBooks;
