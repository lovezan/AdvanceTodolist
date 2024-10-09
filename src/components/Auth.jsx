// src/components/SignIn.jsx
import React, { useState } from "react";
import { auth } from "../firebase/firebase"; // Import your Firebase configuration
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify"; // Import toast
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./auth.css"; // Ensure this file contains necessary styles

const SignIn = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/app"); // Redirect to the main application page
    } catch (error) {
      // Check if the user already exists
      if (error.code === "auth/account-exists-with-different-credential") {
        setMessage(
          "An account already exists with this email. Please sign in with that account."
        );
      } else {
        setMessage(error.message);
      }
      toast.error(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-section">
        <h2>Sign In with Google</h2>
        <button onClick={handleGoogleSignIn} className="google-button">
          Sign In with Google
        </button>
        {message && <p className="error-message">{message}</p>}
      </div>
    </div>
  );
};

export default SignIn;
