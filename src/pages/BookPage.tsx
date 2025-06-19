import { useBookById } from "@/api/books";
import Loading from "@/components/Loading";
import { useUserData } from "@/hooks/useUserData";
import { useSearchParams } from "react-router-dom";

const BookPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { book, isLoading } = useBookById(id as string);
  const { userData } = useUserData();
  if (isLoading) return <Loading />;
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-col">
        <span className="title">{book?.title}</span>
        <span className="italic">Author: {book?.author}</span>
        <span className="italic">Language: {book?.language}</span>
        <span>
          Editable: {userData?.userPid === book?.addedBy ? "yes" : "no"}
        </span>
      </div>
      <div className="w-full">
        <img
          src={book?.imageUrl}
          alt={book?.imageUrl}
          className="object-center size-full"
        />
      </div>
    </div>
  );
};
export default BookPage;
