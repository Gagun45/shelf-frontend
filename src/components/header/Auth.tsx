import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { LogOutIcon } from "lucide-react";
import LoginPopUp from "../LoginPopUp";
import { useUserStore } from "@/stores/useUserStore";

const Auth = ({ withText = true }: { withText?: boolean }) => {
  const { logout } = useAuth0();
  const { userData } = useUserStore();

  const returnTo = import.meta.env.VITE_AUTH0_REDIRECT_URI;

  return (
    <>
      {userData ? (
        <Button
          className="bg-destructive hover:bg-destructive"
          onClick={async () => {
            logout({ logoutParams: { returnTo } });
          }}
        >
          <LogOutIcon />
          {withText && <span>Logout</span>}
        </Button>
      ) : (
        <LoginPopUp />
      )}
    </>
  );
};
export default Auth;
