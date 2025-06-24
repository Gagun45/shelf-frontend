import { useCartStore, type CartItemInterface } from "@/stores/useCartStore";
import { Button } from "./ui/button";
import { TrashIcon } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  item: CartItemInterface;
};

const CartItem = ({ item }: Props) => {
  const { changeAmount, removeItem } = useCartStore();
  return (
    <div className="grid p-1 grid-cols-[4fr_1fr_2fr_1fr] lg:grid-cols-[6fr_1fr_2fr_1fr] border-b-1">
      <div className="flex items-center gap-2">
        <div className="size-24 flex-shrink-0 hidden lg:flex">
          <img src={item.book.imageUrl} className="object-contain size-full" />
        </div>
        <div className="flex flex-col">
          <Link
            to={`/book?id=${item.book.bookPid}`}
            className="underline line-clamp-1"
          >
            {item.book.title}
          </Link>
          <span className="italic text-xs">{item.book.author}</span>
        </div>
        <Button
          className="size-8 ml-auto"
          variant={"destructive"}
          onClick={() => removeItem(item.book.bookPid)}
        >
          <TrashIcon className="size-4" />
        </Button>
      </div>
      <span className="flex items-center justify-center">
        {item.book.price}$
      </span>
      <div className="flex items-center justify-center">
        {item.quantity === 0 ? (
          <Button
            className="size-8"
            variant={"destructive"}
            onClick={() => removeItem(item.book.bookPid)}
          >
            <TrashIcon />
          </Button>
        ) : (
          <Button
            className="size-8"
            onClick={() => changeAmount(item.book.bookPid, -1)}
          >
            -
          </Button>
        )}
        <span className="size-8 flex items-center justify-center">
          {item.quantity}
        </span>
        <Button
          className="size-8"
          onClick={() => changeAmount(item.book.bookPid, +1)}
        >
          +
        </Button>
      </div>
      <span className="font-semibold flex items-center justify-center">
        {item.book.price * item.quantity}$
      </span>
    </div>
  );
};
export default CartItem;
