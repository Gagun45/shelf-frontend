import { ShoppingBasketIcon } from "lucide-react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className="text-4xl mt-16 flex flex-col gap-12 items-center justify-center">
      <h3 className="italic">Your cart is empty</h3>
      <ShoppingBasketIcon className="size-36" />
      <Link to={"/"} className="underline">
        Explore the Shelf
      </Link>
    </div>
  );
};
export default CartEmpty;
