import styles from "./FormSection.module.css";

const FormsSection = () => {
  return (
    <section>
      <form className={styles.form}>
        <div className={styles.inputBlock}>
          <label htmlFor="" className={styles.inputLabel}>
            Name
          </label>
          <input type="text" placeholder="e.g. John" className={styles.input} />
        </div>
        <div className={styles.inputBlock}>
          <label htmlFor="" className={styles.inputLabel}>
            Surname
          </label>
          <input type="text" placeholder="e.g. Doe" className={styles.input} />
        </div>
        <div className={styles.inputBlock}>
          <label htmlFor="" className={styles.inputLabel}>
            Age
          </label>
          <input type="text" placeholder="e.g. 20" className={styles.input} />
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default FormsSection;
