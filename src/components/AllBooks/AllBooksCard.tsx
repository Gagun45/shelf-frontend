import type { BookType } from "@/types/types";
import { memo } from "react";
import BookCardImage from "../BookCard/BookCardImage";
import BookCardTitle from "../BookCard/BookCardTitle";
import BookCardAddInfo from "../BookCard/BookCardAddInfo";
import BookCardCartSection from "../BookCard/BookCardCartSection/BookCardCartSection";
import BookCardLayout from "../BookCard/BookCardLayout";

type Props = {
  book: BookType;
};

const AllBooksCard = ({ book }: Props) => {
  return (
    <BookCardLayout>
      <BookCardImage
        bookPid={book.bookPid}
        imageUrl={book.imageUrl}
        title={book.title}
      />
      <BookCardTitle bookPid={book.bookPid} title={book.title} />
      <BookCardAddInfo
        author={book.author}
        language={book.language}
        publishYear={book.publishYear}
      />
      <BookCardCartSection book={book} />
    </BookCardLayout>
  );
};
export default memo(AllBooksCard);
