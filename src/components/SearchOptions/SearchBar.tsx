import { memo, useEffect, useState } from "react";
import { XCircle } from "lucide-react";
import { useSearchStore } from "@/stores/useSearchStore";

const SearchBar = memo(() => {
  const title = useSearchStore((state) => state.title);
  const setTitle = useSearchStore((state) => state.setTitle);
  const [localTitle, setLocalTitle] = useState(title);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitle(localTitle);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [localTitle, setLocalTitle, setTitle]);

  return (
    <div className="w-full max-w-2xl flex items-center justify-between border-2 gap-1 rounded-lg p-2">
      <input
        className="w-full outline-none"
        placeholder="Search..."
        value={localTitle}
        onChange={(e) => setLocalTitle(e.target.value)}
      />
      <button
        type="button"
        disabled={!localTitle}
        onClick={() => {
          setLocalTitle("");
        }}
        className="not-disabled:cursor-pointer disabled:opacity-15"
      >
        <XCircle />
      </button>
    </div>
  );
});
export default SearchBar;
