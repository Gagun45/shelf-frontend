import type { UserType } from "@/types/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserStore {
  userData: UserType | null;
  setUserData: (data: UserType) => void;
  clearUserData: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      userData: null,
      setUserData: (data) => set({ userData: data }),
      clearUserData: () => {
        set({ userData: null });
      },
    }),
    { name: "user-storage", storage: createJSONStorage(() => localStorage) }
  )
);
