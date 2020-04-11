import React from "react";
import {Todo} from "../Todo";
import {Filter} from "../Filters";
import styles from "./TodoList.module.css";

export const TodoList = ({todos, lengthAllTodos, onTodoClick, onDeleteClick}) => {
    if (!lengthAllTodos) return '';

    return (
        <>
            <ul className={styles.todos}>
                {todos.map((todo) => (
                    <Todo key={todo.id}
                          {...todo}
                          onTodoClick={onTodoClick}
                          onDeleteClick={onDeleteClick}
                    />
                ))}
            </ul>
           <Filter/>
        </>
    )
}
