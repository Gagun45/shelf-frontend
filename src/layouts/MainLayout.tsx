import { AppSidebar } from "@/components/AppSidebar";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
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
