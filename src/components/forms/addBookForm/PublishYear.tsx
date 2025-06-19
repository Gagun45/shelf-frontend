import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const PublishYear = () => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name="publishYear"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Publish year</FormLabel>
          <FormControl>
            <Input type="number" placeholder="Year..." {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default PublishYear;
