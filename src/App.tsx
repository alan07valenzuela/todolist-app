import { useEffect, useState } from "react";
import type { Task } from "./types";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";


function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    let localTasks = localStorage.getItem("tasks");
    return localTasks ? JSON.parse(localTasks) : [];
  });

  useEffect(() => {localStorage.setItem("tasks", JSON.stringify(tasks))}, [tasks]);

  return (
    <div>
      <h1> Todo List </h1>
      <br />
      <TaskInput tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
