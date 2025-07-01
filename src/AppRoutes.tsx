import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AddBook from "./pages/AddBook";
import BookPage from "./pages/BookPage";
import EditPage from "./pages/EditPage";
import CartPage from "./pages/CartPage";
import MyBooksPage from "./pages/MyBooksPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import TestPage from "./pages/TestPage";
import AdminOnlyRoute from "./auth/AdminOnlyRoute";
import LoggedOnlyRoute from "./auth/LoggedOnlyRoute";
import SuperAdminOnlyRoute from "./auth/SuperAdminOnlyRoute";
import AllOrdersPage from "./pages/AllOrdersPage";
import AllBooksPage from "./pages/AllBooksPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<LoggedOnlyRoute />}>
          <Route path="/my-orders" element={<MyOrdersPage />} />
        </Route>
        <Route element={<AdminOnlyRoute />}>
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/book/edit/:id" element={<EditPage />} />
          <Route path="/my-books" element={<MyBooksPage />} />
        </Route>
        <Route element={<SuperAdminOnlyRoute />}>
          <Route path="/all-orders" element={<AllOrdersPage />} />
        </Route>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/" element={<AllBooksPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
