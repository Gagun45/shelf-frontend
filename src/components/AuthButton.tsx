import { useAuth0 } from "@auth0/auth0-react";
import { useUserStore } from "@/stores/useUserStore";
import { Button } from "./ui/button";

// const REDIRECT_URI = import.meta.env.VITE_AUTH0_REDIRECT_URI;

const AuthButton = () => {
  const { userData } = useUserStore();
  const { loginWithRedirect, logout } = useAuth0();
  return userData ? (
    <Button variant={"destructive"} onClick={() => logout()}>
      Logout
    </Button>
  ) : (
    <Button onClick={() => loginWithRedirect()}>Login</Button>
  );
};
export default AuthButton;
