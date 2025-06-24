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
    <div className="flex flex-col gap-4">
      <h3 className="title">EditBook</h3>
      <BookForm onSave={editBook} isPending={isPending} book={book} />
    </div>
  );
};
export default EditBook;
