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
    <div className="flex flex-col w-34 xs:w-40 gap-1 border-1 px-4 py-2 shadow-2xl rounded-xl">
      <Link
        to={`/book?id=${book.bookPid}`}
        className="cursor-pointer h-40 flex-shrink-0 outline-1"
      >
        <img
          src={book.imageUrl}
          alt={book.title}
          className="object-contain size-full"
        />
      </Link>
      <Link
        to={`/book?id=${book.bookPid}`}
        className="w-full font-semibold break-words line-clamp-2 hover:underline"
      >
        {book.title}
      </Link>

      <span className="w-full text-sm  italic line-clamp-2">
        {book.author}
      </span>
      <span className="italic text-xs line-clamp-2">
        {book.language}, {book.publishYear}
      </span>
      <div className="flex mt-auto flex-col xs:flex-row gap-1 items-center justify-between">
        <span className="font-bold">{book.price}$</span>
        {cart.some((item) => item.book.bookPid === book.bookPid) ? (
          <Button
            className="relative bg-green-400 hover:bg-destructive/50"
            variant={"outline"}
            onClick={() => removeItem(book.bookPid)}
          >
            <ShoppingCartIcon className="size-full" />
            <CheckIcon className="absolute top-0 right-0" />
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
