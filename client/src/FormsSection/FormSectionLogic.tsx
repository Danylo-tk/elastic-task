import { useForm } from "react-hook-form";
import FormSectionView from "./FormSectionView";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export interface FormSectionFormModel {
  name: string;
  surname: string;
  age: number | null;
}

interface LogicProps {
  defaultValues: FormSectionFormModel;
  onSubmit: (data: FormSectionFormModel) => Promise<Response>;
}

const FormSectionFormSchema = z
  .object({
    name: z.string().min(1, {
      message: "Too short! Provide a name at least one character long.",
    }),
    surname: z.string().min(1, {
      message: "Too short! Provide a surname at least one character long.",
    }),
    age: z
      .number({
        invalid_type_error:
          "Are you a time traveler? Age can only be a number!",
      })
      .gt(0, {
        message:
          "Go home, you haven't been born yet! Provide a number that's greater than 0.",
      })
      .lte(114, {
        message:
          "That's greater than the age of the oldes man alive! Provide a number that's less than 114.",
      }),
  })
  .required();

const FormSectionLogic = ({ defaultValues, onSubmit }: LogicProps) => {
  const form = useForm<FormSectionFormModel>({
    mode: "onSubmit",
    defaultValues,
    resolver: zodResolver(FormSectionFormSchema),
  });

  const handleSubmit = async (data: FormSectionFormModel) => {
    await onSubmit(data)
      .then(() => {
        form.reset();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return <FormSectionView form={form} onSubmit={handleSubmit} />;
};

export default FormSectionLogic;
