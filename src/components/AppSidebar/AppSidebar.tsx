import { Sidebar, SidebarFooter, useSidebar } from "@/components/ui/sidebar";

import Auth from "../header/Auth";
import { Separator } from "../ui/separator";
import AppSidebarHeader from "./AppSidebarHeader";

import type { RoleType } from "@/types/types";
import AppSidebarContent from "./AppSidebarContent";
import { memo, useCallback } from "react";

export const ICON_SIZE = "size-7";

const AppSidebar = ({ role }: { role?: RoleType }) => {
  console.log("sidebar");
  const { isMobile, setOpenMobile } = useSidebar();
  const handleOnClick = useCallback(() => {
    if (isMobile) setOpenMobile(false);
  }, []);

  return (
    <Sidebar>
      <AppSidebarHeader />
      <Separator />
      <AppSidebarContent role={role} handleOnClick={handleOnClick} />
      <SidebarFooter className="bg-main h-24 justify-end">
        <Auth />
      </SidebarFooter>
    </Sidebar>
  );
};

export default memo(AppSidebar);
