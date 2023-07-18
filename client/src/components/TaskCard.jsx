import { useTaskContext } from "../context/TaskContext.jsx";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
dayjs.extend(utc);

/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function TaskCard({ task }) {
  const { deleteTask } = useTaskContext();

  return (
    <div className="bg-zinc-800 max-w-lg w-full py-3 px-5 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold overflow-hidden max-w-[300px] break-words">
          {task.title}
        </h1>
        <div className="flex gap-x-4 items-center px-2">
          <button
            onClick={() => {
              deleteTask(task.id);
            }}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Delete
          </button>
          <Link
            to={`/tasks/${task.id}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md my-4"
          >
            Edit
          </Link>
        </div>
      </header>
      <p className="text-slate-300 overflow-hidden max-w-[300px] break-words">
        {task.description}
      </p>
      <p className="text-slate-300 overflow-hidden max-w-[300px] break-words">
        {dayjs(task.date).utc().format("DD/MM/YYYY")}
      </p>
    </div>
  );
}

export default TaskCard;
