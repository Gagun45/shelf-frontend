import { useCreateOrder } from "@/api/orders";
import CartItem from "@/components/CartItem";
import ClearCartAlert from "@/components/ClearCartAlert";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/useCartStore";
import type { OrderItemInterface } from "@/types/types";
import { ShoppingBasketIcon } from "lucide-react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, totalSum } = useCartStore();
  const { createOrder } = useCreateOrder();

  const isEnabled = cart.some((item) => item.quantity > 0);

  const handleSubmitCart = () => {
    const items: OrderItemInterface[] = [];
    cart.forEach((item) => {
      if (item.quantity > 0) {
        items.push({ bookPid: item.book.bookPid, quantity: item.quantity });
      }
    });
    createOrder(items);
  };
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
        {cart.length > 0 && <ClearCartAlert />}
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
      <div className="flex justify-end">
        <Button disabled={!isEnabled} onClick={handleSubmitCart}>
          Order
        </Button>
      </div>
    </div>
  );
};
export default CartPage;
