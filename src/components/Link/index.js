import React from "react";
import styles from "./Link.module.css";

export const Link = ({children, active, onFilterClick}) => (
    <button className={styles.link} type="button" onClick={onFilterClick} disabled={active}>{children}</button>
)
