import React, { useState } from "react";
import styles from "./Darkmode.module.css";
import { BsMoonFill, BsSun } from "react-icons/bs";

export default function Darkmode({ isDark, setIsDark }) {
  const handleClick = () => {
    if (isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  };
  return (
    <div className={styles["darkmode-container"]}>
      {isDark ? (
        <BsSun onClick={handleClick} />
      ) : (
        <BsMoonFill onClick={handleClick} />
      )}
    </div>
  );
}
