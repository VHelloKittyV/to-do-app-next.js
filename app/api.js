export const getTasks = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos?`);
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
};

export const deleteTask = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) throw new Error("Failed to delete task");
  return response.json();
};

export const addTask = async (title) => {
  const newTask = {
    id: Date.now(),
    title,
    body: "Some body",
    userId: 1,
  };

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newTask),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (!response.ok) throw new Error("Failed to add task");

  return newTask;
};
