import { useEffect } from "react";
import { useTaskContext } from "../context/TaskContext.jsx";
import TaskCard from "../components/TaskCard.jsx";

function TaskPage() {
  const { getTasks, tasks } = useTaskContext();

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (tasks.length === 0)
    return (
      <h1 className="mx-10 text-3xl font-bold text-center my-3">
        There are no tasks
      </h1>
    );

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 mx-10">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id}></TaskCard>
      ))}
    </div>
  );
}

export default TaskPage;
