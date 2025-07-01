import { Link } from "react-router-dom";
import logo from "@/assets/Logo.png";

const AppSidebarHeader = () => {
  return (
      <Link to={"/"}>
        <img src={logo} alt="Shelf" />
      </Link>
  );
};
export default AppSidebarHeader;
