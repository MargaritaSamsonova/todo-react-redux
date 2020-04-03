import React from "react";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import {Filter} from "./Filters";

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <VisibleTodoList/>
      <Filter/>
    </div>
  );
}

export default App;
