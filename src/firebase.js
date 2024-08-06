// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv8V_CoOOAWA5LCVoB0Kir6UNz5-qYlDs",
  authDomain: "pcweb-6.firebaseapp.com",
  projectId: "pcweb-6",
  storageBucket: "pcweb-6.appspot.com",
  messagingSenderId: "101753627858",
  appId: "1:101753627858:web:8cb68a15eb10fbe053390b",
  measurementId: "G-5T1XFD7HDG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)