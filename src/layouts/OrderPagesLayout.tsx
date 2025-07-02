import OrdersSort from "@/components/OrdersSort";
import ItemsOnPage from "@/components/SearchOptions/ItemsOnPage";
import SearchBar from "@/components/SearchOptions/SearchBar";
import { useOrderSearchStore } from "@/stores/useOrderSearchStore";
import type { ReactNode } from "react";

const OrderPagesLayout = ({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) => {
  const limit = useOrderSearchStore((s) => s.limit);
  const setLimit = useOrderSearchStore((s) => s.setLimit);

  return (
    <div className="flex flex-col gap-4">
      <SearchBar />
      <div className="flex justify-between gap-2 items-center flex-wrap">
        <h2 className="title">{heading}</h2>
        <OrdersSort />
        <ItemsOnPage value={limit} onChange={setLimit} />
      </div>
      {children}
    </div>
  );
};
export default OrderPagesLayout;
