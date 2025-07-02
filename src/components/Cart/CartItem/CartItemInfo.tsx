import type { BookType } from "@/types/types";
import { memo } from "react";
import { Link } from "react-router-dom";

const CartItemInfo = ({ book }: { book: BookType }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="hidden sm:block h-32 w-32 flex-shrink-0 ">
        <img
          src={book.imageUrl}
          alt={book.title}
          className="object-contain size-full"
        />
      </div>
      <div className="flex flex-col">
        <Link
          to={`/book?id=${book.bookPid}`}
          className="flex font-semibold gap-2 items-center"
        >
          <span>{book.title}</span>
        </Link>
        <span className="text-sm italic">{book.author}</span>
        <span className="text-xs italic">
          {book.language}, {book.publishYear}
        </span>
      </div>
    </div>
  );
};
export default memo(CartItemInfo);
