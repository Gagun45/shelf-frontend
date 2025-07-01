import { SidebarGroup } from "../../ui/sidebar";
import AppSidebarLink from "../../AppSidebarLink";
import type { LinkInt } from "@/types/types";

const AppSidebarLinksLayout = ({
  links,
  handleOnClick,
}: {
  links: LinkInt[];
  handleOnClick: () => void;
}) => {
  return (
    <SidebarGroup className="gap-4">
      {links.map(({ icon, title, to }) => (
        <AppSidebarLink
          key={title}
          to={to}
          icon={icon}
          title={title}
          handleOnClick={handleOnClick}
        />
      ))}
    </SidebarGroup>
  );
};
export default AppSidebarLinksLayout;
