import React from "react";
import styles from "./App.module.css";
import DarkModeProvider from "./context/darkmode_context";
import Todo from "./Todo";

function App() {
  return (
    <DarkModeProvider>
      <div className={styles.background}>
        <Todo />
      </div>
    </DarkModeProvider>
  );
}

export default App;
