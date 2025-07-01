import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const MyBooksEditButton = ({ bookPid }: { bookPid: string }) => {
  return (
    <Link to={`/book/edit/${bookPid}`}>
      <Button className="w-full">Edit</Button>
    </Link>
  );
};
export default MyBooksEditButton;
