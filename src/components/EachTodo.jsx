import React, { useContext } from "react";
import styles from "./EachTodo.module.css";
import { ThemeContext } from "../context/darkmode_context";
import { BsTrash2 } from "react-icons/bs";

export default function EachTodo({ todo, updateTodo, deleteTodo }) {
  const { darkMode } = useContext(ThemeContext);
  return (
    <li
      className={styles["todo-item"]}
      key={`todo-${todo.id}`}
      style={{
        color: darkMode ? "white" : "black",
      }}
    >
      <div>
        <label htmlFor={`checkbox${todo.id}`}>
          <input
            type="checkbox"
            name="update-todo"
            id={`checkbox${todo.id}`}
            checked={todo.isCompleted}
            onChange={() => {
              updateTodo(todo.id);
            }}
          />

          {todo.isCompleted ? <s>{todo.content}</s> : <>{todo.content}</>}
        </label>
      </div>
      <div>
        <BsTrash2 onClick={() => deleteTodo(todo.id)} />
      </div>
    </li>
  );
}
