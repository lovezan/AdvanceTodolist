// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/Auth"; // Import SignIn component
import MainApp from "./MainApp"; // Your main application component
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const App = () => {
  return (
    <Router>
      <ToastContainer /> {/* Add ToastContainer here */}
      <Routes>
        <Route path="/" element={<SignIn />} />

        <Route path="/app" element={<MainApp />} /> {/* The main app page */}
      </Routes>
    </Router>
  );
};

export default App;
