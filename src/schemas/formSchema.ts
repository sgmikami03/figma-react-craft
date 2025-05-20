
import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(1, { message: "お名前を入力してください" }),
  address: z.string().min(1, { message: "住所を入力してください" }),
  prefecture: z.string().min(1, { message: "都道府県を選択してください" }),
  gender: z.enum(["male", "female", "no_answer"], {
    required_error: "性別を選択してください",
  }),
  agreeToTerms: z.literal(true, {
    invalid_type_error: "利用規約に同意していただく必要があります",
  }),
});

export type FormValues = z.infer<typeof formSchema>;
