import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import type { StatusType } from "@/types/types";
import { Button } from "../ui/button";
import { useEditOrder } from "@/api/orders";
import { XIcon } from "lucide-react";

const AllOrderCardChangeStatus = ({
  status,
  orderPid,
}: {
  status: StatusType;
  orderPid: string;
}) => {
  const [localStatus, setLocalStatus] = useState<StatusType>(status);
  const { editOrder } = useEditOrder();
  return (
    <div className="flex items-center gap-2 flex-wrap ">
      <Select
        value={localStatus}
        onValueChange={(val) => setLocalStatus(val as StatusType)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={localStatus} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem
            value="pending"
            className="bg-yellow-400 focus:bg-yellow-400"
          >
            Pending
          </SelectItem>
          <SelectItem value="cancelled" className="bg-red-400 focus:bg-red-400">
            Cancelled
          </SelectItem>
          <SelectItem
            value="success"
            className="bg-green-400 focus:bg-green-400"
          >
            Success
          </SelectItem>
        </SelectContent>
      </Select>
      <div className="flex items-center gap-2">
        <Button
          onClick={() => editOrder({ status: localStatus, orderPid: orderPid })}
          disabled={localStatus === status}
        >
          Update status
        </Button>
        <Button
          onClick={() => setLocalStatus(status)}
          disabled={localStatus === status}
          className="size-6"
        >
          <XIcon />
        </Button>
      </div>
    </div>
  );
};
export default AllOrderCardChangeStatus;
