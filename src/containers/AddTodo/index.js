import React from "react";
import {connect} from "react-redux";
import {addTodo} from "../../modules/todos";
import styles from "./AddTodo.module.css";

const AddTodo = ({dispatch}) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const input = event.target.text;
        const value = input.value.trim();

        value && dispatch(addTodo(value));
        input.value = '';
    }

    return (
        <form className={styles.addForm} onSubmit={onSubmitHandler}>
            <div className={styles.inputWrap}>
                <input className={styles.input} name="text" type="text" autocomplete="off" placeholder="Add a new task..."/>
            </div>
            <button className={styles.addBtn} type="submit"></button>
        </form>
    )
}

export default connect()(AddTodo);
