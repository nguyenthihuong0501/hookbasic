// render danh sach todos voi du lieu duoc truyen tu componemt
// khi click mot item thi remove item ra khoi danh sach

import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  //dat ten todolist
  todos: PropTypes.array, // co hai prop array va funtion
  onTodoClick: PropTypes.func,
};
//todos: PropTypes.array.isRequired
// khi ko co isRequired thi phai xet gia tri mac dinh
TodoList.defaultProps = {
  todos: [], // neu cha ko truyen todo xuong thi gia tri mac dinh rong
  onTodoClick: null, //teu onTodoClick ko truyen xuong thi gia tri null
};

function TodoList(props) {
  const { todos, onTodoClick } = props; //lay props ra

  //moi lan todo dk click goi ham hanleclick
  function handleClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
    //kiem tra xem co onTodoClick, thi moi goi onTodoClick
  }

  return (
    //truyen vao danh sach todo
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => handleClick(todo)}>
          {todo.title}
        </li>
      ))}
    </ul>
    //truyen key co unit cua todo
  );
}

export default TodoList;
