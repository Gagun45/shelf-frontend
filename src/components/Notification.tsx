import { useUserStore } from "@/stores/useUserStore";
import { BellRingIcon, CheckIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { toast } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useMyNotifications } from "@/api/notifications";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
const SOCKET_URL = import.meta.env.VITE_SOCKET_BASE_URL;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const socket = io(SOCKET_URL);

const Notification = () => {
  const qClient = useQueryClient();
  const { userData } = useUserStore();
  const { notifications } = useMyNotifications();

  const { getAccessTokenSilently } = useAuth0();

  const [newNots, setNewNots] = useState(456);
  useEffect(() => {
    if (userData?.userPid) {
      socket.emit("register", userData?.userPid);
    }
  }, [userData?.userPid]);
  useEffect(() => {
    const notReadNotifications = notifications?.filter(
      (not) => not.status === "notRead"
    ).length;
    setNewNots(notReadNotifications ?? 0);
    if (!notifications) return;
    socket.on("private_message", (data) => {
      toast.message(data.message);
      qClient.invalidateQueries({ queryKey: ["myNotifications"] });
    });
    socket.on("receive_message", (data) => {
      console.log("DATA ", data);
    });
    return () => {
      socket.off("private_message");
      socket.off("receive_message");
    };
  }, [notifications, qClient]);

  const handleMarkAsRead = async (notificationPid: string) => {
    const token = await getAccessTokenSilently();
    const route = `${API_BASE_URL}/notifications/update-status`;
    const res = await fetch(route, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ notificationPid }),
    });

    if (res.ok) {
      qClient.invalidateQueries({ queryKey: ["myNotifications"] });
    }
  };
  return (
    <Sheet>
      <SheetTrigger>
        <div className={"relative"}>
          <span className="absolute bg-amber-400 text-sm size-6 flex items-center justify-center rounded-full -top-1/3 -right-1/3">
            {newNots}
          </span>
          <BellRingIcon className="size-9" />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-3xl">Your notifications</SheetTitle>
          <SheetDescription>
            <div className="flex flex-col gap-2">
              {notifications &&
                notifications.map(({ message, status, notificationPid }) => (
                  <div
                    className={`${
                      status === "notRead" && "bg-accent"
                    } p-2 border-2 flex items-center rounded-md`}
                  >
                    <span>{message}</span>
                    {status === "notRead" && (
                      <Button
                        className="ml-auto size-5 rounded-xs"
                        size={'icon'}
                        onClick={() => handleMarkAsRead(notificationPid)}
                      >
                        <CheckIcon />
                      </Button>
                    )}
                  </div>
                ))}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
export default Notification;
