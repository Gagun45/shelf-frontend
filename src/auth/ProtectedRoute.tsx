import { useUserStore } from "@/stores/useUserStore";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { userData } = useUserStore();
  if (!userData) return <Navigate to={"/"} />;
  return <Outlet />;
};
export default ProtectedRoute;
