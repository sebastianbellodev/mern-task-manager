import axios from "axios";
import { API, BASIC_USERNAME, BASIC_PASSWORD } from "../config/config.js";

const instance = axios.create({
  baseURL: API,
  withCredentials: true,
  auth: {
    username: BASIC_USERNAME,
    password: BASIC_PASSWORD,
  },
});

export default instance;
