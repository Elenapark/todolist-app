import React, { useContext } from "react";
import styles from "./TodoList.module.css";
import { ThemeContext } from "../context/darkmode_context";
import EachTodo from "./EachTodo";

export default function TodoList({ todoList, updateTodo, deleteTodo }) {
  const { darkMode } = useContext(ThemeContext);

  if (todoList.length === 0) {
    return (
      <p
        className={styles["no-list"]}
        style={{
          background: darkMode ? "black" : "#f4f4f4",
          color: darkMode ? "white" : "black",
          border: `1px solid ${darkMode ? "white" : "none"}`,
        }}
      >
        오늘 할일은 무엇인가요?
      </p>
    );
  }

  return (
    <div>
      <ul className={styles["todo-list"]}>
        {todoList.map((todo, idx) => {
          return (
            <EachTodo
              key={todo.id + idx}
              todo={todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}
