import { useForm } from "react-hook-form";
import { useTaskContext } from "../context/TaskContext.jsx";

function TaskFormPage() {
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line no-unused-vars
  const { tasks, postTask } = useTaskContext();
  console.log(postTask());

  const onSubmit = handleSubmit((data) => {
    postTask(data);
  });

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md my-4">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskFormPage;
