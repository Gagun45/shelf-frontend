import { useUserStore } from "@/stores/useUserStore";
import { Navigate, Outlet } from "react-router-dom";

const LoggedOnlyRoute = () => {
  const { userData } = useUserStore();
  if (!userData) return <Navigate to={"/"} />;
  return <Outlet />;
};
export default LoggedOnlyRoute;
