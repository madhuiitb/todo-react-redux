/* eslint-disable react/prop-types */

import TaskModal from "./TaskModal";

const CreateTask = ({
  handleForm,
  formData,
  setFormData,
  handleModal,
  isOpen,
}) => {
  return (
    <div>
      <button onClick={handleModal}>Create Task</button>
      <TaskModal
        isOpen={isOpen}
        handleClose={handleModal}
        formData={formData}
        setFormData={setFormData}
        handleForm={handleForm}
      />
    </div>
  );
};
export default CreateTask;