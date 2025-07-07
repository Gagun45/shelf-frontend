import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const ImageFile = ({
  fileInputRef,
}: {
  fileInputRef: React.RefObject<HTMLInputElement | null>;
}) => {
  const { control, setValue, watch } = useFormContext();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const existingUrl = watch("imageUrl");
  const imageFile = watch("imageFile");

  useEffect(() => {
    if (imageFile instanceof File) {
      const prevUrl = URL.createObjectURL(imageFile);
      setPreviewUrl(prevUrl);
      return () => URL.revokeObjectURL(prevUrl);
    } else if (existingUrl) {
      setPreviewUrl(existingUrl);
    } else {
      setPreviewUrl(null);
    }
  }, [imageFile, existingUrl]);
  return (
    <>
      <FormField
        control={control}
        name="imageFile"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Image File</FormLabel>
            <FormControl>
              <Input
                ref={fileInputRef}
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setPreviewUrl(URL.createObjectURL(file));
                    field.onChange(file);
                  }
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {previewUrl && (
        <div
          className="w-24 h-24 cursor-pointer"
          onClick={() => {
            setValue("imageFile", null, { shouldDirty: true });
            setValue("imageUrl", "", { shouldDirty: true });
            if (fileInputRef.current) {
              fileInputRef.current.value = "";
            }
          }}
        >
          <img src={previewUrl} className="size-full" />
        </div>
      )}
    </>
  );
};
export default ImageFile;
