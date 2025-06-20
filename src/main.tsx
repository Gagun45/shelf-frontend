import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";
import AuthProvider from "./auth/AuthProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/sonner.tsx";
import { SearchProvider } from "./context/SearchContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <SearchProvider>
          <AppRoutes />
        </SearchProvider>
        <Toaster richColors position="top-right" />
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
