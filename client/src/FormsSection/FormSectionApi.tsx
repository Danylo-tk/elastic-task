import FormSectionLogic from "./FormSectionLogic";
import { FormSectionFormModel } from "./FormSectionLogic";

const FormSectionApi = () => {
  const hadleSubmit = async (data: FormSectionFormModel) => {
    console.table(data);

    const submitData = {
      name: data.name,
      surname: data.surname,
      age: data.age,
    };

    return fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    });
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
