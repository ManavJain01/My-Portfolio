// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_Firebase_apikey,
  authDomain: "contact-app-1391a.firebaseapp.com",
  projectId: "contact-app-1391a",
  storageBucket: "contact-app-1391a.appspot.com",
  messagingSenderId: "245620896852",
  appId: "1:245620896852:web:3f7c0108cf97b0bfa969c1",
  measurementId: "G-7HJQRZ9TRT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);