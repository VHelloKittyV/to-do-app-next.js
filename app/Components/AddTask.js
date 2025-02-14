import React from "react";
import Button from "./Button";
export default function AddTask({ title, setTitle, onAdd }) {
  return (
    <div className="flex items-center justify-between gap-4 mb-5 mt-3  rounded-md p-4 shadow-md">
      <input
        className="rounded-md py-2 px-2 w-[80%] border"
        type="text"
        placeholder="Add your task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)} 
      />
      <Button onClick={onAdd}>Add Task</Button>
    </div>
  );
}
