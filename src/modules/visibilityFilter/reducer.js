import {handleActions} from "redux-actions";
import {setVisibilityFilter, VisibilityFilters} from "./actions";

export const visibilityFilter = handleActions({
    [setVisibilityFilter]: (state, action) => action.payload,
}, VisibilityFilters.SHOW_ALL);
