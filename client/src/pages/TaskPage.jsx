import { useEffect } from "react";
import { useTaskContext } from "../context/TaskContext.jsx";

function TaskPage() {
  const { getTasks, tasks } = useTaskContext();

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (tasks.length === 0) return <h1>There are no tasks for you</h1>;

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskPage;
