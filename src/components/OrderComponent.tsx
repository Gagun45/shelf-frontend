import type { OrderType, StatusType } from "@/types/types";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { memo, useState } from "react";
import { Button } from "./ui/button";
import { useEditOrder } from "@/api/orders";
import { XIcon } from "lucide-react";

const OrderComponent = ({
  order,
  superadmin = false,
}: {
  order: OrderType;
  superadmin?: boolean;
}) => {
  const [localStatus, setLocalStatus] = useState<StatusType>(order.status);
  const { editOrder } = useEditOrder();

  let orderStatusClassName;
  switch (order.status) {
    case "pending": {
      orderStatusClassName = "bg-yellow-400";
      break;
    }
    case "cancelled": {
      orderStatusClassName = "bg-red-400";
      break;
    }
    case "success": {
      orderStatusClassName = "bg-green-400";
      break;
    }
  }
  return (
    <AccordionItem value={order.orderPid} asChild>
      <Card className="gap-0">
        <CardHeader>
          {superadmin && (
            <div className="flex items-center gap-4">
              <Select
                value={localStatus}
                onValueChange={(val) => setLocalStatus(val as StatusType)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={localStatus} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">pending</SelectItem>
                  <SelectItem value="cancelled">cancelled</SelectItem>
                  <SelectItem value="success">success</SelectItem>
                </SelectContent>
              </Select>
              <Button
                onClick={() =>
                  editOrder({ status: localStatus, orderPid: order.orderPid })
                }
                disabled={localStatus === order.status}
              >
                Update status
              </Button>
              <Button
                onClick={() => setLocalStatus(order.status)}
                disabled={localStatus === order.status}
                className="size-6"
              >
                <XIcon />
              </Button>
            </div>
          )}
        </CardHeader>
        <AccordionTrigger className="items-center justify-between pr-4">
          <CardContent className="w-full ">
            <CardTitle className="grid grid-cols-[1fr_100px]">
              <span>Order #{order.orderPid}</span>
              <span
                className={`${orderStatusClassName} px-2 py-0.5 w-fit rounded-md flex items-center justify-center`}
              >
                {order.status}
              </span>
            </CardTitle>
            <CardDescription className="flex w-full gap-4">
              <span>Books: {order.books.length}</span>
              <span>Total: {order.totalPrice}$</span>
            </CardDescription>
          </CardContent>
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

export default memo(OrderComponent);
