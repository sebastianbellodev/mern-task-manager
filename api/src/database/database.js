import mongoose from "mongoose";
import { CLUSTER } from "./config/config.js";

export const connection = () =>
  mongoose
    .connect(CLUSTER)
    .then(() => console.log("Cluster connection established..."))
    .catch((error) => console.log(error));
