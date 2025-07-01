import type { BookType } from "@/types/types";

import BookCardCartSectionPrice from "./BookCardCartSectionPrice";
import BookCardCartSectionCart from "./BookCardCartSectionCart";

const BookCardCartSection = ({ book }: { book: BookType }) => {
  return (
    <div className="flex mt-auto flex-col xs:flex-row gap-1 items-center justify-between">
      <BookCardCartSectionPrice price={book.price} />
      <BookCardCartSectionCart book={book} />
    </div>
  );
};
export default BookCardCartSection;
