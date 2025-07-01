import { ShoppingCartIcon } from "lucide-react";
import type { LinkInt } from "@/types/types";
import { ICON_SIZE } from "../AppSidebar";
import AppSidebarLinksLayout from "./AppSidebarLinksLayout";

const AppSidebarCartLink = ({
  handleOnClick,
}: {
  handleOnClick: () => void;
}) => {
  const PUBLIC_LINKS: LinkInt[] = [
    {
      icon: <ShoppingCartIcon className={ICON_SIZE} />,
      title: "My Cart",
      to: "/cart",
    },
  ];
  return (
    <AppSidebarLinksLayout links={PUBLIC_LINKS} handleOnClick={handleOnClick} />
  );
};
export default AppSidebarCartLink;
