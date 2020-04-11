import React from "react";
import styles from "./Todo.module.css";

export const Todo = ({id, text, done, onTodoClick, onDeleteClick}) => (
    <li className={styles.todo}>
        <button className={styles.checkbox}
                type="button"
                onClick={onTodoClick.bind(null, id)}>
                {done && <span className={styles.done}></span>}
        </button>
        <div className={styles.text} onClick={onTodoClick.bind(null, id)}>{text}</div>
        <button className={styles.delete}
                type="button"
                onClick={onDeleteClick.bind(null, id)}
        >
        </button>
    </li>
)
