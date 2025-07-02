import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/useCartStore";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";

const CartItemChangeAmount = ({
  bookPid,
  quantity,
}: {
  quantity: number;
  bookPid: string;
}) => {
  const removeItem = useCartStore((s) => s.removeItem);
  const changeAmount = useCartStore((s) => s.changeAmount);
  return (
    <div className="flex items-center">
      {quantity === 0 ? (
        <Button
          className="size-8"
          variant={"destructive"}
          onClick={() => removeItem(bookPid)}
        >
          <TrashIcon />
        </Button>
      ) : (
        <Button
          className="size-8"
          variant={"outline"}
          onClick={() => changeAmount(bookPid, -1)}
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
        onClick={() => changeAmount(bookPid, +1)}
      >
        <PlusIcon />
      </Button>
    </div>
  );
};
export default CartItemChangeAmount;
