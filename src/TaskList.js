import Task from "./Task";

const TaskList = ({ taskList, onDeleteTask, onHandleCheckbox }) => {
  return (
    <ul>
      {taskList.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onHandleCheckbox={onHandleCheckbox}
        />
      ))}
    </ul>
  );
};

export default TaskList;
