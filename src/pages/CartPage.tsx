import CartEmpty from "@/components/Cart/CartEmpty";
import CartHeader from "@/components/Cart/CartHeader";
import CartItem from "@/components/Cart/CartItem/CartItem";
import CartSubmit from "@/components/Cart/CartSubmit";

import { useCartStore } from "@/stores/useCartStore";

const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const totalSum = useCartStore((state) => state.totalSum);

  if (cart.length === 0) return <CartEmpty />;
  return (
    <div className="space-y-4 mx-auto max-w-4xl">
      <CartHeader cartLength={cart.length} />
      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <CartItem key={item.book.bookPid} item={item} />
        ))}
      </div>
      <span className="flex justify-end">
        <span className="italic">Total:&nbsp;</span>
        <span className="font-bold"> {totalSum}$</span>
      </span>
      <CartSubmit cart={cart} />
    </div>
  );
};
export default CartPage;
