import AppSidebar from "@/components/AppSidebar/AppSidebar";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useUserStore } from "@/stores/useUserStore";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const { clearUserData, userData } = useUserStore();

  useEffect(() => {
    if (isLoading) return;
    if (!isAuthenticated) clearUserData();
  }, [isAuthenticated, clearUserData, isLoading]);
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
