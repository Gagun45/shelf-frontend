import { useMyBooks } from "@/api/books";
import BookCard from "@/components/BookCard";
import Loading from "@/components/Loading";

const MyBooks = () => {
  const { books, isLoading } = useMyBooks();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      My books
      <div className="flex flex-wrap gap-4">
        {books?.map((book) => (
          <BookCard key={book.bookPid} book={book} my={true} />
        ))}
      </div>
    </div>
  );
};
export default MyBooks;
