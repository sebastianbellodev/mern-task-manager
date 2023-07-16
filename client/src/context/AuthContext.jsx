import { createContext, useContext, useEffect, useState } from "react";
import { signupRequest, loginRequest } from "../api/auth.js";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error(["useAuthContext must be within an AuthProvider"]);

  return context;
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signup = async (user) => {
    try {
      const res = await signupRequest(user);
      setUser(res.data);
      setAuthenticated(true);
    } catch (error) {
      if (Array.isArray(error.response.data))
        return setErrors(error.response.data);

      setErrors([error.response.data.message]);
    }
  };

  const login = async (values) => {
    try {
      const res = await loginRequest(values);
      setUser(res.data);
      setAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
        user,
        authenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
