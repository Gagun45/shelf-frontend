import type { BookType } from "@/types/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface CartItemInterface {
  book: BookType;
  quantity: number;
}

interface CartStore {
  cart: CartItemInterface[] | [];
  addItem: (book: BookType) => void;
  removeItem: (bookPid: string) => void;
  changeAmount: (bookPid: string, quantity: number) => void;
  setAmount: (bookPid: string, quantity: number) => void;
  totalSum: number;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => {
      const syncCart = () => {
        const totalSum = get().cart.reduce(
          (sum, item) => sum + item.book.price * item.quantity,
          0
        );
        set({ totalSum });
      };
      return {
        cart: [],
        totalSum: 0,
        totalItems: 0,
        addItem: (book) => {
          set((state) => {
            if (state.cart.some((item) => item.book.bookPid === book.bookPid)) {
              return state;
            }
            const updatedCart = [...state.cart, { book, quantity: 1 }];
            return { cart: updatedCart };
          });
          syncCart();
        },
        removeItem: (bookPid) => {
          set((state) => {
            const updatedCart = state.cart.filter(
              (item) => item.book.bookPid !== bookPid
            );
            return { cart: updatedCart };
          });
          syncCart();
        },
        changeAmount: (bookPid, quantity) => {
          set((state) => {
            const updatedCart = state.cart.map((item) =>
              item.book.bookPid === bookPid
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );

            return { cart: updatedCart };
          });
          syncCart();
        },
        setAmount: (bookPid, quantity) => {
          set((state) => {
            const updatedCart = state.cart.map((item) =>
              item.book.bookPid === bookPid ? { ...item, quantity } : item
            );

            return { cart: updatedCart };
          });
          syncCart();
        },
        clearCart: () => {
          set({ cart: [] });
          syncCart();
        },
      };
    },
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
