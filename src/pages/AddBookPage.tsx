import { useAddBook } from "@/api/books";
import { BookForm } from "@/components/forms/addBookForm/BookForm";

const AddBookPage = () => {
  const { addBook, isPending } = useAddBook();

  return (
    <div className="flex flex-col gap-6">
      <h3 className="title">AddBookPage</h3>
      <BookForm onSave={addBook} isPending={isPending} />
    </div>
  );
};
export default AddBookPage;
