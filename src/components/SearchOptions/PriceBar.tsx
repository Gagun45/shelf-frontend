import { useSearch } from "@/context/SearchContext";
import { Slider } from "../ui/slider";

export const PriceBar = () => {
  const { price, setPrice } = useSearch();
  return (
    <div>
      <h2 className="font-bold">Price:</h2>
      <div className="grid grid-cols-[40px_200px_40px] xl:grid-cols-[40px_80px_40px] gap-2">
        <span className="text-right">{price.fromPrice}</span>
        <Slider
          value={[price.fromPrice, price.toPrice]}
          min={0}
          max={2000}
          step={1}
          className="w-full"
          onValueChange={(val) =>
            setPrice({ fromPrice: val[0], toPrice: val[1] })
          }
        />
        <span>{price.toPrice}</span>
      </div>
    </div>
  );
};
