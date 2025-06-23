import { useSearch } from "@/context/SearchContext";
import { Slider } from "../ui/slider";

const YearBar = () => {
  const { year, setYear } = useSearch();

  return (
    <div>
      <h2 className="font-bold">Publish Year:</h2>
      <div className="grid grid-cols-[40px_200px_40px] xl:grid-cols-[40px_80px_40px] gap-2">
        <span className="text-right">{year.fromYear}</span>
        <Slider
          value={[year.fromYear, year.toYear]}
          min={1980}
          max={2025}
          step={1}
          className="w-full"
          onValueChange={(val) => setYear({ fromYear: val[0], toYear: val[1] })}
        />
        <span>{year.toYear}</span>
      </div>
      {/* <div className="flex items-center gap-2">
        From
        <input
          className="border-1 w-24 px-2 rounded-md"
          type="number"
          value={year.fromYear}
          onChange={(e) =>
            setYear((prev) => ({ ...prev, fromYear: parseInt(e.target.value) }))
          }
        />
        to
        <input
          className="border-1 w-24 px-2 rounded-md"
          type="number"
          value={year.toYear}
          onChange={(e) =>
            setYear((prev) => ({ ...prev, toYear: parseInt(e.target.value) }))
          }
        />
      </div> */}
    </div>
  );
};
export default YearBar;
