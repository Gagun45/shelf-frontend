import AppSidebar from "@/components/AppSidebar/AppSidebar";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useUserStore } from "@/stores/useUserStore";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const MainLayout = () => {
  const { isAuthenticated, isLoading, getAccessTokenSilently, logout } =
    useAuth0();
  const { clearUserData, userData, setUserData } = useUserStore();

  useEffect(() => {
    if (isLoading) return;
    if (!isAuthenticated && userData) {
      clearUserData();
      return;
    }
    const getUser = async () => {
      const token = await getAccessTokenSilently();
      const res = await fetch(`${API_BASE_URL}/auth/get-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        logout();
        return;
      }
      const data = await res.json();
      setUserData(data);
    };
    if (isAuthenticated && !userData) getUser();
  }, [
    isAuthenticated,
    clearUserData,
    isLoading,
    userData,
    logout,
    getAccessTokenSilently,
    setUserData,
  ]);
  return (
    <SidebarProvider open={true}>
      <AppSidebar role={userData?.role} />
      <div className="min-h-screen w-screen">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};
export default MainLayout;
