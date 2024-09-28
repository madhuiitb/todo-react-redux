/* eslint-disable react/prop-types */

import TaskTile from "./TaskTile";
import './Tasks.css';

const Tasks = ({ data, onEdit, onDelete }) => {
  return (
    <div className="tasks">
      {data.map((task) => (
        <TaskTile
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
export default Tasks;