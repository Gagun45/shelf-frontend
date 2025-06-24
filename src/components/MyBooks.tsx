import { useMyBooks } from "@/api/books";
import BookCard from "./BookCard";
import Loading from "./Loading";
import { useSearch } from "@/context/SearchContext";
import Pagination from "./SearchOptions/Pagination";

const MyBooks = () => {
  const { booksResponse, isLoading } = useMyBooks();
  const { limit } = useSearch();
  if (isLoading) {
    return <Loading />;
  }
  if (!booksResponse || (booksResponse && booksResponse.books.length === 0)) {
    return <span>No books found</span>;
  }
  const { books, totalBooks } = booksResponse;
  const totalPages = Math.ceil(totalBooks / limit);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        {books?.map((book) => (
          <BookCard key={book.bookPid} book={book} />
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
};
export default MyBooks;
