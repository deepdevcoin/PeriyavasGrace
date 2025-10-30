import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD069BYlqPXe6ptavd9DPIuk4hND-GpoeU",
  authDomain: "periyavasgrace.firebaseapp.com",
  projectId: "periyavasgrace",
  storageBucket: "periyavasgrace.firebasestorage.app",
  messagingSenderId: "738251791081",
  appId: "1:738251791081:web:4a9009a94ee91bd70aee78",
  measurementId: "G-1YY9V6J5J1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };