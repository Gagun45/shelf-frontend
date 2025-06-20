import type { UserType } from "@/types/types";
import { create } from "zustand";

interface UserStore {
  userData: UserType | null;
  setUserData: (data: UserType) => void;
  clearUserData: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userData: null,
  setUserData: (data) => set({ userData: data }),
  clearUserData: () => set({ userData: null }),
}));
