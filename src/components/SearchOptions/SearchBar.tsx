import { useSearch } from "@/context/SearchContext";
import { Button } from "../ui/button";
import { QueryClient } from "@tanstack/react-query";
import { useState } from "react";

const qclient = new QueryClient();

const SearchBar = () => {
  const { setTitle } = useSearch();
  const [t, setT] = useState("");
  const handleClick = () => {
    setTitle(t);
    qclient.invalidateQueries({ queryKey: ["books"] });
  };
  return (
    <div className="w-full flex justify-between border-2 rounded-lg p-2">
      <input
        className="w-full outline-none"
        value={t}
        onChange={(e) => setT(e.target.value)}
      />
      <Button onClick={handleClick}>Search</Button>
    </div>
  );
};
export default SearchBar;
