"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AddTask from "./../Components/AddTask";
import ToDoList from "./../Components/ToDoList";
import { getTasks, deleteTask, addTask } from "./../api";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetchTasks() {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleAdd = async () => {
    if (!title.trim()) return;

    try {
      const newTask = await addTask(title);
      setTasks((prevTasks) => [newTask, ...prevTasks]);
      setTitle("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-4 px-2">
      <main className="flex flex-col text-center my-5">
        <Link
          href={'/'}
          className="border rounded-md px-3 py-2 w-16 "
        >
          Back
        </Link>
        <AddTask title={title} setTitle={setTitle} onAdd={handleAdd} />
        <ToDoList tasks={tasks} onDelete={handleDelete} />
      </main>
    </div>
  );
}
