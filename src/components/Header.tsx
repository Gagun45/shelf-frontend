import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";

const Header = () => {
  const { isMobile } = useSidebar();
  return (
    <header className="relative">
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
