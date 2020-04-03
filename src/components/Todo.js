import React from "react";

export const Todo = ({id, text, done, onTodoClick, onDeleteClick}) => (
    <li>
    {done && <span>+ </span>}
        <button type="button"
                onClick={onTodoClick.bind(null, id)}>
            {text}
        </button>
        <button type="button"
                onClick={onDeleteClick.bind(null, id)}
        >
                &#128465;
        </button>
    </li>
)
