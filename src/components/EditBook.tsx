import { useBookById, useEditBook } from "@/api/books";
import Loading from "./Loading";
import { BookForm } from "./forms/addBookForm/BookForm";
import { Navigate } from "react-router-dom";
import { useUserStore } from "@/stores/useUserStore";

const EditBook = ({ bookPid }: { bookPid: string }) => {
  const { book, isLoading } = useBookById(bookPid);
  const { editBook, isPending } = useEditBook(bookPid);
  const { userData } = useUserStore();

  if (isLoading) {
    return <Loading />;
  }

  if (!book) {
    return <span>The book wasnt found</span>;
  }
  if (userData?.userPid !== book.addedBy) return <Navigate to="/" />;

  return (
    <div className="flex flex-col gap-4">
      <h3 className="title">EditBook</h3>
      <BookForm onSave={editBook} isPending={isPending} book={book} />
    </div>
  );
};
export default EditBook;
