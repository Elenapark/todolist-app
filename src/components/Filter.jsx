import React, { useContext } from "react";
import { ThemeContext } from "../context/darkmode_context";
import styles from "./Filter.module.css";

const TABS = ["All", "Active", "Completed"];

export default function Filter({ tab, setTab }) {
  const { darkMode } = useContext(ThemeContext);
  const handleTab = (idx) => {
    setTab(TABS[idx]);
  };
  return (
    <ul
      className={styles["nav-item"]}
      style={{ background: darkMode ? "black" : "white" }}
    >
      {TABS.map((tab, idx) => (
        <li
          className={styles["list-item"]}
          key={tab + idx}
          style={{ color: darkMode ? "white" : "black" }}
          onClick={() => handleTab(idx)}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
}
