import { Link } from "react-router-dom";
import logo from "@/assets/Logo.png";
import { SidebarHeader } from "../ui/sidebar";

const AppSidebarHeader = () => {
  return (
    <SidebarHeader className="h-48 items-center justify-center bg-main relative">
      <Link to={"/"}>
        <img src={logo} alt="Shelf" />
      </Link>
    </SidebarHeader>
  );
};
export default AppSidebarHeader;
