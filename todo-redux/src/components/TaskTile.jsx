/* eslint-disable react/prop-types */
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";


import "./TaskTile.css";

const TaskTile = ({ task, onEdit, onDelete }) => {


    return (
      <div className="task-tile">
        <div className="task-details">
          <div
            className="task-bar"
          >
            <span className="task-title">{task.title}</span>
            <span className="task-buttons">
             <FaPencil size={16} onClick={()=>onEdit(task)} />
              <MdDelete size={20} onClick={()=>onDelete(task.id)} />
            </span>
          </div>
          <span>{task.description}</span>
        </div>
      </div>
    );
}
export default TaskTile;