import type { BookType } from "@/types/types";
import { Link } from "react-router-dom";

type Props = {
  book: BookType;
};

const BookCard = ({ book }: Props) => {
  return (
    <Link to={`/book?id=${book.bookPid}`} className="w-27 md:w-36 h-48 md:h-64">
      <img
        src={book.imageUrl}
        alt={book.title}
        className="object-cover size-full"
      />
    </Link>
  );
};
export default BookCard;
