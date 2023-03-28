import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAUg-XgAM4rBC7MyjNlgcqGQcuFgXOJqA",
  authDomain: "chat-app-91221.firebaseapp.com",
  projectId: "chat-app-91221",
  storageBucket: "chat-app-91221.appspot.com",
  messagingSenderId: "388034330386",
  appId: "1:388034330386:web:6a6771e21056ca0a81fdcb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
