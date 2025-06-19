import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const MainNav = () => {
  const { isAuthenticated, logout, isLoading, loginWithRedirect } = useAuth0();
  const returnTo = import.meta.env.VITE_AUTH0_REDIRECT_URI;

  const handleLogin = async () => {
    await loginWithRedirect();
  };

  if (isLoading) {
    return <></>;
  }

  if (!isAuthenticated) {
    return <Button onClick={handleLogin}>Login</Button>;
  }
  return (
    <div className=" flex items-center justify-center gap-4">
      <Link to={"/add-book"}>Add</Link>
      <Link to={"/my-books"}>My</Link>
      <Button
        onClick={() =>
          logout({
            logoutParams: {
              returnTo,
            },
          })
        }
      >
        Logout
      </Button>
    </div>
  );
};
export default MainNav;
