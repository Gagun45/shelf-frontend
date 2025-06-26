import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/useCartStore";
import { ShoppingBasketIcon } from "lucide-react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, totalSum, clearCart } = useCartStore();
  if (cart.length === 0)
    return (
      <div className="text-4xl mt-16 flex flex-col gap-12 items-center justify-center">
        <h3 className="italic">Your cart is empty</h3>
        <ShoppingBasketIcon className="size-36" />
        <Link to={"/"} className="underline">
          Explore the Shelf
        </Link>
      </div>
    );
  return (
    <div className="space-y-4 mx-auto max-w-4xl">
      <div className="flex items-center justify-between">
        <h3 className="title">Your Cart</h3>
        {cart.length > 0 && <Button onClick={clearCart}>Clear cart</Button>}
      </div>
      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <CartItem key={item.book.bookPid} item={item} />
        ))}
      </div>
      <span className="flex justify-end">
        <span className="italic">Total:&nbsp;</span>
        <span className="font-bold"> {totalSum}$</span>
      </span>
    </div>
  );
};
export default CartPage;
