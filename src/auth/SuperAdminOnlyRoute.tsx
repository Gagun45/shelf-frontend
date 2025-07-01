import { useUserStore } from "@/stores/useUserStore";
import { Navigate, Outlet } from "react-router-dom";

const SuperAdminOnlyRoute = () => {
  const { userData } = useUserStore();
  if (userData?.role !== "superadmin") return <Navigate to={"/"} />;
  return <Outlet />;
};
export default SuperAdminOnlyRoute;
