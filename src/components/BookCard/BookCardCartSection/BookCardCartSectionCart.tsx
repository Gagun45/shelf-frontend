import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/useCartStore";
import type { BookType } from "@/types/types";
import { CheckIcon, ShoppingCartIcon } from "lucide-react";

const BookCardCartSectionCart = ({ book }: { book: BookType }) => {
  const { cart, removeItem, addItem } = useCartStore();
  return (
    <>
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
    </>
  );
};
export default BookCardCartSectionCart;
