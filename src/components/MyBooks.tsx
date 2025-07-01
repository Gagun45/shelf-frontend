import { useMyBooks } from "@/api/books";
import Loading from "./Loading";
import BooksCardsLayout from "@/layouts/BooksCardsLayout";

const MyBooks = () => {
  const { booksResponse, isLoading } = useMyBooks();
  if (isLoading) {
    return <Loading />;
  }
  if (!booksResponse) {
    return <span>No books found</span>;
  }

  return (
    <BooksCardsLayout
      booksResponse={booksResponse}
      editButton={true}
      deleteButton={true}
    />
  );
};
export default MyBooks;
