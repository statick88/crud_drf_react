import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zing-800 p-3 hover:bg-zing-700 hover:cursor-pointer"
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
    >
      <h1 className="font-bold uppercase">{task.title}</h1>
      <p className="text-slate-400">{task.description}</p>
      <hr />
    </div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
