import React from "react";
import TaskRow from "./TaskRow";

const TaskTable = ({ tasks,toggleTask }) => {
  return (
    <table>
      <thead>
        <tr>
          <th> Taks</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
