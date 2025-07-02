import { useCartStore, type CartItemInterface } from "@/stores/useCartStore";
import { Button } from "../../ui/button";
import { TrashIcon } from "lucide-react";
import CartItemInfo from "./CartItemInfo";
import CartItemChangeAmount from "./CartItemChangeAmount";

type Props = {
  item: CartItemInterface;
};

const CartItem = ({ item: { book, quantity } }: Props) => {
  const removeItem = useCartStore((s) => s.removeItem);

  return (
    <div className="grid grid-cols-[5fr_1fr] gap-y-4 p-1 sm:p-2 outline-1">
      <CartItemInfo book={book} />
      <Button
        className="size-8 ml-auto my-auto"
        variant={"destructive"}
        onClick={() => removeItem(book.bookPid)}
      >
        <TrashIcon />
      </Button>
      <CartItemChangeAmount bookPid={book.bookPid} quantity={quantity} />
      <span className="flex items-center font-semibold ml-auto">
        {quantity * book.price}$
      </span>
    </div>
  );
};
export default CartItem;
