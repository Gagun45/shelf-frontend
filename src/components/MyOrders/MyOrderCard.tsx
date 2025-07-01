import type { OrderType } from "@/types/types";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Card, CardContent, CardHeader } from "../ui/card";

import OrderCardContentTitle from "../OrderCard/OrderCardContentTitle";
import OrderCardContentDesc from "../OrderCard/OrderCardContentDesc";
import OrderCardItemsSection from "../OrderCard/OrderCardItemsSection/OrderCardItemsSection";

const MyOrderCard = ({ order }: { order: OrderType }) => {
  return (
    <AccordionItem value={order.orderPid} asChild>
      <Card className="gap-0">
        <CardHeader>
          <AccordionTrigger>
            <div className="w-full">
              <OrderCardContentTitle
                orderPid={order.orderPid}
                status={order.status}
              />
              <OrderCardContentDesc
                booksLength={order.books.length}
                totalPrice={order.totalPrice}
              />
            </div>
          </AccordionTrigger>
        </CardHeader>
        <AccordionContent>
          <CardContent>
            <OrderCardItemsSection order={order} />
          </CardContent>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
};

export default MyOrderCard;
