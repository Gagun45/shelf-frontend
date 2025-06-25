import BookCard from "@/components/BookCard";
import Pagination from "@/components/SearchOptions/Pagination";
import { useSearch } from "@/context/SearchContext";
import type { BooksResponse } from "@/types/types";

type Props = {
  booksResponse: BooksResponse;
};

const BooksCardsLayout = ({ booksResponse: { books, totalBooks } }: Props) => {
  const { title, limit } = useSearch();
  const totalPages = Math.max(Math.ceil(totalBooks / limit), 1);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        {title && (
          <div className="w-full">
            {totalBooks} results include '{title}'
          </div>
        )}
        {books?.map((book) => (
          <BookCard key={book.bookPid} book={book} />
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
};
export default BooksCardsLayout;
