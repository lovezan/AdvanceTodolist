import "./taskFilter.css";
const TaskFilters = ({ setFilter }) => {
  return (
    <div className="task-filters">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setFilter("pending")}>Pending</button>
    </div>
  );
};

export default TaskFilters;
