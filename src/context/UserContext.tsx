import { useUserData } from "@/hooks/useUserData";
import type { UserType } from "@/types/types";
import { createContext, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type ContextType = {
  userData: UserType | null;
  isLoading: boolean;
};

const UserContext = createContext<ContextType | null>(null);

export const UserProvider = ({ children }: Props) => {
  const { userData, isLoading } = useUserData();
  return (
    <UserContext.Provider value={{ userData, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};
