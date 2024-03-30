// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvTncdGX_gbTudDmVwwPPERxtqVVaBkUU",
  authDomain: "coffee-shop-b79ea.firebaseapp.com",
  projectId: "coffee-shop-b79ea",
  storageBucket: "coffee-shop-b79ea.appspot.com",
  messagingSenderId: "789029242797",
  appId: "1:789029242797:web:8f8ed52ae3d2eec4604324"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;