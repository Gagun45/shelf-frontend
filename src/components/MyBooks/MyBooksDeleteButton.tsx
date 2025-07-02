import { useDeleteBook } from "@/api/books";
import { Button } from "../ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";

const MyBooksDeleteButton = ({ bookPid }: { bookPid: string }) => {
  const { deleteBook } = useDeleteBook();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"destructive"}>Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-3xl">
            Delete the book? The action cant be undone!
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="!justify-between">
          <AlertDialogCancel>No, keep it</AlertDialogCancel>
          <AlertDialogAction onClick={() => deleteBook(bookPid)}>
            Yes, delete it
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default MyBooksDeleteButton;
