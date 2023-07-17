import { createContext, useContext, useState } from "react";
import { getTasksRequest, postTaskRequest } from "../api/task.js";

const TaskContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTask must be within a TaskProvider");
  }

  return context;
};

// eslint-disable-next-line react/prop-types
export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postTask = async (task) => {
    const res = await postTaskRequest(task);
    console.log(res);
  };

  return (
    <TaskContext.Provider value={{ getTasks, postTask, tasks }}>
      {children}
    </TaskContext.Provider>
  );
}
