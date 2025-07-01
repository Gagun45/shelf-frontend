import AllBooks from "@/components/AllBooks/AllBooks";
import BooksPagesLayout from "@/layouts/BooksPagesLayout";

const AllBooksPage = () => {
  return (
    <BooksPagesLayout heading="All books">
      <AllBooks />
    </BooksPagesLayout>
  );
};
export default AllBooksPage;
