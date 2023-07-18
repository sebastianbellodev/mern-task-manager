import { createContext, useContext, useState } from "react";
import {
  deleteTaskRequest,
  getTaskRequest,
  getTasksRequest,
  postTaskRequest,
  putTaskRequest,
} from "../api/task.js";

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

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const postTask = async (task) => {
    try {
      await postTaskRequest(task);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      if (res.status === 204) setTasks(tasks.filter((tasks) => tasks.id != id));
    } catch (error) {
      console.log(error);
    }
  };

  const putTask = async (id, task) => {
    try {
      await putTaskRequest(id, task);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, postTask, getTasks, deleteTask, getTask, putTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
