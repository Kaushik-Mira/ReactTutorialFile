import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  let [todolist, setTodolist] = useState([]);

  const saveToDoList = (event) => {
    let todoname = event.target.todoname.value;

    if (!todolist.includes(todoname)) {
      let finalDolist = [...todolist, todoname];
      setTodolist(finalDolist);
    } else {
      alert("ToDo name already exits.");
    }

    event.preventDefault();
  };

  let list = todolist.map((value, index) => {

    return (
      <ToDoListItems
        key={index}
        value={value}
        indexNumber={index}
        setTodolist={setTodolist}
        todolist={todolist}
      />
    );
  });
  return (
    <div className="container">
      <h2>ToDo List</h2>
      <form onSubmit={saveToDoList}>
        <input type="text" name="todoname" spellCheck="true" />
        <button>Save</button>
      </form>
      <ul>{list}</ul>
    </div>
  );
};

export default TodoList;

function ToDoListItems({ value, indexNumber, todolist, setTodolist }) {
  let [status, setStatus] = useState(false);

  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i !== indexNumber);
    setTodolist(finalData);
  };

  let checkStatus = () => {
    setStatus(!status);
  };
  return (
    <li className={status ? "active" : ""} onClick={checkStatus}>
      {indexNumber + 1}. {value} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
