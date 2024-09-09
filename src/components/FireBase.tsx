// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASplJPiFnMmpv7sLBDpAur9uaqKt9pNbA",
  authDomain: "task-manager-d7c28.firebaseapp.com",
  projectId: "task-manager-d7c28",
  storageBucket: "task-manager-d7c28.appspot.com",
  messagingSenderId: "692629497093",
  appId: "1:692629497093:web:898e4c6507d6b36f15436c",
  measurementId: "G-EXY82Z7T91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =  getFirestore(app);