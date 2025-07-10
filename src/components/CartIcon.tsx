import { useCartStore } from "@/stores/useCartStore";
import { LucideShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const CartIcon = ({ className }: { className?: string }) => {
  const { cart } = useCartStore();
  return (
    <div className={`relative ${className}`}>
      <Link to={"/cart"} className={`relative `}>
        <LucideShoppingCart className="size-9" />
      </Link>
      <span className="absolute bg-amber-900 text-sm size-6 flex items-center justify-center rounded-full -top-1/3 -right-1/3">
        {cart.length}
      </span>
    </div>
  );
};
export default CartIcon;
