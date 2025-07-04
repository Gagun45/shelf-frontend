import MyBooks from "@/components/MyBooks/MyBooks";
import BooksPagesLayout from "@/layouts/BooksPagesLayout";

const MyBooksPage = () => {
  return (
    <BooksPagesLayout heading="My books">
      <MyBooks />
    </BooksPagesLayout>
  );
};
export default MyBooksPage;
