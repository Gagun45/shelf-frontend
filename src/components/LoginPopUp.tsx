import { useAuth0 } from "@auth0/auth0-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { useEffect, useState } from "react";
import { useUserStore } from "@/stores/useUserStore";
import { Button } from "./ui/button";
import Loading from "./Loading";
import { toast } from "sonner";
import { XIcon } from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const LoginPopUp = () => {
  const [open, setOpen] = useState(false);
  const { userData } = useUserStore();
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button>Login</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex flex-wrap relative">
            <Loading />
            <Button className="absolute top-0 right-0" onClick={() => setOpen(false)}>
              <XIcon />
            </Button>
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            Keep the window open until the login process is done. Closing this
            window will prevent login proccess to be finished
          </AlertDialogDescription>
          {!userData && <ProcessPopUp setOpen={setOpen} />}
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default LoginPopUp;

const ProcessPopUp = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { loginWithPopup, user, getAccessTokenSilently, error, logout } =
    useAuth0();
  const { setUserData } = useUserStore();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const authProcess = async () => {
      if (!user) {
        await loginWithPopup();
        if (error?.message === "Popup closed") setOpen(false);

        return;
      }
      const token = await getAccessTokenSilently();
      const res = await fetch(`${API_BASE_URL}/auth/create-user`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email }),
      });
      if (!res.ok) {
        logout();
        return;
      }
      setLoading(true);
      const resGet = await fetch(`${API_BASE_URL}/auth/get-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!resGet.ok) {
        await logout();
        setOpen(false);
        setLoading(false);
        toast.error("Logging failed");
      }
      const data = await resGet.json();
      setUserData(data);
      setLoading(false);
      setOpen(false);
      toast.success("Logged in");
    };
    authProcess();
  }, [
    user,
    loginWithPopup,
    getAccessTokenSilently,
    logout,
    setUserData,
    error?.message,
    setOpen,
  ]);

  if (loading) return <span className="text-center">Fetching user data...</span>;
};
