import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { SidebarTrigger } from "./ui/sidebar";
import Auth from "./header/Auth";

const Header = () => {
  return (
    <header className="relative">
      <SidebarTrigger className="absolute top-4" />
      <Link to={"/"} className="font-bold text-6xl tracking-widest">
        Shelf
      </Link>
      <div className="flex items-center gap-6">
        <CartIcon />
        <Auth withText={false} />
      </div>
    </header>
  );
};
export default Header;
