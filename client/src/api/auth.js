import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const login_request = (user) =>
  axios.post(`${API}/login`, user, {
    auth: {
      username: import.meta.env.VITE_BASIC_USERNAME,
      password: import.meta.env.VITE_BASIC_PASSWORD,
    },
  });
