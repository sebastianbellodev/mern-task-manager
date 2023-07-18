import { useForm } from "react-hook-form";
import { useTaskContext } from "../context/TaskContext.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
dayjs.extend(utc);

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  // eslint-disable-next-line no-unused-vars
  const { postTask, getTask, putTask } = useTaskContext();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date", dayjs.utc(task.date).format("YYYY-MM-DD"));
      }
    }
    loadTask();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = handleSubmit((data) => {
    const task = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };

    if (params.id) {
      putTask(params.id, task);
    } else {
      postTask(task);
    }
    navigate("/tasks");
  });

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md mx-10">
      <h1 className="text-3xl font-bold my-3">Task</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />
        <label htmlFor="description">Description:</label>
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        ></textarea>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          {...register("date")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md my-4">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskFormPage;
