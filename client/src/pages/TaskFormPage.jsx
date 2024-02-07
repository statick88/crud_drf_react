import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from "../api/Tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        try {
          const {
            data: { title, description },
          } = await getTask(params.id);
          setValue("title", title);
          setValue("description", description);
        } catch (error) {
          console.error("Error al cargar la tarea:", error);
        }
      }
    }
    loadTask();
  }, [params.id, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (params.id) {
        await updateTask(params.id, data);
        toast.success("Tarea Actualizada!");
      } else {
        await createTask(data);
        toast.success("Tarea Creada!");
      }
      navigate("/tasks");
    } catch (error) {
      toast.error("Ocurrió un error al actualizar/crear la tarea");
    }
  });

  const handleDelete = async () => {
    const accepted = window.confirm("Are you sure?");
    if (accepted) {
      try {
        await deleteTask(params.id);
        toast.success("Tarea Eliminada!");
        navigate("/tasks");
      } catch (error) {
        toast.error("Ocurrió un error al eliminar la tarea");
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
          className="bg-zing-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.title && <span>This field is required</span>}
        <textarea
          rows="3"
          placeholder="description"
          {...register("description", { required: true })}
          className="bg-zing-700 p-3 rounded-lg block w-full mb-3"
        ></textarea>
        {errors.description && <span>This field is required</span>}
        <button
          className="bg-indigo-500 px-3 rounded-lg w-full mt-3"
          type="submit"
        >
          Create Task
        </button>
      </form>
      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p3 rounded-lg w-48 margin-top-3"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
