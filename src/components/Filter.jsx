import React from "react";
import styles from "./Filter.module.css";

const TABS = ["All", "Active", "Completed"];

export default function Filter() {
  return (
    <ul className={styles["nav-item"]}>
      {TABS.map((tab, idx) => (
        <li className={styles["list-item"]} key={tab + idx}>
          {tab}
        </li>
      ))}
    </ul>
  );
}
