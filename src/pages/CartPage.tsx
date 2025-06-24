import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/useCartStore";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, totalSum, clearCart } = useCartStore();
  if (cart.length === 0)
    return (
      <div className="text-4xl space-y-8">
        <h3>Your cart is empty</h3>
        <Link to={"/"} className="underline">
          Add
        </Link>
      </div>
    );
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="title">Your Cart</h3>
        {cart.length > 0 && <Button onClick={clearCart}>Clear cart</Button>}
      </div>
      <div className="flex flex-col gap-4 shadow-2xl p-2">
        <div className="px-1 grid grid-cols-[4fr_1fr_2fr_1fr] lg:grid-cols-[6fr_1fr_2fr_1fr] font-semibold">
          <span className="mx-auto">Book</span>
          <span className="mx-auto">Price</span>
          <span className="mx-auto">Amount</span>
          <span className="mx-auto">Total</span>
        </div>
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <CartItem key={item.book.bookPid} item={item} />
          ))}
        </div>
        <div className="grid grid-cols-[4fr_1fr_2fr_1fr] lg:grid-cols-[6fr_1fr_2fr_1fr] font-semibold">
          <span className="col-start-4 font-bold mx-auto">{totalSum}$</span>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
