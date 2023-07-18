import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext.jsx";

function Navbar() {
  const { authenticated, user, logout } = useAuthContext();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between mx-10 py-5 px-10 rounded-md">
      <Link to={authenticated ? "/tasks" : "/"}>
        <h1 className="text-2xl font-bold">Tasky</h1>
      </Link>
      <ul className="flex gap-x-2">
        {authenticated ? (
          <>
            <li>Welcome {user.username}</li>
            <li>
              <Link
                to="/tasks/new"
                className="bg-indigo-500 font-bold px-4 py-1 rounded-md"
              >
                Add
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => logout()}>
                Sign out
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                className="bg-indigo-500 font-bold px-4 py-1 rounded-md"
              >
                Log in
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="bg-indigo-500 font-bold px-4 py-1 rounded-md"
              >
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
