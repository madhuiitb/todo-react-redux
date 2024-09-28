import { useState } from "react";
import CreateTask from "./components/CreateTask"
import Tasks from "./components/Tasks"
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask, removeTask } from "./components/TaskSlice";
const tasksTemp = [
  {
    id: 0,
    title: "task 0",
    description: "Implementation of the todo 0",
  },
  {
    id: 1,
    title: "task 1",
    description: "Implementation of the todo 1",
  },
  {
    id: 2,
    title: "task 2",
    description: "Implementation of the todo 2",
  },
  {
    id: 3,
    title: "task 3",
    description: "Implementation of the todo 3",
  },
  {
    id: 4,
    title: "task 4",
    description: "Implementation of the todo 4",
  },
];

function App() {

  const [tasks, setTasks] = useState(tasksTemp);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  
  const dispatch = useDispatch();
  const tasksRedux = useSelector((state) => state.tasks.tasks);

const handleModal = () => {
  setIsOpen((prevState) => !prevState);
};
  
  
  const handleForm = (e) => {
    e.preventDefault();

    if (editingTaskId) {
      // Update the existing task
      dispatch(updateTask({ ...formData, id: editingTaskId }));
      setEditingTaskId(null); // Reset editing state after submission
    } else {
      // Add new task
      dispatch(
        addTask({ ...formData, id: formData.id || Date.now().toString() })
      );
    }
    setFormData({ id: "", title: "", description: "" }); // Reset the form

    setTasks((prevTasks) => [...prevTasks, formData]);
    console.log("formData-", formData);
    // dispatch(addTask(formData));
    handleModal();
  };

  const onEdit = (task) => {
    handleModal();
    console.log(task);
    setFormData(task); // Populate form with task data
    setEditingTaskId(task.id); // Set editing mode with task id
  }

  const onDelete = (id) => {
    console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
    dispatch(removeTask(id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div className="">
        <CreateTask
          formData={formData}
          setFormData={setFormData}
          handleForm={handleForm}
          handleModal={handleModal}
          isOpen={isOpen}
        />
        <Tasks
          data={tasksRedux}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
}

export default App
