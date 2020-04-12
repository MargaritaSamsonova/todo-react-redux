import {createAction} from "redux-actions";

export const setVisibilityFilter = createAction("SET_VISIBILITY_FILTER", filter => filter);

export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_ACTIVE: "SHOW_ACTIVE",
    SHOW_DONE: "SHOW_DONE",
}
