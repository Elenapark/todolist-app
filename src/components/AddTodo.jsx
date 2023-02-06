import React, { useContext } from "react";
import { ThemeContext } from "../context/darkmode_context";
import styles from "./AddTodo.module.css";

export default function AddTodo({ todoInput, onChange, onSubmit }) {
  const { darkMode } = useContext(ThemeContext);
  return (
    <form className={styles["input-container"]} onSubmit={onSubmit}>
      <input
        className={styles["add-input"]}
        style={{
          backgroundColor: darkMode ? "orange" : "white",
          border: darkMode ? "none" : "1px solid #c4c4c4",
        }}
        type="text"
        name="add-input"
        placeholder="Add Todo"
        value={todoInput}
        onChange={onChange}
      />
      <button
        className={styles["add-button"]}
        type="submit"
        style={{
          background: darkMode ? "black" : "#c4c4c4",
          color: darkMode ? "white" : "black",
          border: darkMode ? "1px solid orange" : "1px solid #c4c4c4",
        }}
      >
        Add
      </button>
    </form>
  );
}
