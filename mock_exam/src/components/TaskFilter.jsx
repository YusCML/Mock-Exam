import React from "react";
import { useTasks } from "../context/TaskContext";

const FILTERS = ["ALL", "COMPLETED", "PENDING"];

export default function TaskFilter() {
  const { state, dispatch } = useTasks();

  return (
    <div style={{ marginBottom: "1rem", display: "flex", gap: "0.5rem" }}>
      {FILTERS.map((filterName) => (
        <button
          key={filterName}
          onClick={() =>
            dispatch({ type: "SET_FILTER", payload: filterName })
          }
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