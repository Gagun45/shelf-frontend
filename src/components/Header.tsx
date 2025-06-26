import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";
import { PanelLeftOpenIcon, PanelRightOpenIcon } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const { toggleSidebar, open, isMobile } = useSidebar();
  return (
    <header className="relative">
      {!isMobile && (
        <Button
          className="size-9 absolute top-4"
          variant={"ghost"}
          onClick={toggleSidebar}
        >
          {open ? (
            <PanelRightOpenIcon className="size-7" />
          ) : (
            <PanelLeftOpenIcon className="size-7" />
          )}
        </Button>
      )}
      <Link to={"/"} className="font-bold text-6xl tracking-widest">
        Shelf
      </Link>
      <div className="flex items-center gap-8">
        <CartIcon className="hidden xs:flex" />
        {isMobile && <SidebarTrigger />}
      </div>
    </header>
  );
};
export default Header;
