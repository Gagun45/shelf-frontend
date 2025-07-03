import type { NotificationInterface } from "@/types/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useMyNotifications = () => {
  const route = `${API_BASE_URL}/notifications/my-notifications`;
  const { getAccessTokenSilently } = useAuth0();
  const fetchMyNotifications = async (): Promise<NotificationInterface[]> => {
    const token = await getAccessTokenSilently();
    const res = await fetch(route, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Failed to fetch my notifications");
    return res.json();
  };

  const { data: notifications, isLoading } = useQuery({
    queryKey: ["myNotifications"],
    queryFn: fetchMyNotifications,
  });

  return { notifications, isLoading };
};
