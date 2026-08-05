import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

export default function TaskInput() {
  const [text, setText] = useState("");
  const { dispatch } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    dispatch({ type: "ADD_TASK", payload: text.trim() });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        value={text}
        placeholder="Enter a new task..."
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}