import { memo } from "react";

const OrderCardItemsSectionTotal = ({ totalPrice }: { totalPrice: number }) => {
  return (
    <div className="grid grid-cols-[1fr_100px]">
      <span className="col-start-2 text-right font-bold">
        Total: {totalPrice}$
      </span>
    </div>
  );
};
export default memo(OrderCardItemsSectionTotal);
