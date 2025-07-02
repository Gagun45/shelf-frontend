import MyOrders from "@/components/MyOrders/MyOrders";
import OrderPagesLayout from "@/layouts/OrderPagesLayout";

const MyOrdersPage = () => {
  return (
    <OrderPagesLayout heading="My Orders">
      <MyOrders />
    </OrderPagesLayout>
  );
};
export default MyOrdersPage;
