import { BookA } from "lucide-react";
import type { LinkInt } from "@/types/types";
import { ICON_SIZE } from "../AppSidebar";
import AppSidebarLinksLayout from "./AppSidebarLinksLayout";
const AppSidebarPublicLinks = ({
  handleOnClick,
}: {
  handleOnClick: () => void;
}) => {
  const PUBLIC_LINKS: LinkInt[] = [
    { icon: <BookA className={ICON_SIZE} />, title: "All Books", to: "/" },
  ];
  return (
    <AppSidebarLinksLayout links={PUBLIC_LINKS} handleOnClick={handleOnClick} />
  );
};
export default AppSidebarPublicLinks;
