import BookCard from "@/components/BookCard";
import Pagination from "@/components/SearchOptions/Pagination";
import { useSearch } from "@/context/SearchContext";
import type { BooksResponse } from "@/types/types";

type Props = {
  booksResponse: BooksResponse;
  editButton?: boolean;
};

const BooksCardsLayout = ({
  booksResponse: { books, totalBooks },
  editButton = false,
}: Props) => {
  const { title, limit } = useSearch();
  const totalPages = Math.max(Math.ceil(totalBooks / limit), 1);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <div className="w-full">
          {title
            ? `${totalBooks} results include '${title}'`
            : `${totalBooks} results found`}
        </div>

        {books?.map((book) => (
          <BookCard key={book.bookPid} book={book} editButton={editButton} />
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
};
export default BooksCardsLayout;
