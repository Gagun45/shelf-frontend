import Loading from "@/components/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AuthCallback = () => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  useEffect(() => {
    const createUser = async () => {
      const token = await getAccessTokenSilently();
      const res = await fetch(`${API_BASE_URL}/auth/create-user`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user?.email }),
      });
      if (res.ok) {
        navigate("/");
      }
    };
    if (isAuthenticated && user) {
      createUser();
    }
  }, [isAuthenticated, user, navigate, getAccessTokenSilently]);
  return <Loading />;
};
export default AuthCallback;
