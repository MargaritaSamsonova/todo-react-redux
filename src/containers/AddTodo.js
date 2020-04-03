import React from "react";
import {connect} from "react-redux";
import {addTodo} from "../actions"

const AddTodo = ({dispatch}) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const input = event.target.text;
        const value = input.value.trim();

        value && dispatch(addTodo(value));
        input.value = '';
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input name="text" type="text"/>
            <button type="submit">+</button>
        </form>
    )
}

export default connect()(AddTodo);
