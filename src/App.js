import "./App.css";
import TaskInput from "./TaskInput";
import Box from "./TaskBox";
import TaskList from "./TaskList";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);

  const addNewTask = (newTaskName) => {
    if (newTaskName === "") return;
    const timestamp = Date.now();
    const newTask = {
      completed: false,
      taskName: newTaskName,
      id: timestamp,
      createdDate: new Date(timestamp).toLocaleString().split(",")[0],
    };
    setTaskList((list) => [...list, newTask]);
  };

  const deleteTask = (id) => {
    setTaskList((list) => list.filter((item) => item.id !== id));
  };

  const handleCheckbox = (id) => {
    setTaskList((prevList) =>
      prevList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Main>
      <Header />
      <TaskInput handleAddNewTask={addNewTask} />
      <div className="tasks">
        <Box>
          <h2>In Progress</h2>
          <TaskList
            taskList={taskList.filter((task) => !task.completed)}
            onDeleteTask={deleteTask}
            onHandleCheckbox={handleCheckbox}
          />
        </Box>
        <Box>
          <h2>Completed</h2>
          <TaskList
            taskList={taskList.filter((task) => task.completed)}
            onDeleteTask={deleteTask}
            onHandleCheckbox={handleCheckbox}
          />
        </Box>
      </div>
    </Main>
  );
}

const Header = () => {
  return <h1 className="header">TickTasks</h1>;
};

const Main = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default App;
