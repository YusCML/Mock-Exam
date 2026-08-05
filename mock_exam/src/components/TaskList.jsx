"use client";

import { useTasks } from "../context/TaskContext";

export default function TaskList() {
  const { state, dispatch } = useTasks();
  const { tasks, filter } = state;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "COMPLETED") return task.completed;
    if (filter === "PENDING") return !task.completed;
    return true;
  });

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {filteredTasks.length === 0 ? (
        <li>No tasks found.</li>
      ) : (
        filteredTasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "0.5rem"
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() =>
                dispatch({ type: "TOGGLE_TASK", payload: task.id })
              }
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none"
              }}
            >
              {task.text}
            </span>
            <button
              onClick={() =>
                dispatch({ type: "DELETE_TASK", payload: task.id })
              }
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
}
