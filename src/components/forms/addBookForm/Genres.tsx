import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { GENRES } from "@/config/genres";
import { useFormContext } from "react-hook-form";

const Genres = () => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name="genres"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Genres</FormLabel>
          <div className="grid grid-cols-3">
            {GENRES.map((genre) => {
              const isChecked = field.value.includes(genre);
              return (
                <label key={genre} className="flex gap-1">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    key={genre}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      if (checked) {
                        field.onChange([...field.value, genre]);
                      } else {
                        field.onChange(
                          field.value.filter((g: string) => g !== genre)
                        );
                      }
                    }}
                  />
                  <span>{genre}</span>
                </label>
              );
            })}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default Genres;
