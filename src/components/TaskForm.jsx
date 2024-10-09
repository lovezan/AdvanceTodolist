import { useState } from "react";
import "./taskForm.css"; // Ensure this CSS file includes your styling

const TaskForm = ({ addTask }) => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskData.title === "") return;
    addTask(taskData);
    setTaskData({ title: "", description: "", dueDate: "", priority: "Low" });
  };

  // Function to handle mouse movement
  const handleMouseMove = (e) => {
    const container = document.querySelector(".form-container");
    const { clientX, clientY } = e;
    const { left, top, width, height } = container.getBoundingClientRect();

    const x = (clientX - left) / width - 0.5; // Normalize X
    const y = (clientY - top) / height - 0.5; // Normalize Y

    // Set tilt based on cursor position
    const tiltX = y * 10; // Tilt factor
    const tiltY = -x * 10; // Tilt factor

    container.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  // Reset tilt on mouse leave
  const handleMouseLeave = () => {
    const container = document.querySelector(".form-container");
    container.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };

  return (
    <div
      className="form-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="task-title">Task Title</label>
          <input
            type="text"
            id="task-title"
            placeholder="Enter task title"
            value={taskData.title}
            onChange={(e) =>
              setTaskData({ ...taskData, title: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="task-description">Task Description</label>
          <textarea
            id="task-description"
            placeholder="Enter task description"
            value={taskData.description}
            onChange={(e) =>
              setTaskData({ ...taskData, description: e.target.value })
            }
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="task-due-date">Due Date</label>
          <input
            type="date"
            id="task-due-date"
            value={taskData.dueDate}
            onChange={(e) =>
              setTaskData({ ...taskData, dueDate: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="task-priority">Priority</label>
          <select
            id="task-priority"
            value={taskData.priority}
            onChange={(e) =>
              setTaskData({ ...taskData, priority: e.target.value })
            }
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
