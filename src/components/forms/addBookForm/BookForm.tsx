import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Form } from "@/components/ui/form";

import type { BookType } from "@/types/types";
import { useRef } from "react";
import Title from "./Title";
import Author from "./Author";
import ImageFile from "./ImageFile";
import Submit from "./Submit";
import Language from "./Language";
import PublishYear from "./PublishYear";
import Genres from "./Genres";
import Price from "./Price";

const formSchema = z
  .object({
    title: z.string().min(1, {
      message: "Title must be at least 2 characters long",
    }),
    genres: z.array(z.string()).min(1, "Choose at least 1 genres"),
    author: z.string().min(1, {
      message: "Author must be at least 2 characters long",
    }),
    language: z.string().min(1, {
      message: "Language must be at least 2 characters long",
    }),
    publishYear: z.coerce
      .number({ message: "Enter a number" })
      .min(1980)
      .max(2025),
    price: z.coerce.number({ message: "Enter a number" }).min(1).max(20000),
    imageFile: z.instanceof(File).optional().nullable(),
    imageUrl: z.string().optional(),
  })
  .refine((data) => data.imageFile instanceof File || !!data.imageUrl, {
    message: "Image must be added",
    path: ["imageFile"],
  });

type Props = {
  onSave: (formData: FormData) => void;
  isPending: boolean;
  book?: BookType;
};

export const BookForm = ({ onSave, isPending, book }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      author: book?.author || "",
      title: book?.title || "",
      imageUrl: book?.imageUrl,
      imageFile: null,
      language: book?.language || undefined,
      publishYear: book?.publishYear || 0,
      price: book?.price || 0,
      genres: book?.genres || [],
    },
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const {
      author,
      title,
      imageFile,
      imageUrl,
      language,
      publishYear,
      genres,
      price,
    } = values;
    const formData = new FormData();
    formData.append("author", author);
    formData.append("title", title);
    formData.append("language", language);
    formData.append("publishYear", publishYear.toString());
    formData.append("price", price.toString());
    if (imageFile) {
      formData.append("imageFile", imageFile);
    } else {
      formData.append("imageUrl", imageUrl as string);
    }
    genres.forEach((genre, index) => {
      formData.append(`genres[${index}]`, genre);
    });
    onSave(formData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Title />
        <Author />
        <Language />
        <PublishYear />
        <Price />
        <Genres />
        <ImageFile fileInputRef={fileInputRef} />
        <Submit fileInputRef={fileInputRef} isPending={isPending} />
      </form>
    </Form>
  );
};
