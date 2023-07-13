import mongoose from "mongoose";

export const connection = () =>
  mongoose
    .connect("mongodb://127.0.0.1:27017/task")
    .then(() => console.log("Database connection established..."))
    .catch((error) => console.log(error));
