import { useAllOrders } from "@/api/orders";
import Loading from "../Loading";

import AllOrderCard from "./AllOrderCard";

const AllOrders = () => {
  const { orders, isLoading } = useAllOrders();

  if (isLoading) return <Loading />;

  if (!orders || orders?.length === 0)
    return <div className="title">No orders yet!</div>;

  return (
    <div className="flex flex-col gap-4">
      {orders?.map((order) => (
        <AllOrderCard key={order.orderPid} order={order} />
      ))}
    </div>
  );
};
export default AllOrders;
