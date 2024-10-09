import TaskItem from "./TaskItem";
import "./taskList.css"; // Import the CSS file for styling

const TaskList = ({ tasks, onComplete, onDelete }) => {
  return (
    <div className="task-list-container">
      <table className="task-list">
        <thead>
          <tr>
            <th>Complete</th>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onComplete={onComplete}
                onDelete={onDelete}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6">No tasks available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
