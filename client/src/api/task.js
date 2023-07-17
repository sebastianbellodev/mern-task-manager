import axios from "./request/axios.js";

export const getTasksRequest = () => axios.get("/tasks");

export const getTaskRequest = (id) => axios.get(`/tasks/${id}`);

export const postTaskRequest = (task) => axios.post("/tasks", task);

export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`);

export const putTaskRequest = (task) => axios.put(`/tasks/${task.id}`, task);
