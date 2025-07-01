import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

import Auth from "../header/Auth";
import { Separator } from "../ui/separator";
import AppSidebarHeader from "./AppSidebarHeader";
import AppSidebarPublicLinks from "./AppSidebarLinks/AppSidebarPublicLinks";
import AppSidebarUserLinks from "./AppSidebarLinks/AppSidebarUserLinks";
import AppSidebarAdminLinks from "./AppSidebarLinks/AppSidebarAdminLinks";
import AppSidebarSuperadminLinks from "./AppSidebarLinks/AppSidebarSuperadminLinks";
import AppSidebarCartLink from "./AppSidebarLinks/AppSidebarCartLink";
import type { RoleType } from "@/types/types";

export const ICON_SIZE = "size-7";

const AppSidebar = ({ role }: { role?: RoleType }) => {
  const { setOpenMobile, isMobile } = useSidebar();

  const handleOnClick = () => {
    if (isMobile) setOpenMobile(false);
  };
  return (
    <Sidebar>
      <SidebarHeader className="h-48 items-center justify-center bg-main relative">
        <AppSidebarHeader />
      </SidebarHeader>
      <Separator />
      <SidebarContent className="bg-main p-2">
        <AppSidebarPublicLinks handleOnClick={handleOnClick} />
        <AppSidebarUserLinks handleOnClick={handleOnClick} role={role} />
        <div className="mt-auto space-y-2">
          <AppSidebarAdminLinks handleOnClick={handleOnClick} role={role} />
          <AppSidebarSuperadminLinks
            handleOnClick={handleOnClick}
            role={role}
          />
          <AppSidebarCartLink handleOnClick={handleOnClick} />
        </div>
      </SidebarContent>
      <SidebarFooter className="bg-main h-24 justify-end">
        <Auth />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
