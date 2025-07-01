import type { RoleType } from "@/types/types";
import { SidebarContent } from "../ui/sidebar";
import AppSidebarAdminLinks from "./AppSidebarLinks/AppSidebarAdminLinks";
import AppSidebarCartLink from "./AppSidebarLinks/AppSidebarCartLink";
import AppSidebarPublicLinks from "./AppSidebarLinks/AppSidebarPublicLinks";
import AppSidebarSuperadminLinks from "./AppSidebarLinks/AppSidebarSuperadminLinks";
import AppSidebarUserLinks from "./AppSidebarLinks/AppSidebarUserLinks";
import { memo } from "react";

const AppSidebarContent = ({
  role,
  handleOnClick,
}: {
  role?: RoleType;
  handleOnClick: () => void;
}) => {
  console.log("content");

  return (
    <SidebarContent className="bg-main p-2">
      <AppSidebarPublicLinks handleOnClick={handleOnClick} />
      <AppSidebarUserLinks handleOnClick={handleOnClick} role={role} />
      <div className="mt-auto space-y-2">
        <AppSidebarAdminLinks handleOnClick={handleOnClick} role={role} />
        <AppSidebarSuperadminLinks handleOnClick={handleOnClick} role={role} />
        <AppSidebarCartLink handleOnClick={handleOnClick} />
      </div>
    </SidebarContent>
  );
};
export default memo(AppSidebarContent);
