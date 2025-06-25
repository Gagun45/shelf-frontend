import { useUserData } from "@/hooks/useUserData";
import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { LogInIcon, LogOutIcon } from "lucide-react";

const Auth = () => {
  const { logout, loginWithRedirect } = useAuth0();
  const { userData, isLoading } = useUserData();

  if (isLoading) {
    return <></>;
  }
  return (
    <>
      {userData ? (
        <Button className="w-fit" onClick={() => logout()}>
          <LogOutIcon />
          Logout
        </Button>
      ) : (
        <Button onClick={() => loginWithRedirect()} className="w-fit">
          <LogInIcon />
          Login
        </Button>
      )}
    </>
  );
};
export default Auth;
