import { Link } from "react-router-dom";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <header>
      <Link to={"/"} className="font-bold text-6xl tracking-widest">
        Shelf
      </Link>
      <MainNav />
    </header>
  );
};
export default Header;
