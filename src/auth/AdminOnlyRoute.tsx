import { useUserStore } from "@/stores/useUserStore";
import { Navigate, Outlet } from "react-router-dom";

const AdminOnlyRoute = () => {
  const { userData } = useUserStore();
  if (userData?.role !== "admin") return <Navigate to={"/"} />;
  return <Outlet />;
};
export default AdminOnlyRoute;
