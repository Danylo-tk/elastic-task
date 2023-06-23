import FormsSection from "./FormsSection/FormSection";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <h1 className={styles.header}>Provide your information:</h1>
      <FormsSection />
    </>
  );
}

export default App;
