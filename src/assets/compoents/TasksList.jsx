import React from "react";
import { useTask } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, deleteTask } = useTask();

  return (
    <div className="max-w-xl mx-auto">
      {tasks.map((task) => (
        <div key={task.id} className="p-4 mb-2 border rounded bg-white shadow-sm">
          <h3 className="font-semibold">{task.title}</h3>
          <p>{task.description}</p>
          <div className="flex justify-between mt-2">
            <button
              onClick={() => deleteTask(task.id)}  
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
