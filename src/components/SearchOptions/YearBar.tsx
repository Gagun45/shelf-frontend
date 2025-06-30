import { useEffect, useState } from "react";
import { Slider } from "../ui/slider";
import { useSearchStore } from "@/stores/useSearchStore";

const YearBar = () => {
  const year = useSearchStore((s) => s.year);
  const setYear = useSearchStore((s) => s.setYear);

  const [localYear, setLocalYear] = useState<number[]>([
    year.fromYear,
    year.toYear,
  ]);

  useEffect(() => {
    setLocalYear([year.fromYear, year.toYear]);
  }, [year.toYear, year.fromYear]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setYear(localYear[0], localYear[1]);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [localYear, setLocalYear, setYear]);

  return (
    <div>
      <h2 className="font-bold">Publish Year:</h2>
      <div className="grid grid-cols-[40px_200px_40px] xl:grid-cols-[40px_80px_40px] gap-2">
        <span className="text-right">{localYear[0]}</span>
        <Slider
          value={[localYear[0], localYear[1]]}
          min={1980}
          max={2025}
          step={1}
          className="w-full"
          onValueChange={(val) => setLocalYear([val[0], val[1]])}
        />
        <span>{localYear[1]}</span>
      </div>
    </div>
  );
};
export default YearBar;
