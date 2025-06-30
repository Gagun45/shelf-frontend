import { useEffect, useState } from "react";
import { Slider } from "../ui/slider";
import { useSearchStore } from "@/stores/useSearchStore";

export const PriceBar = () => {
  const price = useSearchStore((state) => state.price);
  const setPrice = useSearchStore((state) => state.setPrice);

  const [localPrice, setLocalPrice] = useState<number[]>([
    price.fromPrice,
    price.toPrice,
  ]);

  useEffect(() => {
    setLocalPrice([price.fromPrice, price.toPrice]);
  }, [price.fromPrice, price.toPrice]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPrice(localPrice[0], localPrice[1]);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [localPrice, setLocalPrice, setPrice]);
  return (
    <div>
      <h2 className="font-bold">Price:</h2>
      <div className="grid grid-cols-[40px_200px_40px] xl:grid-cols-[40px_80px_40px] gap-2">
        <span className="text-right">{localPrice[0]}</span>
        <Slider
          value={[localPrice[0], localPrice[1]]}
          min={0}
          max={20000}
          step={1}
          className="w-full"
          onValueChange={(val) => setLocalPrice([val[0], val[1]])}
        />
        <span>{localPrice[1]}</span>
      </div>
    </div>
  );
};
