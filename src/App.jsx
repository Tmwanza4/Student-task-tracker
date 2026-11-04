import { useState } from "react";
import "./index.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function addTask(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setInput("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <div className="app">
      <div className="card">
        <h1>✨ Student Task Tracker</h1>

        <form onSubmit={addTask} className="form">
          <input
            type="text"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button>Add</button>
        </form>

        <div className="task-list">
          {tasks.length === 0 && (
            <p className="empty">No tasks yet. Start adding ✨</p>
          )}

          {tasks.map(task => (
            <div key={task.id} className="task">
              <span
                onClick={() => toggleTask(task.id)}
                className={task.completed ? "completed" : ""}
              >
                {task.text}
              </span>

              <button
                className="delete"
                onClick={() => deleteTask(task.id)}
              >
                ✖
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}