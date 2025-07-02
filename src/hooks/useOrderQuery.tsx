import { useOrderSearchStore } from "@/stores/useOrderSearchStore";
import { useSearchStore } from "@/stores/useSearchStore";

export const useOrderQuery = () => {
  const limit = useOrderSearchStore((s) => s.limit).toString();
  const page = useOrderSearchStore((s) => s.page).toString();
  const sortOption = useOrderSearchStore((s) => s.sortOption);
  const searchQuery = useSearchStore((s) => s.title);

  const params = new URLSearchParams({
    limit,
    page,
  });
  if (["pending", "success", "cancelled"].includes(sortOption)) {
    params.append("sortOption", sortOption);
  }
  if (searchQuery) {
    params.append("searchQuery", searchQuery);
  }
  return params.toString();
};
