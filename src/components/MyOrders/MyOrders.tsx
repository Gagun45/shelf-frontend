import { useMyOrders } from "@/api/orders";
import Loading from "../Loading";
import { Accordion } from "../ui/accordion";
import MyOrderCard from "./MyOrderCard";

const MyOrders = () => {
  const { orders, isLoading } = useMyOrders();

  if (isLoading) return <Loading />;

  if (!orders || orders?.length === 0)
    return <div className="title">You have no orders yet!</div>;

  return (
    <Accordion type="single" collapsible className="flex flex-col gap-4">
      {orders?.map((order) => (
        <MyOrderCard key={order.orderPid} order={order} />
      ))}
    </Accordion>
  );
};
export default MyOrders;
