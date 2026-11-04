import { useState, useEffect } from "react";
import "./index.css";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };

    setTasks(prev => [newTask, ...prev]);
    setInput("");
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(task => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // Derived values: computed from tasks + filter, never stored
  const visibleTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "done") return task.completed;
    return true;
  });
  const tasksLeft = tasks.filter(task => !task.completed).length;

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

        <div className="filters">
          {["all", "active", "done"].map(f => (
            <button
              key={f}
              type="button"
              className={filter === f ? "filter active" : "filter"}
              onClick={() => setFilter(f)}
            >
              {f === "all" ? "All" : f === "active" ? "Active" : "Done"}
            </button>
          ))}
        </div>

        <div className="task-list">
          {visibleTasks.length === 0 && (
            <p className="empty">
              {tasks.length === 0
                ? "No tasks yet. Start adding ✨"
                : "Nothing here. Try another filter."}
            </p>
          )}

          {visibleTasks.map(task => (
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
                aria-label="Delete task"
              >
                ✖
              </button>
            </div>
          ))}
        </div>

        {tasks.length > 0 && (
          <p className="counter">
            {tasksLeft} {tasksLeft === 1 ? "task" : "tasks"} left
          </p>
        )}
      </div>
    </div>
  );
}