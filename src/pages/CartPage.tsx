import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/useCartStore";

const CartPage = () => {
  const { cart, totalSum, changeAmount, setAmount } = useCartStore();
  return (
    <div>
      <h3>Cart Page</h3>
      <div className="flex flex-col">
        {cart.map((item) => (
          <div key={item.book.bookPid}>
            {item.book.title} {item.book.price}
            <div>
              <Button onClick={() => changeAmount(item.book.bookPid, -1)}>
                -
              </Button>
              <input
                type="number"
                min={0}
                value={item.quantity}
                onChange={(e) =>
                  setAmount(item.book.bookPid, parseInt(e.target.value))
                }
              />
              <Button onClick={() => changeAmount(item.book.bookPid, 1)}>
                +
              </Button>
            </div>
          </div>
        ))}
        <span>Total sum: {totalSum}</span>
      </div>
    </div>
  );
};
export default CartPage;
