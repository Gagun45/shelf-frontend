import { type ReactNode } from "react";

const BookCardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col w-34 xs:w-39 sm:w-44 gap-1 border-1 px-4 py-2 shadow-2xl rounded-xl">
      {children}
    </div>
  );
};
export default BookCardLayout;
