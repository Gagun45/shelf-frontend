import { useAllBooks } from "@/api/books";
import BookCard from "@/components/BookCard";
import Loading from "@/components/Loading";

const Homepage = () => {
  const { books, isLoading } = useAllBooks();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-4">
      <span className="title">All Books</span>
      <div className="flex flex-wrap gap-4">
        {books?.map((book) => (
          <BookCard key={book.bookPid} book={book} />
        ))}
      </div>
    </div>
  );
};
export default Homepage;
