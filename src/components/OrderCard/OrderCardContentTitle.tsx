import { CardTitle } from "../ui/card";

const OrderCardContentTitle = ({
  status,
  orderPid,
}: {
  status: string;
  orderPid: string;
}) => {
  let orderStatusClassName;
  switch (status) {
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
    <CardTitle className="grid grid-cols-[1fr_100px]">
      <span>Order #{orderPid}</span>
      <span
        className={`${orderStatusClassName} px-2 py-0.5 rounded-md flex items-center justify-center`}
      >
        {`${status[0].toLocaleUpperCase()}${status.slice(1)}`}
      </span>
    </CardTitle>
  );
};
export default OrderCardContentTitle;
