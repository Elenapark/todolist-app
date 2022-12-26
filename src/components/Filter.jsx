import React, { useContext } from "react";
import { ThemeContext } from "../context/darkmode_context";
import styles from "./Filter.module.css";

export default function Filter({ tabs, tab, setTab }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <ul
      className={styles["nav-item"]}
      style={{ background: darkMode ? "black" : "white" }}
    >
      {tabs.map((el, idx) => (
        <li
          className={styles["list-item"]}
          key={el + idx}
          style={{
            color: darkMode ? "white" : "black",
            borderBottom:
              tab === el ? "3px solid orange" : "3px solid transparent",
          }}
          onClick={() => setTab(el)}
        >
          {el}
        </li>
      ))}
    </ul>
  );
}
