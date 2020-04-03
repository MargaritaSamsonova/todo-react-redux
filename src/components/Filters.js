import React from "react";
import FilterLink from "../containers/FilterLink";
import {VisibilityFilters} from "../actions";

export const Filter = () => (
    <div>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            All
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            Active
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_DONE}>
            Done
        </FilterLink>
    </div>
)
