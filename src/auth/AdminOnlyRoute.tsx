import { useUserStore } from "@/stores/useUserStore";
import { Navigate, Outlet } from "react-router-dom";

const AdminOnlyRoute = () => {
  const allowedRoles = ["admin", "superadmin"];
  const { userData } = useUserStore();
  if (!userData) return <Navigate to={"/"} />;
  if (!allowedRoles.includes(userData.role)) return <Navigate to={"/"} />;
  return <Outlet />;
};
export default AdminOnlyRoute;
