import AllOrders from "@/components/AllOrders/AllOrders";
import OrderPagesLayout from "@/layouts/OrderPagesLayout";

const AllOrdersPage = () => {
  return (
    <OrderPagesLayout heading="All Orders">
      <AllOrders />
    </OrderPagesLayout>
  );
};
export default AllOrdersPage;
