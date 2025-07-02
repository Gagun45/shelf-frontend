import { ListOrderedIcon } from "lucide-react";
import type { LinkInt, RoleType } from "@/types/types";
import AppSidebarLinksLayout from "./AppSidebarLinksLayout";
import { ICON_SIZE } from "../AppSidebar";

const AppSidebarUserLinks = ({
  handleOnClick,
  role,
}: {
  handleOnClick: (open:boolean) => void;
  role?: RoleType;
}) => {
  const USER_LINKS: LinkInt[] = [
    {
      icon: <ListOrderedIcon className={ICON_SIZE} />,
      title: "My Orders",
      to: "/my-orders",
    },
  ];
  if (!role) return null;
  return (
    <AppSidebarLinksLayout handleOnClick={handleOnClick} links={USER_LINKS} />
  );
};
export default AppSidebarUserLinks;
