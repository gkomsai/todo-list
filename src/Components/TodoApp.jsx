import React, { useState } from "react";
import Todolist from "./TodoIist";
import TodoInput from "./TodoInput";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (el) => {
    // console.log(el);
setTodos([...todos, { id: Date.now(), value: el }]);
  };
  const deleteTodo = (id) => {
    // console.log(id);
  let newTodo =  todos.filter(el=> el.id !== id)
  setTodos(newTodo);
  };

  return (
    <>
      <TodoInput addTodo={addTodo} />
      <Todolist todos={todos} key={todos.id} deleteTodo={deleteTodo} />
    </>
  );
};

export default TodoApp;
