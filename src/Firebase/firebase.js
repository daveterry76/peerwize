import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDhcI8Qzeb4b99bJrOvBddvWd3wv2rz9LI",
  authDomain: "cohort-568e0.firebaseapp.com",
  projectId: "cohort-568e0",
  storageBucket: "cohort-568e0.appspot.com",
  messagingSenderId: "1048700206600",
  appId: "1:1048700206600:web:fbdb9c489f7ac4f5de1bbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth()
export const db = getFirestore(app);
export const storage = getStorage(app);
