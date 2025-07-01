import { useAllOrders } from "@/api/orders";
import Loading from "@/components/Loading";
import OrderComponent from "@/components/OrderComponent";
import { Accordion } from "@/components/ui/accordion";

const AllOrdersPage = () => {
  const { orders, isLoading } = useAllOrders();

  if (isLoading) return <Loading />;

  if (!orders || orders?.length === 0)
    return <div className="title">No orders yet!</div>;

  return (
    <div className="space-y-4">
      <div className="title">All Orders: {orders.length}</div>
      <Accordion type="single" collapsible className="flex flex-col gap-4">
        {orders?.map((order) => (
          <OrderComponent
            key={order.orderPid}
            superadmin={true}
            order={order}
          />
        ))}
      </Accordion>
    </div>
  );
};
export default AllOrdersPage;
