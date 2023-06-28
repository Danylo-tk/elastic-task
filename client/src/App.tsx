import styles from "./App.module.css";
import DataSection from "./DataSection";
import FormSectionApi from "./FormsSection/FormSectionApi";

function App() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.header}>Provide your information:</h1>
        <FormSectionApi />
      </div>
      <div>
        <h1 className={styles.header}>Information from DB:</h1>
        <DataSection />
      </div>
    </main>
  );
}

export default App;
