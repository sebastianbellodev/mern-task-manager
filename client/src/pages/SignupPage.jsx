import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext.jsx";
import PasswordStrengthBar from "react-password-strength-bar";

function SignupPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { signup, authenticated, errors: signupErrors } = useAuthContext();

  const navigate = useNavigate();
  useEffect(() => {
    if (authenticated) navigate("/tasks");
  }, [authenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  const password = useRef({});
  password.current = watch("password", "");

  const validatePasswordConfirmation = (value) => {
    if (value === password.current) {
      return true;
    } else {
      return "Passwords do not match";
    }
  };

  return (
    <div className="flex h-[calc(100vh-1px)] w-screen items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {signupErrors.map((error, i) => (
          <div
            className="bg-zinc-600 text-white p-2 my-3 rounded-md -m-px text-justify px-4"
            key={i}
          >
            {error}
          </div>
        ))}

        <h1 className="text-3xl font-bold text-center my-3">Sign up</h1>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-300 my-1">Username is required</p>
          )}
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
          <PasswordStrengthBar
            className="text-white px-10 py-1 my-3"
            password={watch("password")}
          />
          <input
            type="password"
            {...register("confirm", {
              required: "Password confirmation is required",
              validate: validatePasswordConfirmation,
            })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Confirm password"
          />
          {errors.confirm && (
            <p className="text-red-300 my-1">{errors.confirm.message}</p>
          )}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md my-4"
          >
            Sign up
          </button>
          <p className="flex gap-x-2 my-1">
            Have an account?{" "}
            <Link to="/login" className="text-blue-400">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
