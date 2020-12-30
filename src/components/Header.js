import React from "react";
import { useSelector } from "react-redux";
import styles from "./Header.module.css";

const Header = () => {
  const counter = useSelector((state) => {
    return state;
  });
  return (
    <header className={styles.header}>
      <h3 className={styles.counter}>Contador</h3>
      <div className={styles.counter}>{counter}</div>
    </header>
  );
};

export default Header;
