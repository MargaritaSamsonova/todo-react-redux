import React from "react";
import {Todo} from "./Todo";

export const TodoList = ({todos, onTodoClick, onDeleteClick}) => {
    debugger

    return (
        <ul>
            {todos.map((todo) => (
                <Todo key={todo.id}
                      {...todo}
                      onTodoClick={onTodoClick}
                      onDeleteClick={onDeleteClick}
                />
            ))}
        </ul>
    )
}
