import React from "react";
import styles from "./AddTodo.module.css";

export default function AddTodo({ todoInput, onChange, onSubmit }) {
  return (
    <form className={styles["input-container"]} onSubmit={onSubmit}>
      <input
        className={styles["add-input"]}
        type="text"
        name="add-input"
        placeholder="Add Todo"
        value={todoInput}
        onChange={onChange}
      />
      <button className={styles["add-button"]} type="submit">
        Add
      </button>
    </form>
  );
}
