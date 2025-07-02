import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const ItemsOnPage = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) => {
  return (
    <Select
      value={value.toString()}
      onValueChange={(val) => onChange(parseInt(val))}
    >
      <SelectTrigger className="w-fit">
        <SelectValue placeholder={value.toString()} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="5">5</SelectItem>
        <SelectItem value="10">10</SelectItem>
        <SelectItem value="15">15</SelectItem>
      </SelectContent>
    </Select>
  );
};
export default ItemsOnPage;
