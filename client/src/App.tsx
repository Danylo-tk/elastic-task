import styles from "./App.module.css";
import FormSectionApi from "./FormsSection/FormSectionApi";

function App() {
  return (
    <>
      <h1 className={styles.header}>Provide your information:</h1>
      <FormSectionApi />
    </>
  );
}

export default App;
