import type { BookType } from "@/types/types";
import { Link } from "react-router-dom";

type Props = {
  book: BookType;
  my?: boolean;
};

const BookCard = ({ book, my = false }: Props) => {
  return (
    <div className="h-24 w-48 bg-chart-1 flex flex-col">
      <img src={book.imageUrl} className="h-24 w-40 object-cover" />
      <span>Title: {book.title}</span>
      <span>Author: {book.author}</span>
      {my && <Link to={`/book/edit/${book.bookPid}`}>Edit</Link>}
      <Link to={`/book?id=${book.bookPid}`}>More</Link>
    </div>
  );
};
export default BookCard;
