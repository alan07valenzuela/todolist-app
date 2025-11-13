import { useState } from "react";
import { Task } from "./types";
interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function TaskInput({ tasks, setTasks }: TaskListProps) {
  const [input, setInput] = useState("");

  function addTask() {
    const inputFree = input.trim();
    if (inputFree === "") return;
    const newTask: Task = {
      id: Date.now(),
      text: inputFree,
      done: false,
    };
    setTasks([newTask, ...tasks]);
    setInput("");
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}> Agregar Tareita </button>
    </div>
  );
}

export default TaskInput;
