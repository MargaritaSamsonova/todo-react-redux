import {createAction} from "redux-actions";

let nextTodoId = 0;

export const addTodo = createAction("ADD_TODO", (text) => ({
    id: ++nextTodoId,
    text: text,
    done: false
}));

export const toggleTodo = createAction("TOGGLE_TODO", id => id);

export const deleteTodo = createAction("DELETE_TODO", id => id);
