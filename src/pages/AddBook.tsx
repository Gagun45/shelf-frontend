import { useAddBook } from "@/api/books";
import { BookForm } from "@/components/forms/addBookForm/BookForm";

const AddBook = () => {
  const { addBook, isPending } = useAddBook();
  return (
    <div>
      AddBook
      <BookForm onSave={addBook} isPending={isPending} />
    </div>
  );
};
export default AddBook;
