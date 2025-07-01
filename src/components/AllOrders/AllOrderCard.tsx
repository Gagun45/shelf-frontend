import type { OrderType } from "@/types/types";
import { Card, CardContent, CardHeader } from "../ui/card";

import AllOrderCardChangeStatus from "./AllOrderCardChangeStatus";
import OrderCardContentTitle from "../OrderCard/OrderCardContentTitle";
import OrderCardContentDesc from "../OrderCard/OrderCardContentDesc";
import OrderCardItemsSection from "../OrderCard/OrderCardItemsSection/OrderCardItemsSection";
import { memo } from "react";

const AllOrderCard = ({ order }: { order: OrderType }) => {
  return (
    <Card>
      <CardHeader>
        <AllOrderCardChangeStatus
          orderPid={order.orderPid}
          status={order.status}
        />
      </CardHeader>
      <CardContent>
        <OrderCardContentTitle
          orderPid={order.orderPid}
          status={order.status}
        />
        <OrderCardContentDesc
          booksLength={order.books.length}
          totalPrice={order.totalPrice}
        />
        <OrderCardItemsSection order={order} />
      </CardContent>
    </Card>
  );
};

export default memo(AllOrderCard);
