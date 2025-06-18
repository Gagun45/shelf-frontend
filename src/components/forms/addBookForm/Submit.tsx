import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";

type Props = {
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  isPending: boolean;
};

const Submit = ({ fileInputRef, isPending }: Props) => {
  const { formState, reset } = useFormContext();
  return (
    <div className="flex justify-between">
      <Button
        type="button"
        disabled={!formState.isDirty}
        onClick={() => {
          reset();
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
        }}
      >
        Reset
      </Button>
      <Button disabled={isPending || !formState.isDirty} type="submit">
        {isPending ? "Loading..." : "Save the book"}
      </Button>
    </div>
  );
};
export default Submit;
