import React, { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import Darkmode from "./components/Darkmode";
import Filter from "./components/Filter";
import styles from "./Todo.module.css";

import TodoList from "./components/TodoList";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [isDark, setIsDark] = useState(false);

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const addTodo = (e) => {
    if (!todoInput) return;

    e.preventDefault();
    const newTodo = {
      content: todoInput,
      isCompleted: false,
    };
    setTodoList([...todoList, newTodo]);
    setTodoInput("");
    console.log(todoList);
  };

  const updateTodo = (id) => {
    setTodoList(
      todoList.map((todo, idx) => {
        if (idx === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((_, idx) => idx !== id));
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <main className={styles["todo-container"]}>
      {/* navbar */}
      <div className={styles.navbar}>
        <Darkmode isDark={isDark} setIsDark={setIsDark} />
        <Filter />
      </div>

      <TodoList
        todoList={todoList}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />

      <AddTodo
        todoInput={todoInput}
        onChange={handleInputChange}
        onSubmit={addTodo}
      />
    </main>
  );
}
