import React from "react";
import { TaskProvider } from "./context/TaskContext";
import TaskInput from "./components/TaskInput";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <TaskProvider>
      <div style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
        <h1>TaskTrack</h1>
        <TaskInput />
        <TaskFilter />
        <TaskList />
      </div>
    </TaskProvider>
  );
}