import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import AuthCallback from "./pages/AuthCallback";
import AddBook from "./pages/AddBook";
import MyBooks from "./pages/MyBooks";
import BookPage from "./pages/BookPage";
import ProtectedRoute from "./auth/ProtectedRoute";
import EditPage from "./pages/EditPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<ProtectedRoute />}>
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/my-books" element={<MyBooks />} />
          <Route path="/book/edit/:id" element={<EditPage />} />
        </Route>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth-callback" element={<AuthCallback />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
