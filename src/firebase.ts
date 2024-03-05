import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0MSOapnYHJz-wofWcLWTbVlUzE-fxx-s",
  authDomain: "nwitter-reloaded-299db.firebaseapp.com",
  projectId: "nwitter-reloaded-299db",
  storageBucket: "nwitter-reloaded-299db.appspot.com",
  messagingSenderId: "540672589191",
  appId: "1:540672589191:web:a3b35296726f2d832d2722"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);