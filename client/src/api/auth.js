import axios from "axios";
import { API, BASIC_USERNAME, BASIC_PASSWORD } from "./config/config.js";

export const signupRequest = (user) =>
  axios.post(`${API}/signup`, user, {
    auth: { username: BASIC_USERNAME, password: BASIC_PASSWORD },
  });

export const loginRequest = (user) =>
  axios.post(`${API}/login`, user, {
    auth: { username: BASIC_USERNAME, password: BASIC_PASSWORD },
  });
