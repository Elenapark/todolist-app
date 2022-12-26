import React from "react";
import styles from "./App.module.css";
import Todo from "./Todo";

function App() {
  return (
    <div className={styles.background}>
      <Todo />
    </div>
  );
}

export default App;
