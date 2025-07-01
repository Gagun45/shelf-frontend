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
import { type ReactNode } from "react";
import {
  BookA,
  BookOpen,
  BookPlusIcon,
  KeyIcon,
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

const PUBLIC_LINKS: LinkInt[] = [
  { icon: <BookA className={iconSize} />, title: "All Books", to: "/" },
];

const LOGGED_LINKS: LinkInt[] = [
  {
    icon: <ListOrderedIcon className={iconSize} />,
    title: "My Orders",
    to: "/my-orders",
  },
];

const ADMIN_LINKS: LinkInt[] = [
  {
    icon: <BookPlusIcon className={iconSize} />,
    title: "Add a Book",
    to: "/add-book",
  },
  {
    icon: <BookOpen className={iconSize} />,
    title: "My Books",
    to: "/my-books",
  },
];

const SUPERADMIN_LINKS: LinkInt[] = [
  {
    icon: <KeyIcon className={iconSize} />,
    title: "All Orders",
    to: "/all-orders",
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
          {PUBLIC_LINKS.map(({ icon, title, to }) => (
            <SidebarLink
              key={title}
              to={to}
              icon={icon}
              title={title}
              handleOnClick={handleOnClick}
            />
          ))}
        </SidebarGroup>
        <SidebarGroup className="gap-6 mt-auto">
          {userData &&
            LOGGED_LINKS.map(({ icon, title, to }) => (
              <SidebarLink
                key={title}
                to={to}
                icon={icon}
                title={title}
                handleOnClick={handleOnClick}
              />
            ))}
          {userData?.role === "admin" &&
            ADMIN_LINKS.map(({ icon, title, to }) => (
              <SidebarLink
                key={title}
                to={to}
                icon={icon}
                title={title}
                handleOnClick={handleOnClick}
              />
            ))}
          {userData?.role === "superadmin" &&
            SUPERADMIN_LINKS.map(({ icon, title, to }) => (
              <SidebarLink
                key={title}
                to={to}
                icon={icon}
                title={title}
                handleOnClick={handleOnClick}
              />
            ))}

          <SidebarLink
            to={"/cart"}
            icon={<ShoppingCart className="size-7" />}
            title={"My Cart"}
            handleOnClick={handleOnClick}
          />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-main h-24 justify-end">
        <Auth />
      </SidebarFooter>
    </Sidebar>
  );
}

type SidebarLinkProps = {
  to: string;
  handleOnClick: () => void;
  title: string;
  icon: ReactNode;
};

const SidebarLink = ({ handleOnClick, title, to, icon }: SidebarLinkProps) => {
  return (
    <Link
      to={to}
      key={title}
      className="flex gap-2 hover:underline items-center justify-start"
      onClick={handleOnClick}
    >
      {icon}
      <span className="text-2xl tracking-wide font-semibold">{title}</span>
    </Link>
  );
};
