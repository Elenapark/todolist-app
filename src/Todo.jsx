import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "./components/AddTodo";
import Darkmode from "./components/Darkmode";
import Filter from "./components/Filter";
import styles from "./Todo.module.css";
import TodoList from "./components/TodoList";
import { ThemeContext } from "./context/darkmode_context";
import customStorage from "./utils/customStorage";

const TODO_LIST_KEY = "todolist";

export default function Todo() {
  const storageData = customStorage.getItem(TODO_LIST_KEY, {
    onError: () => {
      alert("저장된 데이터에 문제가 생겨 기본 데이터로 설정합니다.");
    },
    defalutValue: [],
  });
  const { darkMode } = useContext(ThemeContext);
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [tab, setTab] = useState("All");

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();

    if (!todoInput) return;
    const newTodo = {
      id: uuidv4(),
      content: todoInput,
      isCompleted: false,
    };
    setTodoList([...todoList, newTodo]);
    setTodoInput("");
  };

  const updateTodo = (id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    customStorage.setItem(TODO_LIST_KEY, todoList);
  }, [todoList]);

  useEffect(() => {
    if (storageData) {
      setTodoList(storageData);
    }
  }, []);

  return (
    <main
      className={styles["todo-container"]}
      style={{ background: darkMode ? "black" : "white" }}
    >
      <header className={styles.navbar}>
        <Darkmode />
        <Filter tab={tab} setTab={setTab} />
      </header>

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
