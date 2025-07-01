import AppSidebarLinksLayout from "./AppSidebarLinksLayout";
import type { LinkInt, RoleType } from "@/types/types";
import { KeyIcon } from "lucide-react";
import { ICON_SIZE } from "../AppSidebar";

const AppSidebarSuperadminLinks = ({
  handleOnClick,
  role,
}: {
  handleOnClick: () => void;
  role?: RoleType;
}) => {
  const SUPERADMIN_LINKS: LinkInt[] = [
    {
      icon: <KeyIcon className={ICON_SIZE} />,
      title: "All Orders",
      to: "/all-orders",
    },
  ];

  if (role !== "superadmin") return null;
  return (
    <AppSidebarLinksLayout
      links={SUPERADMIN_LINKS}
      handleOnClick={handleOnClick}
    />
  );
};
export default AppSidebarSuperadminLinks;
