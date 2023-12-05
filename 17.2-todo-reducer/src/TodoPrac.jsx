import React, { useEffect, useReducer, useState } from "react";

function reducer(state, action) {
  const { type } = action;
  console.log(action.payload);
  switch (type) {
    case "add-todo":
      return [
        ...state,
        { id: Math.random(), list: action.payload, done: false },
      ];
    case "remove-todo":
      return state.filter((todo) => todo.id !== action.payload);
    case "update-todo":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, list: action.payload.list }
          : todo
      );
    case "toggle-done":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

function TodoPrac() {
  const [inputVal, setInputVal] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  function addToDo() {
    dispatch({ type: "add-todo", payload: inputVal });
  }
  function removeTodo(id) {
    dispatch({ type: "remove-todo", payload: id });
  }
  function updateTodo(id) {
    dispatch({ type: "update-todo", payload: { id, list: inputVal } });
  }

  function toggleDone(id) {
    dispatch({ type: "toggle-done", payload: id });
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={addToDo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <li style={{ textDecoration: todo.done ? "line-through" : "none" }}>
              {todo.list}
              <input
                type="checkbox"
                checked={todo.done || false}
                onChange={() => toggleDone(todo.id)}
              />
            </li>

            <button onClick={() => removeTodo(todo.id)}>Remove</button>
            <button onClick={() => updateTodo(todo.id)}>Update</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoPrac;
