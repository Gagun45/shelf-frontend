import AllBooks from "@/components/AllBooks";
import BooksPagesLayout from "@/layouts/BooksPagesLayout";

const Homepage = () => {
  console.log('homepage')
  return (
    <BooksPagesLayout heading="All books">
      <AllBooks />
    </BooksPagesLayout>
  );
};
export default Homepage;
