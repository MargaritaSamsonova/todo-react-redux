import {handleActions} from "redux-actions";
import {createSelector} from "reselect";
import {addTodo, deleteTodo, toggleTodo} from "./actions";

const initialState = [];

export const todos = handleActions({
        [addTodo]: (state, action) => [...state, action.payload],
        [deleteTodo]: (state, action) => (state.filter((todo) => {
            return !(todo.id === action.payload);
        })),
        [toggleTodo]: (state, action) => (
            state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            })
        )
}, initialState);
