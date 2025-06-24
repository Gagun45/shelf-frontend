import { useCartStore, type CartItemInterface } from "@/stores/useCartStore";
import { Button } from "./ui/button";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  item: CartItemInterface;
};

const CartItem = ({ item: { book, quantity } }: Props) => {
  const { changeAmount, removeItem } = useCartStore();

  return (
    <div className="grid grid-cols-[5fr_1fr] gap-y-4 p-1 sm:p-2 outline-1">
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
      <Button
        className="size-8 ml-auto my-auto"
        variant={"destructive"}
        onClick={() => removeItem(book.bookPid)}
      >
        <TrashIcon />
      </Button>
      <div className="flex items-center">
        {quantity === 0 ? (
          <Button
            className="size-8"
            variant={"destructive"}
            onClick={() => removeItem(book.bookPid)}
          >
            <TrashIcon />
          </Button>
        ) : (
          <Button
            className="size-8"
            variant={"outline"}
            onClick={() => changeAmount(book.bookPid, -1)}
          >
            <MinusIcon />
          </Button>
        )}
        <span className="size-8 flex items-center justify-center">
          {quantity}
        </span>
        <Button
          className="size-8"
          variant={"outline"}
          onClick={() => changeAmount(book.bookPid, +1)}
        >
          <PlusIcon />
        </Button>
      </div>
      <span className="flex items-center font-semibold ml-auto">
        {quantity * book.price}$
      </span>
    </div>
  );
};
export default CartItem;
