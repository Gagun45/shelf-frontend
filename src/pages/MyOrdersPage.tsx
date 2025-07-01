import MyOrders from "@/components/MyOrders/MyOrders";

const MyOrdersPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="title">My Orders</h2>
      <MyOrders />
    </div>
  );
};
export default MyOrdersPage;
