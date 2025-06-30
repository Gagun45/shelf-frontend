import { useCartStore } from "@/stores/useCartStore";
import { useNavigate } from "react-router-dom";
import type { OrderItemInterface, OrderType } from "@/types/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useMyOrders = () => {
  const { getAccessTokenSilently } = useAuth0();
  const fetchMyOrders = async (): Promise<OrderType[]> => {
    const token = await getAccessTokenSilently();
    const res = await fetch(`${API_BASE_URL}/orders/my-orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Something went wrong");
    return res.json();
  };

  const { data: orders, isLoading } = useQuery({
    queryKey: ["myOrders"],
    queryFn: fetchMyOrders,
  });

  return { orders, isLoading };
};

export const useCreateOrder = () => {
  const { getAccessTokenSilently } = useAuth0();
  const { clearCart } = useCartStore();
  const navigate = useNavigate();
  const createAnOrder = async (items: OrderItemInterface[]) => {
    const token = await getAccessTokenSilently();
    const res = await fetch(`${API_BASE_URL}/orders/create-order`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items }),
    });
    if (!res.ok) throw new Error("Something went wrong");
  };
  const {
    mutateAsync: createOrder,
    isSuccess,
    isError,
  } = useMutation({ mutationFn: createAnOrder });
  useEffect(() => {
    toast.error("Something went wrong");
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Order created");
      clearCart();
      navigate("/my-orders");
    }
  }, [isSuccess, clearCart, navigate]);

  return { createOrder, isSuccess };
};
