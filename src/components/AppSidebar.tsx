import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

import logo from "@/assets/Logo.png";

import { Link } from "react-router-dom";

import Auth from "./header/Auth";
import type { ReactNode } from "react";
import {
  BookA,
  BookOpen,
  BookPlusIcon,
  ListOrderedIcon,
  ShoppingCart,
} from "lucide-react";
import { Separator } from "./ui/separator";
import { useUserStore } from "@/stores/useUserStore";

interface LinkInt {
  to: string;
  title: string;
  icon: ReactNode;
}

const iconSize = "size-7";

const USER_LINKS: LinkInt[] = [
  { icon: <BookA className={iconSize} />, title: "All Books", to: "/" },
];

const PROTECTED_LINKS: LinkInt[] = [
  {
    icon: <BookOpen className={iconSize} />,
    title: "My Books",
    to: "/my-books",
  },
  {
    icon: <BookPlusIcon className={iconSize} />,
    title: "Add a Book",
    to: "/add-book",
  },
  {
    icon: <ListOrderedIcon className={iconSize} />,
    title: "My Orders",
    to: "/my-orders",
  },
];

export function AppSidebar() {
  const { userData } = useUserStore();
  const { setOpenMobile, isMobile } = useSidebar();

  const handleOnClick = () => {
    if (isMobile) setOpenMobile(false);
  };
  return (
    <Sidebar>
      <SidebarHeader className="h-48 items-center justify-center bg-main relative">
        <Link to={"/"}>
          <img src={logo} alt="Shelf" />
        </Link>
      </SidebarHeader>
      <Separator />
      <SidebarContent className="bg-main p-2">
        <SidebarGroup className="gap-4">
          {USER_LINKS.map(({ icon, title, to }) => (
            <Link
              to={to}
              key={title}
              className="flex gap-2 hover:underline items-center justify-start"
              onClick={handleOnClick}
            >
              {icon}
              <span className="text-2xl tracking-wide font-semibold">
                {title}
              </span>
            </Link>
          ))}
        </SidebarGroup>
        <SidebarGroup className="gap-6 mt-auto">
          {userData &&
            PROTECTED_LINKS.map(({ icon, title, to }) => (
              <Link
                to={to}
                key={title}
                className="flex gap-2 hover:underline items-center justify-start"
                onClick={handleOnClick}
              >
                {icon}
                <span className="text-2xl tracking-wide font-semibold">
                  {title}
                </span>
              </Link>
            ))}
          <Link
            to={"/cart"}
            className="flex gap-2 hover:underline items-center justify-start"
            onClick={handleOnClick}
          >
            <ShoppingCart className="size-7" />
            <span className="text-2xl tracking-wide font-semibold">
              My Cart
            </span>
          </Link>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-main h-24 justify-end">
        <Auth />
      </SidebarFooter>
    </Sidebar>
  );
}
