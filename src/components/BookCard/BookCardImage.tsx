import { Link } from "react-router-dom";

const BookCardImage = ({
  bookPid,
  imageUrl,
  title,
}: {
  bookPid: string;
  imageUrl: string;
  title: string;
}) => {
  return (
    <Link
      to={`/book?id=${bookPid}`}
      className="cursor-pointer h-40 flex-shrink-0 outline-1"
    >
      <img src={imageUrl} alt={title} className="object-contain size-full" />
    </Link>
  );
};
export default BookCardImage;
