import { UseFormReturn } from "react-hook-form";
import styles from "./FormSection.module.css";
import { FormSectionFormModel } from "./FormSectionLogic";

interface ViewProps {
  form: UseFormReturn<FormSectionFormModel>;
  onSubmit: (data: FormSectionFormModel) => void;
}

const FormsSectionView = ({ form, onSubmit }: ViewProps) => {
  const { formState, register, handleSubmit } = form;
  const { errors, isSubmitting } = formState;

  return (
    <section>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputBlock}>
          <label className={styles.inputLabel}>Name:</label>
          <input
            type="text"
            placeholder="e.g. John"
            className={styles.input}
            {...register("name")}
          />
          <div className={styles.errorMessage}>{errors?.name?.message}</div>
        </div>
        <div className={styles.inputBlock}>
          <label className={styles.inputLabel}>Surname:</label>
          <input
            type="text"
            placeholder="e.g. Doe"
            className={styles.input}
            {...register("surname")}
          />
          <div className={styles.errorMessage}>{errors?.surname?.message}</div>
        </div>
        <div className={styles.inputBlock}>
          <label className={styles.inputLabel}>Age:</label>
          <input
            type="number"
            placeholder="e.g. 20"
            className={styles.input}
            {...register("age", { valueAsNumber: true })}
          />
          <div className={styles.errorMessage}>{errors?.age?.message}</div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default FormsSectionView;
