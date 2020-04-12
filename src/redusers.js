import {combineReducers} from "redux";
import {handleActions} from "redux-actions";
import {createSelector} from "reselect";
import {addTodo, deleteTodo, toggleTodo} from "./actions";
import {setVisibilityFilter, VisibilityFilters} from "./actions";

const initialState = [];

const todos = handleActions({
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

const visibilityFilter = handleActions({
    [setVisibilityFilter]: (state, action) => action.payload,
}, VisibilityFilters.SHOW_ALL);

export const getTodos = state => state.todos;
export const getVisibilityFilter = state => state.visibilityFilter;

export default combineReducers({
    todos,
    visibilityFilter
})
