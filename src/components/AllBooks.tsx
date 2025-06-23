import { useAllBooks } from "@/api/books";
import BookCard from "./BookCard";
import Loading from "./Loading";

const AllBooks = () => {
  const { books, isLoading } = useAllBooks();
  if (isLoading) {
    return <Loading />;
  }
  if (!books || (books && books.length === 0)) {
    return <span>No books found</span>;
  }
  return (
    <div className="flex flex-wrap gap-4">
      {books?.map((book) => (
        <BookCard key={book.bookPid} book={book} />
      ))}
    </div>
  );
};
export default AllBooks;
