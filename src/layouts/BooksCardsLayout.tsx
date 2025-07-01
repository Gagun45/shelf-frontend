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
  const limit = useSearchStore((state) => state.limit);
  const title = useSearchStore((state) => state.title);
  const totalPages = Math.max(Math.ceil(totalBooks / limit), 1);

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
      <Pagination totalPages={totalPages} />
    </div>
  );
};
export default BooksCardsLayout;
