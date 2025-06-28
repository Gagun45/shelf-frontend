import Loading from "@/components/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, getAccessTokenSilently, logout } = useAuth0();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    // const apiCall = async () => {
    //   if (isAuthenticated && user) {
    //     const token = await getAccessTokenSilently();
    //     const res = await fetch(`${API_BASE_URL}/auth/create-user`, {
    //       method: "POST",
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ email: user.email }),
    //     });
    //     if (!res.ok) {
    //       logout();
    //     }
    //   }
    //   navigate("/");
    // };
    navigate("/");
    // apiCall();
  }, [
    user,
    isAuthenticated,
    getAccessTokenSilently,
    navigate,
    API_BASE_URL,
    logout,
  ]);

  return <Loading />;
};
export default AuthCallback;
