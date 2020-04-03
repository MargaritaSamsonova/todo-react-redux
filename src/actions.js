let nextTodoId = 0;

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        text: text,
        done: false
    }
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: id
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id
})

export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    payload: filter
})

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_ACTIVE: "SHOW_ACTIVE",
    SHOW_DONE: "SHOW_DONE",
}
