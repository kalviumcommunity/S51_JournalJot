// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh2vMJMplnwa18ElOIfFGqfhMa6uarGsg",
  authDomain: "journal-jot.firebaseapp.com",
  projectId: "journal-jot",
  storageBucket: "journal-jot.appspot.com",
  messagingSenderId: "173912710940",
  appId: "1:173912710940:web:693dceb4ef28b4f5e3a4d9",
  measurementId: "G-SDF0KDN3H6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);