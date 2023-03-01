// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "firebase/app";
import {
  getAnalytics
} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIP8yeFsgHm30xuKlxZ4kOSEl3Y-CY3Ic",
  authDomain: "jabrixofthings-c1c16.firebaseapp.com",
  databaseURL: "https://jabrixofthings-c1c16-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jabrixofthings-c1c16",
  storageBucket: "jabrixofthings-c1c16.appspot.com",
  messagingSenderId: "1024004792418",
  appId: "1:1024004792418:web:abd6765f8d0b7efee9b13b",
  measurementId: "G-W9YC90TVDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);