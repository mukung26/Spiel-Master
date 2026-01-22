import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

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

// Initialize Firebase using v8 compat pattern
const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const database = firebase.database();