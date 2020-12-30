import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  return (
    <div className={styles.center}>
      <div className={styles.counter}>{counter}</div>
      <button
        className={styles.button}
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -
      </button>
      <button
        className={styles.button}
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
