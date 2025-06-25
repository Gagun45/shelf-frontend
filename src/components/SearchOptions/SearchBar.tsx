import { useSearch } from "@/context/SearchContext";
import { Button } from "../ui/button";
import { useState } from "react";
import { XCircle } from "lucide-react";

const SearchBar = () => {
  const { title, setTitle } = useSearch();
  const [t, setT] = useState(title);
  return (
    <form
      className="w-full max-w-2xl flex items-center justify-between border-2 gap-1 rounded-lg p-2"
      onSubmit={(e) => {
        e.preventDefault();
        setTitle(t);
      }}
    >
      <input
        className="w-full outline-none"
        value={t}
        onChange={(e) => setT(e.target.value)}
      />
      <button
        type="button"
        disabled={!t}
        onClick={() => {
          setT("");
          setTitle("");
        }}
        className="not-disabled:cursor-pointer disabled:opacity-15"
      >
        <XCircle />
      </button>
      <Button type="submit">Search</Button>
    </form>
  );
};
export default SearchBar;
