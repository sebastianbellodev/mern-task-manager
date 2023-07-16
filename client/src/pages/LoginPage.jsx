import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext.jsx";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, authenticated, errors: loginErrors } = useAuthContext();

  const navigate = useNavigate();
  useEffect(() => {
    if (authenticated) navigate("/tasks");
  }, [authenticated, navigate]);

  const onSubmit = handleSubmit((values) => login(values));

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {loginErrors.map((error, i) => (
          <div
            className="bg-zinc-600 text-white p-2 my-3 rounded-md -m-px text-justify px-4"
            key={i}
          >
            {error}
          </div>
        ))}

        <h1 className="text-3xl font-bold text-center my-3">Log in</h1>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-300 my-1">Email is required</p>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-300 my-1">Password is required</p>
          )}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md my-2"
          >
            Log in
          </button>
        </form>
        <p className="flex gap-x-2 my-2">
          Don&#39;t have an account?{" "}
          <Link to="/signup" className="text-blue-400">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
