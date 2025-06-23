import { useCartStore } from "@/stores/useCartStore";
import type { BookType } from "@/types/types";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { CheckIcon, ShoppingCartIcon } from "lucide-react";

type Props = {
  book: BookType;
};

const BookCard = ({ book }: Props) => {
  const { addItem, removeItem, cart } = useCartStore();
  return (
    <div className="flex flex-col h-fit w-36 md:w-45 gap-2 border-1 px-4 py-2 shadow-2xl rounded-xl">
      <Link
        to={`/book?id=${book.bookPid}`}
        className="cursor-pointer min-h-48 md:min-h-64"
      >
        <img
          src={book.imageUrl}
          alt={book.title}
          className="object-fill size-full"
        />
      </Link>
      <Link
        to={`/book?id=${book.bookPid}`}
        className="w-full text-xl h-14 break-words line-clamp-2 hover:underline"
      >
        {book.title}
      </Link>
      <div className="w-full italic h-7 break-words line-clamp-1">
        {book.author}
      </div>
      <div className="flex items-center justify-between">
        <span className="font-bold">{book.price}$</span>
        {cart.some((item) => item.book.bookPid === book.bookPid) ? (
          <Button
            className="relative"
            variant={"outline"}
            onClick={() => removeItem(book.bookPid)}
          >
            <ShoppingCartIcon className="size-full text-green-400 fill-green-400" />
            <CheckIcon className="absolute top-0 right-0 text-green-400" />
          </Button>
        ) : (
          <Button
            variant={"outline"}
            className="hover:bg-green-400"
            onClick={() => addItem(book)}
          >
            <ShoppingCartIcon className="size-full" />
          </Button>
        )}
      </div>
    </div>
  );
};
export default BookCard;
