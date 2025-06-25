import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { SidebarTrigger } from "./ui/sidebar";

const Header = () => {
  return (
    <header className="relative">
      <SidebarTrigger className="absolute top-4" />
      <Link to={"/"} className="font-bold text-6xl tracking-widest">
        Shelf
      </Link>
      <CartIcon />
    </header>
  );
};
export default Header;
