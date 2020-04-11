import React from "react";
import styles from "./CurrentDate.module.css";

export const CurrentDate = () => {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const d = new Date();
    const currentDay = d.getDate();
    const currentMonth = monthNames[d.getMonth()];

    return (
        <div className={styles.date}>{currentDay} {currentMonth}</div>
    )
}
