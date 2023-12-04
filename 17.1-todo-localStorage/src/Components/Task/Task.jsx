import React from "react";
import "./Task.css";

export default function Task({
  task,
  index,
  handleDeleteTask,
  handleChangeStatus,
}) {
  return (
    <>
      <div className="task-card">
        <p onClick={() => handleChangeStatus(index)}>{`${
          task.isDone ? "V" : "X"
        }`}</p>
        <p>{task.name}</p>
        <button onClick={() => handleDeleteTask(index)}>Delete</button>
      </div>
    </>
  );
}
