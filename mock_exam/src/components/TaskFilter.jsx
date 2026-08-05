"use client";

import { useTasks } from "../context/TaskContext";

export default function TaskFilter() {
  const { state, dispatch } = useTasks();
  const filters = ["ALL", "COMPLETED", "PENDING"];

  return (
    <div style={{ marginBottom: "1rem", display: "flex", gap: "0.5rem" }}>
      {filters.map((filterName) => (
        <button
          key={filterName}
          onClick={() => dispatch({ type: "SET_FILTER", payload: filterName })}
          style={{
            fontWeight: state.filter === filterName ? "bold" : "normal"
          }}
        >
          {filterName}
        </button>
      ))}
    </div>
  );
}
