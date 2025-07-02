import { useCartStore } from "@/stores/useCartStore";
import { useNavigate } from "react-router-dom";
import type {
  OrderItemInterface,
  OrdersResponse,
  StatusType,
} from "@/types/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useEffect } from "react";
import { useOrderQuery } from "@/hooks/useOrderQuery";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useMyOrders = () => {
  const { getAccessTokenSilently } = useAuth0();
  const orderQuery = useOrderQuery();
  const fetchMyOrders = async (): Promise<OrdersResponse> => {
    const token = await getAccessTokenSilently();
    const res = await fetch(`${API_BASE_URL}/orders/my-orders?${orderQuery}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Something went wrong");
    return res.json();
  };

  const { data: ordersResponse, isLoading } = useQuery({
    queryKey: ["myOrders", orderQuery],
    queryFn: fetchMyOrders,
  });

  return { ordersResponse, isLoading };
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
    if (isError) toast.error("Something went wrong");
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

export const useAllOrders = () => {
  const { getAccessTokenSilently } = useAuth0();
  const orderQuery = useOrderQuery();

  const fetchAllOrders = async (): Promise<OrdersResponse> => {
    const token = await getAccessTokenSilently();
    const res = await fetch(`${API_BASE_URL}/orders/all-orders?${orderQuery}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Something went wrong");
    return res.json();
  };

  const { data: ordersResponse, isLoading } = useQuery({
    queryKey: ["allOrders", orderQuery],
    queryFn: fetchAllOrders,
  });

  return { ordersResponse, isLoading };
};

export const useEditOrder = () => {
  const { getAccessTokenSilently } = useAuth0();
  const qClient = useQueryClient();
  const editOrderRequest = async ({
    status,
    orderPid,
  }: {
    status: StatusType;
    orderPid: string;
  }) => {
    const token = await getAccessTokenSilently();
    const res = await fetch(`${API_BASE_URL}/orders/edit-order`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status, orderPid }),
    });
    if (!res.ok) throw new Error("Something went wrong");
  };
  const {
    mutateAsync: editOrder,
    isSuccess,
    isError,
  } = useMutation({ mutationFn: editOrderRequest });
  useEffect(() => {
    if (isError) toast.error("Something went wrong");
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Order edited");
      qClient.invalidateQueries({ queryKey: ["allOrders"] });
    }
  }, [isSuccess, qClient]);

  return { editOrder, isSuccess };
};
