import { SidebarGroup } from "../../ui/sidebar";
import AppSidebarLink from "../../AppSidebarLink";
import type { LinkInt } from "@/types/types";

const AppSidebarLinksLayout = ({
  links,
  handleOnClick,
}: {
  links: LinkInt[];
  handleOnClick: (open: boolean) => void;
}) => {
  return (
    <SidebarGroup className="gap-6">
      {links.map(({ icon, title, to }) => (
        <AppSidebarLink
          key={title}
          to={to}
          icon={icon}
          title={title}
          handleOnClick={() => handleOnClick(false)}
        />
      ))}
    </SidebarGroup>
  );
};
export default AppSidebarLinksLayout;
