import "./taskItem.css";

const TaskItem = ({ task, onComplete, onDelete }) => {
  return (
    <tr className={`task-item ${task.completed ? "completed" : ""}`}>
      <td>
        <div
          className={`checkbox ${task.completed ? "checked" : ""}`}
          onClick={() => onComplete(task.id)}
        >
          <div className="tick"></div>
        </div>
      </td>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>{task.dueDate}</td>
      <td>{task.priority}</td>
      <td>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TaskItem;
