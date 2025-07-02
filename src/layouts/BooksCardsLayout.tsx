import Pagination from "@/components/SearchOptions/Pagination";
import { useSearchStore } from "@/stores/useSearchStore";
import type { ReactNode } from "react";

const BooksCardsLayout = ({
  children,
  totalBooks,
}: {
  children: ReactNode;
  totalBooks: number;
}) => {
  const title = useSearchStore((state) => state.title);
  const limit = useSearchStore((state) => state.limit);
  const page = useSearchStore((state) => state.page);
  const setPage = useSearchStore((state) => state.setPage);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <div className="w-full">
          {title
            ? `${totalBooks} results include '${title}'`
            : `${totalBooks} results found`}
        </div>

        {children}
      </div>
      <Pagination
        totalItems={totalBooks}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};
export default BooksCardsLayout;
