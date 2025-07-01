import { CardDescription } from "../ui/card";

const OrderCardContentDesc = ({
  booksLength,
  totalPrice,
}: {
  booksLength: number;
  totalPrice: number;
}) => {
  return (
    <CardDescription className="flex w-full gap-4">
      <span>Books: {booksLength}</span>
      <span>Total: {totalPrice}$</span>
    </CardDescription>
  );
};
export default OrderCardContentDesc;
