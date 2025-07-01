import type { ReactNode } from "react";
import { Link } from "react-router-dom";
type SidebarLinkProps = {
  to: string;
  handleOnClick: () => void;
  title: string;
  icon: ReactNode;
};

const AppSidebarLink = ({
  handleOnClick,
  title,
  to,
  icon,
}: SidebarLinkProps) => {
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

export default AppSidebarLink;
