import type { BookOrderInterface } from "@/types/types";
import { memo } from "react";

const OrderCardItemsSectionItems = ({
  books,
}: {
  books: BookOrderInterface[];
}) => {
  return (
    <div className="flex flex-col w-full gap-4">
      {books.map((book, index) => (
        <div key={book.title} className="grid grid-cols-[1fr_100px]">
          <span className="border-b-2">
            {index + 1}. {book.title}
          </span>
          <span className="text-right mt-auto font-semibold border-b-2">
            {book.quantity}*{book.price}
          </span>
        </div>
      ))}
    </div>
  );
};
export default memo(OrderCardItemsSectionItems);
