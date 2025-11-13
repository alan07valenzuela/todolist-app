import type { Task } from "./types";

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function TaskList({ tasks, setTasks }: TaskListProps) {
  const toggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <ul className="lista-tareas">
        {tasks.length === 0 && <li> No hay Tareas aún. </li>}
        {tasks.map((task) => (
          <li key={task.id} className="linea-tarea">
            <span
              className={task.done ? "done" : ""}
              onClick={() => toggleTask(task.id)}
              title="Marcar como completada">
              {task.text}
            </span>
            <button onClick={() => removeTask(task.id)} title="Eliminar Tarea">
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
