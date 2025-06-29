import { useMyOrders } from "@/api/orders";
import Loading from "@/components/Loading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { OrderType } from "@/types/types";

const MyOrdersPage = () => {
  const { orders, isLoading } = useMyOrders();

  if (isLoading) return <Loading />;

  if (orders?.length === 0)
    return <div className="title">You have no orders yet!</div>;

  return (
    <div className="space-y-4">
      <div className="title">My Orders: {orders?.length ?? 0}</div>
      <Accordion type="single" collapsible className="flex flex-col gap-4">
        {orders?.map((order) => (
          <OrderComponent key={order.orderPid} order={order} />
        ))}
      </Accordion>
    </div>
  );
};
export default MyOrdersPage;

const OrderComponent = ({ order }: { order: OrderType }) => {
  return (
    <AccordionItem value={order.orderPid} asChild>
      <Card className="">
        <AccordionTrigger className="items-center justify-between pr-4">
          <CardHeader className="w-full ">
            <CardTitle className="w-full">
              <span>Order #{order.orderPid}</span>
            </CardTitle>
            <CardDescription className="flex w-full gap-4">
              <span>Books: {order.books.length}</span>
              <span>Total: {order.totalPrice}$</span>
            </CardDescription>
          </CardHeader>
        </AccordionTrigger>

        <AccordionContent>
          <CardContent>
            <div className="flex flex-col gap-4 text-base">
              <span>Items:</span>
              {order.books.map((book, index) => (
                <div key={book.title} className="grid grid-cols-[1fr_100px]">
                  <span className="border-b-2">
                    {index + 1}. {book.title}
                  </span>
                  <span className="text-right mt-auto font-semibold border-b-2">
                    {book.quantity}*{book.price}
                  </span>
                </div>
              ))}
              <div className="grid grid-cols-[1fr_100px]">
                <span className="col-start-2 text-right font-bold">
                  Total: {order.totalPrice}$
                </span>
              </div>
            </div>
          </CardContent>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
};
