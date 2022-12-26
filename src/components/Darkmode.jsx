import React, { useContext } from "react";
import styles from "./Darkmode.module.css";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { ThemeContext } from "../context/darkmode_context";

export default function Darkmode() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={styles["darkmode-container"]}
      onClick={() => toggleDarkMode()}
    >
      {darkMode ? (
        <BsSun color="orange" size="24" />
      ) : (
        <BsMoonFill color="black" size="24" />
      )}
    </div>
  );
}
