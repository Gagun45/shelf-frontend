import { useBookById } from "@/api/books";
import BookCard from "@/components/BookCard";
import Loading from "@/components/Loading";
import { useSearchParams } from "react-router-dom";

const BookPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { book, isLoading } = useBookById(id as string);
  console.log(book);
  if (isLoading) return <Loading />;
  return (
    <div>
      BookPage <BookCard book={book!} />
    </div>
  );
};
export default BookPage;
