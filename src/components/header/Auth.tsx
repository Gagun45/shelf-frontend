import { useUserData } from "@/hooks/useUserData";
import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { LogInIcon, LogOutIcon } from "lucide-react";
import React from "react";

const Auth = ({ withText = true }: { withText?: boolean }) => {
  const { logout, loginWithRedirect } = useAuth0();
  const { userData, isLoading } = useUserData();

  const returnTo = import.meta.env.VITE_AUTH0_REDIRECT_URI;

  if (isLoading) {
    return <></>;
  }
  return (
    <>
      {userData ? (
        <Button
          className="w-fit bg-destructive hover:bg-destructive"
          onClick={() => logout({ logoutParams: { returnTo } })}
        >
          <LogOutIcon />
          {withText && <span>Logout</span>}
        </Button>
      ) : (
        <Button onClick={() => loginWithRedirect()} className="w-fit">
          <LogInIcon />
          {withText && <span>Login</span>}
        </Button>
      )}
    </>
  );
};
export default Auth;
