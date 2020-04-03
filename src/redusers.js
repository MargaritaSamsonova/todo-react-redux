import {combineReducers} from "redux";
import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from "./actions";
import {SET_VISIBILITY_FILTER, VisibilityFilters} from "./actions"

const initialState = [];

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
            break;
        case DELETE_TODO:
            return state.filter((todo) => {
                return !(todo.id === action.payload);
            });
            break;
        case TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });
            break;
        default:
            return state;
    }
}

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.payload;
            break;
        default:
            return state;
    }
}

export default combineReducers({
    todos,
    visibilityFilter
})
