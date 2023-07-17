import mongoose from "mongoose";
import { DATABASE } from "./config/config.js";

export const connection = () =>
  mongoose
    .connect(DATABASE)
    .then(() => console.log("Database connection established..."))
    .catch((error) => console.log(error));
