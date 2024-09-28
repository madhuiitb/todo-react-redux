/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import './TaskModal.css';
const TaskModal = ({ isOpen, handleClose, handleForm, formData, setFormData }) => {


    const handleOverlayClick = (e) => {
      e.stopPropagation(); // Prevent click events from bubbling up (do nothing)
    };

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormData({
          ...formData,
          id: Math.floor(Math.random() * 999),
          [name]: value,
        });   
    }

    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden"; // Disable scrolling
      } else {
        document.body.style.overflow = "auto"; // Enable scrolling
      }
      return () => {
        document.body.style.overflow = "auto"; // Clean up when modal unmounts
      };
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }
  return (
    <div className="task-modal" onClick={handleOverlayClick}>
      <div className="modal-bar">
        <span>Create a Task</span>
        <button onClick={handleClose}>X</button>
      </div>
      <div>
        <form className="modal-content">
          <input
            className="form-fields"
            type="text"
            placeholder="Enter task title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <textarea
            className="form-fields"
            type="text"
            placeholder="Enter description for task"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
          <button type="submit" onClick={handleForm}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default TaskModal;