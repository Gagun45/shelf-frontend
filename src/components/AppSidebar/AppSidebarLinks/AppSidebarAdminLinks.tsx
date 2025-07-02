import AppSidebarLinksLayout from "./AppSidebarLinksLayout";
import type { LinkInt, RoleType } from "@/types/types";
import { BookOpen, BookPlusIcon } from "lucide-react";
import { ICON_SIZE } from "../AppSidebar";

const AppSidebarAdminLinks = ({
  handleOnClick,
  role,
}: {
  handleOnClick: (open:boolean) => void;
  role?: RoleType;
}) => {
  const ADMIN_LINKS: LinkInt[] = [
    {
      icon: <BookPlusIcon className={ICON_SIZE} />,
      title: "Add a Book",
      to: "/add-book",
    },
    {
      icon: <BookOpen className={ICON_SIZE} />,
      title: "My Books",
      to: "/my-books",
    },
  ];

  const allowedRoles = ["admin", "superadmin"];
  if (!role || !allowedRoles.includes(role)) return null;
  return (
    <AppSidebarLinksLayout links={ADMIN_LINKS} handleOnClick={handleOnClick} />
  );
};
export default AppSidebarAdminLinks;
