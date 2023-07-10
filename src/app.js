import express from "express";
import morgan from "morgan";
import cors from "cors";
import auth_router from "./routes/auth.routes.js";
import { send, RESPONSE_CODE, RESPONSE_MESSAGE } from "./tools/message.js";

const app = express();
const api = "/api";

app.use(cors({ origin: "http://localhost:5173" }));
app.use(morgan("dev"));
app.use(express.json());

app.use(api, auth_router);

app.use((req, res) => {
  return send(res, RESPONSE_CODE.NOT_FOUND, RESPONSE_MESSAGE.URL_NOT_FOUND);
});

export default app;
