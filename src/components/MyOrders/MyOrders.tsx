import { useMyOrders } from "@/api/orders";
import Loading from "../Loading";
import { Accordion } from "../ui/accordion";
import MyOrderCard from "./MyOrderCard";
import { useOrderSearchStore } from "@/stores/useOrderSearchStore";
import Pagination from "../SearchOptions/Pagination";
import { ORDER_SORT_OPTIONS } from "@/config/constantas";

const MyOrders = () => {
  const { ordersResponse, isLoading } = useMyOrders();

  const limit = useOrderSearchStore((s) => s.limit);
  const page = useOrderSearchStore((s) => s.page);
  const sortOption = useOrderSearchStore((s) => s.sortOption);
  const setPage = useOrderSearchStore((s) => s.setPage);

  if (isLoading) return <Loading />;

  if (!ordersResponse || ordersResponse.orders?.length === 0)
    return <div className="title">You have no orders yet!</div>;

  const { orders, totalOrders } = ordersResponse;

  return (
    <Accordion type="single" collapsible className="flex flex-col gap-4">
      <h3>
        {totalOrders}{" "}
        {`${ORDER_SORT_OPTIONS.includes(sortOption) ? sortOption : ""} orders`}{" "}
        found
      </h3>
      {orders?.map((order) => (
        <MyOrderCard key={order.orderPid} order={order} />
      ))}
      <Pagination
        totalItems={totalOrders}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </Accordion>
  );
};
export default MyOrders;
