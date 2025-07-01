import { useBookById } from "@/api/books";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
// import { useUserData } from "@/hooks/useUserData";
import { useCartStore } from "@/stores/useCartStore";
import { useSearchParams } from "react-router-dom";

const BookPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { book, isLoading } = useBookById(id as string);
  const { addItem, cart, removeItem } = useCartStore();
  if (isLoading) return <Loading />;
  if (!book) return <div>Book not found</div>;
  const genresAsString = book.genres.join(", ");
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-4xl mx-auto gap-6">
      <span className="text-2xl text-center font-semibold lg:col-span-2">
        {book?.title} | {book?.author}
      </span>
      <div className="flex items-center justify-center h-96">
        <img
          src={book?.imageUrl}
          alt={book?.title}
          className="object-contain size-full"
        />
      </div>
      <div className="flex bg-accent py-4 flex-col gap-4 items-center justify-center font-bold">
        <span className="text-xl">
          Price:&nbsp;
          {book?.price}$
        </span>
        {cart.some((item) => item.book.bookPid === book?.bookPid) ? (
          <Button
            variant={"destructive"}
            onClick={() => removeItem(book.bookPid)}
          >
            Remove from cart
          </Button>
        ) : (
          <Button onClick={() => addItem(book)}>Add to cart</Button>
        )}
      </div>
      <div className="flex flex-col gap-2 w-full lg:col-span-2">
        <h4 className="text-2xl font-bold">Book Information</h4>
        <span className="grid grid-cols-2 lg:grid-cols-[200px_1fr] border-b-1">
          <span className="italic">Author:</span>
          <span className="font-semibold text-right">{book.author}</span>
        </span>

        <span className="grid grid-cols-2 lg:grid-cols-[200px_1fr] border-b-1">
          <span className="italic">Published in:</span>
          <span className="font-semibold text-right">{book.publishYear}</span>
        </span>

        <span className="grid grid-cols-2 lg:grid-cols-[200px_1fr] border-b-1">
          <span className="italic">Language:</span>
          <span className="font-semibold text-right">{book.language}</span>
        </span>

        <span className="grid grid-cols-2 lg:grid-cols-[200px_1fr] border-b-1">
          <span className="italic">Genres:</span>
          <span className="font-semibold flex flex-wrap text-right justify-end">
            {genresAsString}
          </span>
        </span>
      </div>
    </div>
  );
};
export default BookPage;
