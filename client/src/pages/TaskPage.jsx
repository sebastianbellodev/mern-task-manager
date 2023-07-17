import { useAuthContext } from "../context/AuthContext.jsx";

function TaskPage() {
  const { user } = useAuthContext();
  console.log(user);

  return <div>TaskPage</div>;
}

export default TaskPage;
