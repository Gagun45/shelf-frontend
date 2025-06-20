import { useUserStore } from "@/stores/useUserStore";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useUserData = () => {
  const { getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();
  const userData = useUserStore((state) => state.userData);
  const setUserData = useUserStore((state) => state.setUserData);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!isAuthenticated || userData) return;
      const token = await getAccessTokenSilently();

      const res = await fetch(`${API_BASE_URL}/auth/get-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setUserData(data);
    };

    fetchUserData();
  }, [isAuthenticated, getAccessTokenSilently, userData, setUserData]);

  return { userData, isLoading };
};
