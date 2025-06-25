import { useUserData } from "@/hooks/useUserData";
import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { LogInIcon, LogOutIcon } from "lucide-react";

const Auth = ({ withText = true }: { withText?: boolean }) => {
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
