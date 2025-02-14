import React from "react";
import Button from "./Button";

export default function ToDoList({ tasks, onDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li className="flex items-center justify-between mb-2 text-left" key={task.id}>
          {task.title}
          <Button onClick={() => onDelete(task.id)}>Delete</Button>
        </li>
      ))}
    </ul>
  );
}
