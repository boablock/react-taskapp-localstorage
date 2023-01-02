import { useState } from "react";

export const TaskCreator = (props) => {
  // console.log(props);

  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNewTask(newTaskName);

    setNewTaskName(""); //limpia el input luego del onClick Save Task
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button onClick={() => alert(newTaskName)}> Save Task</button>
    </form>
  );
};
