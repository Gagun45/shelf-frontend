import { useAuth0 } from "@auth0/auth0-react";
import { useUserStore } from "@/stores/useUserStore";
import { Button } from "./ui/button";

const LOGOUT_REDIRECT_URL = import.meta.env.VITE_AUTH0_LOGOUT_REDIRECT_URI;

const AuthButton = () => {
  const { userData } = useUserStore();
  const { loginWithRedirect, logout } = useAuth0();
  return userData ? (
    <Button
      variant={"destructive"}
      onClick={() =>
        logout({ logoutParams: { returnTo: LOGOUT_REDIRECT_URL } })
      }
    >
      Logout
    </Button>
  ) : (
    <Button onClick={() => loginWithRedirect()}>Login</Button>
  );
};
export default AuthButton;
