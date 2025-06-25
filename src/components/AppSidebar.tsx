import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

import { Link } from "react-router-dom";

import Auth from "./header/Auth";
import type { ReactNode } from "react";
import { BookA, BookOpen, BookPlusIcon, ShoppingCart } from "lucide-react";
import { Separator } from "./ui/separator";
import { useUserData } from "@/hooks/useUserData";

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
];

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();
  const { userData } = useUserData();
  return (
    <Sidebar>
      <SidebarHeader className="h-48 items-center justify-center bg-main relative">
        <SidebarTrigger className="md:hidden absolute top-4 left-4" />
        <span className="text-3xl font-bold">Shelf</span>
      </SidebarHeader>
      <Separator />
      <SidebarContent className="bg-main p-2">
        <SidebarGroup className="gap-4">
          {USER_LINKS.map(({ icon, title, to }) => (
            <Link
              to={to}
              key={title}
              className="flex gap-2 hover:underline items-center justify-start"
              onClick={toggleSidebar}
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
                onClick={toggleSidebar}
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
            onClick={toggleSidebar}
          >
            <ShoppingCart />
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
