import type { UserType } from "@/types/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useUserData = () => {
  const { getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();
  const [userData, setUserData] = useState<UserType | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = await getAccessTokenSilently();

      if (!token) return;

      const res = await fetch(`${API_BASE_URL}/auth/get-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setUserData(data);
    };
    fetchUserData();
  }, [isAuthenticated, getAccessTokenSilently]);

  return { userData, isLoading };
};
