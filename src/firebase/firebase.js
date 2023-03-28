import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAUg-XgAM4rBC7MyjNlgcqGQcuFgXOJqA",
  authDomain: "chat-app-91221.firebaseapp.com",
  projectId: "chat-app-91221",
  storageBucket: "chat-app-91221.appspot.com",
  messagingSenderId: "388034330386",
  appId: "1:388034330386:web:6a6771e21056ca0a81fdcb",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyByzEwppuR5d-1fzZ1WK0gmgp6onDspcoM",
//   authDomain: "testt-621b4.firebaseapp.com",
//   projectId: "testt-621b4",
//   storageBucket: "testt-621b4.appspot.com",
//   messagingSenderId: "1035556834714",
//   appId: "1:1035556834714:web:f008a6cc3da21d2c07fe23",
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
