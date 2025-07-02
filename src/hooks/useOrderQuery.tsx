import { useOrderSearchStore } from "@/stores/useOrderSearchStore";

export const useOrderQuery = () => {
  const limit = useOrderSearchStore((s) => s.limit).toString();
  const page = useOrderSearchStore((s) => s.page).toString();
  const sortOption = useOrderSearchStore((s) => s.sortOption);

  const params = new URLSearchParams({
    limit,
    page,
  });
  if (["pending", "success", "cancelled"].includes(sortOption)) {
    params.append("sortOption", sortOption);
  }
  return params.toString();
};
