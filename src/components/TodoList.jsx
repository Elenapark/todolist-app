import React from "react";
import styles from "./TodoList.module.css";
import { BsTrash2 } from "react-icons/bs";

export default function TodoList({ todoList, updateTodo, deleteTodo }) {
  return (
    <div>
      {todoList.length === 0 ? (
        <p className={styles["no-list"]}>오늘 할일은 무엇인가요?</p>
      ) : (
        <ul className={styles["todo-list"]}>
          {todoList.map((todo, idx) => {
            return (
              <li className={styles["todo-item"]} key={`todo-${idx}`}>
                <div>
                  <input
                    type="checkbox"
                    name="update-todo"
                    id="update-todo"
                    checked={todo.isCompleted}
                    onChange={() => updateTodo(idx)}
                  />
                  {todo.isCompleted ? (
                    <label htmlFor="update-todo">
                      <s>{todo.content}</s>
                    </label>
                  ) : (
                    <label htmlFor="update-todo">{todo.content}</label>
                  )}
                </div>
                <BsTrash2 onClick={() => deleteTodo(idx)} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
