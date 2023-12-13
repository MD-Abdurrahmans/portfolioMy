// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmekzF0hnfGpK73njqv93bfI82lHIS1ik",
  authDomain: "portfolio-bc0b3.firebaseapp.com",
  projectId: "portfolio-bc0b3",
  storageBucket: "portfolio-bc0b3.appspot.com",
  messagingSenderId: "955566728552",
  appId: "1:955566728552:web:52061f7e030b207c3b22dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth