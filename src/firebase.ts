import * as firebaseApp from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Replaced placeholders with actual keys from the project
const firebaseConfig = {
  apiKey: "AIzaSyDD_CE0YjvmEBm65fbXv1X5zYRXjbV1UL8",
  authDomain: "spiel-master-1a1df.firebaseapp.com",
  databaseURL: "https://spiel-master-1a1df-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "spiel-master-1a1df",
  storageBucket: "spiel-master-1a1df.firebasestorage.app",
  messagingSenderId: "486111805415",
  appId: "1:486111805415:web:5cd01eaf33688cc1ab8742",
  measurementId: "G-K1LTRBX73Q"
};

const app = firebaseApp.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const database = getDatabase(app);