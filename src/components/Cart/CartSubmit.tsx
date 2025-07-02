import { useCreateOrder } from "@/api/orders";
import { Button } from "../ui/button";
import { useUserStore } from "@/stores/useUserStore";
import type { CartItemInterface } from "@/stores/useCartStore";
import type { OrderItemInterface } from "@/types/types";
import LoginPopUp from "../LoginPopUp";

const CartSubmit = ({ cart }: { cart: CartItemInterface[] }) => {
  const { createOrder } = useCreateOrder();
  const { userData } = useUserStore();

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
  return (
    <div className="flex justify-end">
      {userData ? (
        <Button disabled={!isEnabled} onClick={handleSubmitCart}>
          Order
        </Button>
      ) : (
        <LoginPopUp />
      )}
    </div>
  );
};
export default CartSubmit;
