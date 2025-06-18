import Loading from "@/components/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const apiCall = async () => {
      if (isAuthenticated && user) {
        const token = await getAccessTokenSilently();
        await fetch("http://localhost:7000/api/auth/create-user", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: user.email }),
        });
      }
      navigate("/");
    };
    apiCall();
  }, [user, isAuthenticated, getAccessTokenSilently, navigate]);

  return <Loading />;
};
export default AuthCallback;
