// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxBnmiQ1Moj_MBTK6j01JhO17iQgIlcPQ",
  authDomain: "petshopdatabase-ebf37.firebaseapp.com",
  projectId: "petshopdatabase-ebf37",
  storageBucket: "petshopdatabase-ebf37.appspot.com",
  messagingSenderId: "219702225067",
  appId: "1:219702225067:web:a86045d26787cf303e6fee",
  measurementId: "G-LTDTLZX937"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);