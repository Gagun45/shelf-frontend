import type { StatusType } from "@/types/types";
import { create } from "zustand";

type OrderSortOptionType = StatusType | "all";

interface OrderSearchStore {
  limit: number;
  setLimit: (limit: number) => void;
  page: number;
  setPage: (page: number) => void;
  sortOption: OrderSortOptionType;
  setSortOption: (status: OrderSortOptionType) => void;
}

export const useOrderSearchStore = create<OrderSearchStore>((set) => ({
  limit: 5,
  page: 1,
  setLimit: (limit) => set({ limit }),
  setPage: (page) => set({ page }),
  sortOption: "all",
  setSortOption: (sortOption) => set({ sortOption }),
}));
