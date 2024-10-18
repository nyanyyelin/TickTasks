import { useState } from "react";
const TaskInput = ({ handleAddNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleAddNewTask(newTaskName);
    setNewTaskName("");
  };
  return (
    <form className="input-form" onSubmit={onSubmit}>
      <input
        className="input-bar"
        type="text"
        placeholder="Add a new task"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      ></input>
      <button type="submit" className="button">
        Add
      </button>
    </form>
  );
};

export default TaskInput;
