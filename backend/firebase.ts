// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPD9dlI81jUFsNDbhdZCCy4NZ9ptCP87g",
  authDomain: "heyboilrplate.firebaseapp.com",
  projectId: "heyboilrplate",
  storageBucket: "heyboilrplate.firebasestorage.app",
  messagingSenderId: "534217486769",
  appId: "1:534217486769:web:fba4aa9b3594de57304d90",
  measurementId: "G-01G2VYEC2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);