import { useEffect, useState } from "react";
import "./App.css";
import AddToDo from "./Components/AddToDo/AddToDo";
import Task from "./Components/Task/Task";

function App() {
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (task) => {
    setTaskList((oldTask) => [...oldTask, task]);
  };
  useEffect(() => {
    const taskStorage = localStorage.getItem("tasks");
    const readStorage = JSON.parse(taskStorage);
    if (taskStorage) {
      setTaskList(readStorage);
    }
  }, []);

  useEffect(() => {
    const todoData = JSON.stringify(taskList);
    localStorage.setItem("tasks", todoData);
  }, [taskList]);

  const handleDeleteTask = (taskToDeleteIndex) => {
    const updatedTaskList = taskList.filter((task, index) => {
      return index !== taskToDeleteIndex;
    });
    setTaskList(updatedTaskList);
  };

  const handleChangeStatus = (taskToChangeIndex) => {
    const updatedTaskList = taskList.map((task, index) => {
      return index === taskToChangeIndex
        ? { name: task.name, isDone: !task.isDone }
        : task;
    });

    setTaskList(updatedTaskList);
  };

  return (
    <main>
      <div>
        <h1>TODO's</h1>
        <h3>Local Storage CRUD app</h3>
        <h3>CRUD - Create Read Update Delete</h3>
      </div>
      <AddToDo handleAddTask={handleAddTask} />
      {taskList.map((taskName, i) => {
        return (
          <Task
            key={i}
            index={i}
            task={taskName}
            handleDeleteTask={handleDeleteTask}
            handleChangeStatus={handleChangeStatus}
          />
        );
      })}
    </main>
  );
}

export default App;
