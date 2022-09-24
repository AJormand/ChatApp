import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCBXZKQc70of2cBVRhS0F7XlihfYlVGL1c",
  authDomain: "chatapp-773dd.firebaseapp.com",
  projectId: "chatapp-773dd",
  storageBucket: "chatapp-773dd.appspot.com",
  messagingSenderId: "501140315625",
  appId: "1:501140315625:web:102f65c93f79e3a07a3f78",
  measurementId: "G-944QQP21YN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
