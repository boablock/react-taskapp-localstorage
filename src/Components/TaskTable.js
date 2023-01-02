import React from "react";

const TaskTable = ({tasks}) => {
  return (
    
      <table>
        <thead>
          <tr>
            <th> Taks</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.name}>
              <td>
                {task.name}
                <input type="checkbox" value={task.done}></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
  );
};

export default TaskTable;
