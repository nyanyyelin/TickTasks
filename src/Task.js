const Task = ({ task, onDeleteTask, onHandleCheckbox }) => {
  return (
    <li className="checklist-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onHandleCheckbox(task.id)}
      ></input>
      <span
        className="task-description"
        style={
          task.completed
            ? { textDecoration: "line-through", fontStyle: "italic" }
            : {}
        }
      >
        {task.taskName}
      </span>
      <div className="button-time">
        <span className="added-time">{task.createdDate}</span>
        <button className="delete-button" onClick={() => onDeleteTask(task.id)}>
          🗑️
        </button>
      </div>
    </li>
  );
};

export default Task;
