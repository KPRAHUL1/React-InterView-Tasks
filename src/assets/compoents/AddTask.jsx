import React, { useState } from "react";
import { useTask } from "../context/TaskContext";

const AddTask = () => {
  const { addTask } = useTask();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      id: Date.now(),
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto my-10 p-6 bg-white rounded shadow">
      <input
        className="w-full border px-3 py-2 mb-4"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="w-full border px-3 py-2 mb-4"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
