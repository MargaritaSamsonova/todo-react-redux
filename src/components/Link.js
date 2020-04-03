import React from "react";

export const Link = ({children, active, onFilterClick}) => (
    <button type="button" onClick={onFilterClick} disabled={active}>{children}</button>
)
