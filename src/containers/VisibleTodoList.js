import React from "react";
import {connect} from "react-redux";
import {TodoList} from "../components/TodoList";
import {deleteTodo, toggleTodo, VisibilityFilters} from "../actions";
import {getTodos, getVisibilityFilter} from "../redusers";

const getFilteredList = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_DONE:
            return todos.filter(t => t.done);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.done);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    todos: getFilteredList(getTodos(state), getVisibilityFilter(state)),
    lengthAllTodos: getTodos(state).length
})

const mapDispatchToProps = dispatch => ({
    onTodoClick: id => dispatch(toggleTodo(id)),
    onDeleteClick: id => dispatch(deleteTodo(id))
})

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
