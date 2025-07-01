import type { OrderType } from "@/types/types";
import OrderCardItemsSectionItems from "./OrderCardItemsSectionItems";
import OrderCardItemsSectionTotal from "./OrderCardItemsSectionTotal";

const OrderCardItemsSection = ({ order }: { order: OrderType }) => {
  return (
    <div className="flex flex-col text-base">
      <span>Items:</span>
      <OrderCardItemsSectionItems books={order.books} />
      <OrderCardItemsSectionTotal totalPrice={order.totalPrice} />
    </div>
  );
};
export default OrderCardItemsSection;
