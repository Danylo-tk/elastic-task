import FormSectionLogic from "./FormSectionLogic";
import { FormSectionFormModel } from "./FormSectionLogic";

const FormSectionApi = () => {
  const hadleSubmit = async (data: FormSectionFormModel) => {
    console.table(data);
    return fetch("");
  };

  const defaultValues = {
    name: "",
    surname: "",
    age: null,
  };

  return (
    <FormSectionLogic onSubmit={hadleSubmit} defaultValues={defaultValues} />
  );
};

export default FormSectionApi;
