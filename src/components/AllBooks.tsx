import { useAllBooks } from "@/api/books";
import BookCard from "./BookCard";
import Loading from "./Loading";

const AllBooks = () => {
  const { books, isLoading } = useAllBooks();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col">
      <span className="title">All Books</span>
      <div className="flex flex-wrap gap-4">
        {books?.map((book) => (
          <BookCard key={book.bookPid} book={book} />
        ))}
      </div>
    </div>
  );
};
export default AllBooks;
