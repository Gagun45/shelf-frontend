import type { BookType } from "@/types/types";
import BookCardImage from "../BookCard/BookCardImage";
import BookCardLayout from "../BookCard/BookCardLayout";
import BookCardTitle from "../BookCard/BookCardTitle";
import BookCardAddInfo from "../BookCard/BookCardAddInfo";
import BookCardCartSection from "../BookCard/BookCardCartSection/BookCardCartSection";
import MyBooksEditButton from "./MyBooksEditButton";
import MyBooksDeleteButton from "./MyBooksDeleteButton";

const MyBooksCard = ({ book }: { book: BookType }) => {
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
      <MyBooksEditButton bookPid={book.bookPid} />
      <MyBooksDeleteButton bookPid={book.bookPid} />
    </BookCardLayout>
  );
};
export default MyBooksCard;
