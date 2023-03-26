// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Remember to hide key in ENV file before deploying
const firebaseConfig = {
  apiKey: "AIzaSyAtC61dwjxY5NR3ByhiV0Hw0-R0sDbu1f4",
  authDomain: "todo-app-d4a12.firebaseapp.com",
  projectId: "todo-app-d4a12",
  storageBucket: "todo-app-d4a12.appspot.com",
  messagingSenderId: "779523831359",
  appId: "1:779523831359:web:6d00a0954ee5aef6acaa8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)