import Loading from "@/components/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return <Loading />;
  if (!isAuthenticated) return <Navigate to={"/"} />;
  return <Outlet />;
};
export default ProtectedRoute;
