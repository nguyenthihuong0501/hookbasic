import React, { useState, useEffect } from "react";
//import logo from "./logo.svg";
import "./App.scss";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
//import { useState } from "react";

function App() {
  const [todolist, setTodoList] = useState([
    { id: 1, title: "I love Easy react" },
    { id: 2, title: "I love Easy react" },
    { id: 3, title: "I love Easy react" },
  ]);
  const [postlist, setPostList] = useState([]);
  // viet API
  useEffect(async () => {
    async function fetchPostList() {
      const requestUrl =
        " http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      console.log(responseJSON);
    }

    await fetchPostList();
  }, []); //lay du lieu lan dau su dung [], ko phu thuoc thang nao, chay dung 1 lan

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todolist.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todolist];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log("form submit: ".formValues);
    // add new todo to current to list
    const newTodo = {
      id: todolist.length + 1,
      ...formValues,
    };
    const newTodoList = [...todolist];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  return (
    <div className="app">
      <h1> React hook - Poslist </h1>

      {/* <TodoForm onSubmit={handleTodoFormSubmit} />

      <TodoList todos={todolist} onTodoClick={handleTodoClick} /> */}
    </div>
  );
}

export default App;
