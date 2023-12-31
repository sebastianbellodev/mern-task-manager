import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import auth_router from "./routes/auth.routes.js";
import user_router from "./routes/user.routes.js";
import task_router from "./routes/task.routes.js";
import { CLIENT } from "./client/client.js";
import { RESPONSE_CODE, RESPONSE_MESSAGE } from "./tools/message.js";

const app = express();
const api = "/api";

app.use(cors({ origin: CLIENT, credentials: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use(api, auth_router);
app.use(api, user_router);
app.use(api, task_router);

app.use((req, res) => {
  return res
    .status(RESPONSE_CODE.NOT_FOUND)
    .json([RESPONSE_MESSAGE.URL_NOT_FOUND]);
});

export default app;
