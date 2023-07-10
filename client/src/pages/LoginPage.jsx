/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();
  const { login, authenticated, error: loginError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) navigate("/card");
  }, [authenticated]);

  const onSubmit = handleSubmit(async (values) => {
    login(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {loginError.map((error, i) => (
          <div
            className="bg-white/5 text-white/80 p-3 rounded-md my-2 text-center"
            key={i}
          >
            {error}
          </div>
        ))}

        <h1 className="text-violet-300 text-3xl font-bold font-pacifico my-2 text-center">
          Login
        </h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-slate-400">Username is required</p>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Password"
          />
          {errors.username && (
            <p className="text-slate-400">Password is required</p>
          )}
          <button
            type="submit"
            className="bg-purple-700 text-white hover:text-purple-300 px-4 py-2 rounded-md my-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
