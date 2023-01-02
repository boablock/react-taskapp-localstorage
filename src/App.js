import "./App.css";
import { useState, useEffect } from "react";
import { TaskCreator } from "./Components/TaskCreator";
import TaskTable from "./Components/TaskTable";

function App() {
  const [tasksItems, setTasksItems] = useState([]);

  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
    //--> esto va a devolver un objeto que encontro, o si no existe, undefined.
  }

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={tasksItems} toggleTask={toggleTask}/>
    </div>
  );
}

export default App;
