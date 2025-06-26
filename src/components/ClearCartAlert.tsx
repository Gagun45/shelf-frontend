import { useCartStore } from "@/stores/useCartStore";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";

const ClearCartAlert = () => {
  const { clearCart } = useCartStore();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Clear Cart</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-3xl">
            Clear the cart?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="!justify-between">
          <AlertDialogCancel>No, keep it</AlertDialogCancel>
          <AlertDialogAction onClick={clearCart}>Yes, clear</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default ClearCartAlert;
