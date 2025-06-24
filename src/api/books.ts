import { useSearch } from "@/context/SearchContext";
import type { BookType } from "@/types/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type BooksResponse = {
  books: BookType[];
  totalBooks: number;
};

export const useAllBooks = () => {
  const { searchQuery } = useSearch();
  const route = `${API_BASE_URL}/books/all?${searchQuery}`;
  const fetchBooks = async (): Promise<BooksResponse> => {
    const res = await fetch(route);
    if (!res.ok) throw new Error("Failed to fetch books");
    return res.json();
  };

  const { data: booksResponse, isLoading } = useQuery({
    queryKey: ["books", searchQuery],
    queryFn: fetchBooks,
  });

  return { booksResponse, isLoading };
};

export const useBookById = (bookPid?: string) => {
  const fecthBookById = async (): Promise<BookType> => {
    const res = await fetch(`${API_BASE_URL}/books/book/${bookPid}`);
    if (!res.ok) throw new Error("Failed to fetch a book by id");
    return res.json();
  };

  const { data: book, isLoading } = useQuery({
    queryKey: ["fetchBookById", bookPid],
    queryFn: fecthBookById,
    enabled: !!bookPid,
  });

  return { book, isLoading };
};

export const useAddBook = () => {
  const { getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  const addBookRequest = async (formData: FormData) => {
    const token = await getAccessTokenSilently();
    const res = await fetch(`${API_BASE_URL}/books/add`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    if (!res.ok) throw new Error("Failed to fetch books");
  };

  const {
    mutateAsync: addBook,
    isPending,
    isSuccess,
    isError,
  } = useMutation({
    mutationKey: ["addBook"],
    mutationFn: addBookRequest,
  });

  if (isSuccess) {
    toast.success("Book added!");
    navigate("/");
  }
  if (isError) toast.error("Something went wrong");

  return { addBook, isPending };
};

export const useEditBook = (bookPid: string) => {
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const editBookRequest = async (formData: FormData) => {
    const token = await getAccessTokenSilently();
    const res = await fetch(`${API_BASE_URL}/books/book/edit/${bookPid}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    if (!res.ok) throw new Error("Failed to edit the book");
  };

  const {
    mutateAsync: editBook,
    isPending,
    isSuccess,
    isError,
  } = useMutation({
    mutationKey: ["editBook"],
    mutationFn: editBookRequest,
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Book edited!");
      queryClient.invalidateQueries({ queryKey: ["fetchBookById", bookPid] });
      navigate("/");
    }
  }, [isSuccess, navigate, queryClient, bookPid]);

  if (isError) toast.error("Something went wrong");

  return { editBook, isPending };
};

export const useMyBooks = () => {
  const { getAccessTokenSilently } = useAuth0();
  const { searchQuery } = useSearch();
  const fetchMyBooks = async (): Promise<BooksResponse> => {
    const token = await getAccessTokenSilently();
    const res = await fetch(`${API_BASE_URL}/books/my-books?${searchQuery}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Failed to fetch my books");
    return res.json();
  };

  const { data: booksResponse, isLoading } = useQuery({
    queryKey: ["myBooks", searchQuery],
    queryFn: fetchMyBooks,
  });

  return { booksResponse, isLoading };
};
