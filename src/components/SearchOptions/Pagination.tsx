import { Button } from "../ui/button";
import { useEffect } from "react";

type Props = {
  totalItems: number;
  limit: number;
  page: number;
  setPage: (page: number) => void;
};

const Pagination = ({ totalItems, limit, page, setPage }: Props) => {
  const totalPages = Math.max(Math.ceil(totalItems / limit), 1);

  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  const returnJsx = (res: (string | number)[]) => {
    const newResult = res.map((item, index) =>
      item === "..." ? (
        <span key={index}>{item}</span>
      ) : (
        <span
          key={index}
          className={`${page === item && "underline"} cursor-pointer`}
          onClick={() => setPage(parseInt(item.toString()))}
        >
          {item}
        </span>
      )
    );
    return newResult;
  };

  const createPagination = () => {
    if (totalPages < 5) return returnJsx(pagesArray);
    const result: (string | number)[] = [];
    if (page - 1 <= 2) {
      result.push(...pagesArray.filter((p) => p <= page));
    } else {
      result.push(...[1, "...", page - 1, page]);
    }

    if (page + 1 >= pagesArray.length - 1) {
      result.push(...pagesArray.filter((p) => p > page));
    } else {
      result.push(...[page + 1, "...", pagesArray.length]);
    }
    return returnJsx(result);
  };
  useEffect(() => {
    if (page > totalPages) {
      setPage(1);
    }
  }, [totalPages, page, setPage]);

  const pagination = createPagination();

  return (
    <div className="flex items-center justify-between gap-4">
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </Button>
      <div className="flex gap-2">{pagination}</div>
      <Button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
