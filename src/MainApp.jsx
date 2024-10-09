// src/MainApp.jsx

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilters from "./components/TaskFilters";
import TaskSearch from "./components/TaskSearch";
import { FaSignOutAlt } from "react-icons/fa";
import "./App.css"; // Assuming you have CSS for MainApp

const MainApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [lineCoordinates, setLineCoordinates] = useState([]);

  const navigate = useNavigate(); // Hook to navigate

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks
    .filter((task) =>
      filter === "all" ? true : task.completed === (filter === "completed")
    )
    .filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    setLineCoordinates((prev) => [...prev, { x, y }]);
  };

  const handleMouseLeave = () => {
    setLineCoordinates([]); // Reset line on leave
  };

  const handleLogout = () => {
    // Clear tasks or any other necessary state here if needed
    setTasks([]); // Optionally clear tasks
    navigate("/"); // Navigate to Sign In page
  };

  return (
    <div
      className="app-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        className="drawing"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        {lineCoordinates.map((point, index) => {
          if (index === 0) return null;
          const prevPoint = lineCoordinates[index - 1];
          return (
            <line
              key={`${point.x}-${point.y}`}
              x1={prevPoint.x}
              y1={prevPoint.y}
              x2={point.x}
              y2={point.y}
              stroke="rgba(13, 255, 114, 0.7)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          );
        })}
      </svg>

      <div className="top">
        <h1> Advanced To-Do List</h1>
        <button className="logout-button" onClick={handleLogout}>
          <FaSignOutAlt className="logout-icon" />
          Logout
        </button>
        <TaskForm addTask={addTask} />
      </div>
      <div className="bottom">
        <TaskFilters setFilter={setFilter} />
        <TaskSearch setSearchTerm={setSearchTerm} />
        <TaskList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onComplete={completeTask}
        />
      </div>
    </div>
  );
};

MainApp.propTypes = {
  // Define any prop types if necessary
};

export default MainApp;
