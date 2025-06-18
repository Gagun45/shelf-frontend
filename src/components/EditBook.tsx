import { useBookById, useEditBook } from "@/api/books";
import Loading from "./Loading";
import { BookForm } from "./forms/addBookForm/BookForm";

const EditBook = ({ bookPid }: { bookPid: string }) => {
  const { book, isLoading } = useBookById(bookPid);
  const { editBook, isPending } = useEditBook(bookPid);

  if (isLoading) {
    return <Loading />;
  }

  if (!book) {
    return <span>The book wasnt found</span>;
  }

  return (
    <div>
      EditBook
      <BookForm onSave={editBook} isPending={isPending} book={book} />
    </div>
  );
};
export default EditBook;
