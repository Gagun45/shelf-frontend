import { useUserStore } from "@/stores/useUserStore";
import { BellRingIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { toast } from "sonner";
const SOCKET_URL = import.meta.env.VITE_SOCKET_BASE_URL;
const socket = io(SOCKET_URL);

const Notification = () => {
  const { userData } = useUserStore();
  const [nots, setNots] = useState<string[]>([]);
  useEffect(() => {
    if (userData) {
      console.log("registering???");
      socket.emit("register", userData?.userPid);
    }
  }, [userData]);
  useEffect(() => {
    socket.on("private_message", (data) => {
      setNots((prev) => [...prev, data.message]);
      toast.message('Order status update')
    });
    socket.on("receive_message", (data) => {
      console.log("DATA ", data);
    });
    return () => {
      socket.off("private_message");
      socket.off('receive_message')
    };
  }, []);
  useEffect(() => {
    if (nots.length > 0) console.log(nots);
  }, [nots]);
  return (
    <div className={"relative"}>
      <span className="absolute bg-amber-400 text-sm size-6 flex items-center justify-center rounded-full -top-1/3 -right-1/3">
        {nots.length}
      </span>
      <BellRingIcon className="size-9" />
    </div>
  );
};
export default Notification;
