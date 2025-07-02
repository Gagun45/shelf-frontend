import { useAllOrders } from "@/api/orders";
import Loading from "../Loading";

import AllOrderCard from "./AllOrderCard";
import Pagination from "../SearchOptions/Pagination";
import { useOrderSearchStore } from "@/stores/useOrderSearchStore";
import { ORDER_SORT_OPTIONS } from "@/config/constantas";



const AllOrders = () => {
  const { ordersResponse, isLoading } = useAllOrders();
  const limit = useOrderSearchStore((s) => s.limit);
  const page = useOrderSearchStore((s) => s.page);
  const sortOption = useOrderSearchStore((s) => s.sortOption);
  const setPage = useOrderSearchStore((s) => s.setPage);

  if (isLoading) return <Loading />;

  if (!ordersResponse) return <div className="title">No orders yet!</div>;
  const { orders, totalOrders } = ordersResponse;

  return (
    <div className="flex flex-col gap-4">
      <h3>
        {totalOrders}{" "}
        {`${ORDER_SORT_OPTIONS.includes(sortOption) ? sortOption : ""} orders`} found
      </h3>
      {orders?.map((order) => (
        <AllOrderCard key={order.orderPid} order={order} />
      ))}
      <Pagination
        totalItems={totalOrders}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};
export default AllOrders;
