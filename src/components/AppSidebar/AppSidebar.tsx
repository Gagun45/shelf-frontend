import { Sidebar, SidebarFooter, useSidebar } from "@/components/ui/sidebar";

import Auth from "../header/Auth";
import { Separator } from "../ui/separator";
import AppSidebarHeader from "./AppSidebarHeader";

import type { RoleType } from "@/types/types";
import AppSidebarContent from "./AppSidebarContent";

export const ICON_SIZE = "size-7";

const AppSidebar = ({ role }: { role?: RoleType }) => {
  const { setOpenMobile } = useSidebar();
  return (
    <Sidebar>
      <AppSidebarHeader />
      <Separator />
      <AppSidebarContent role={role} handleOnClick={setOpenMobile} />
      <SidebarFooter className="bg-main h-24 justify-end">
        <Auth />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
