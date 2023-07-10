/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { login_request } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState([]);

  const login = async (user) => {
    try {
      const res = await login_request(user);
      console.log(res.data);
      setUser(res.data);
      setAuthenticated(true);
    } catch (error) {
      setError(error.response.data);
    }
  };

  useEffect(() => {
    if (error.length > 0) {
      const timer = setTimeout(() => {
        setError([]);
      }, 4000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [error]);

  return (
    <AuthContext.Provider value={{ login, user, authenticated, error }}>
      {children}
    </AuthContext.Provider>
  );
};
