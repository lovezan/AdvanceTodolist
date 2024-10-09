// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnCGeDqscOIsCtnnQIH_Jb0T6TXtM94yc",
  authDomain: "yourworklist-e53fd.firebaseapp.com",
  projectId: "yourworklist-e53fd",
  storageBucket: "yourworklist-e53fd.appspot.com",
  messagingSenderId: "1073453931667",
  appId: "1:1073453931667:web:e619afaf38e09bfe4b4166",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (for database)
const db = getFirestore(app);

// Initialize Firebase Authentication (for user authentication)
const auth = getAuth(app);

// Initialize Firebase Storage (for file storage)
const storage = getStorage(app);

// Export the services to use them in other parts of your application
export { app, db, auth, storage };
