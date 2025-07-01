import { Link } from "react-router-dom";

const BookCardTitle = ({
  bookPid,
  title,
}: {
  bookPid: string;
  title: string;
}) => {
  return (
    <Link
      to={`/book?id=${bookPid}`}
      className="w-full font-semibold break-words line-clamp-2 hover:underline"
    >
      {title}
    </Link>
  );
};
export default BookCardTitle;
