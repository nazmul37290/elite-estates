// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1gqIbc1zH_Tl-ajzAG0_T7UBNcOTBfyU",
  authDomain: "hero-assignment-9-80a8e.firebaseapp.com",
  projectId: "hero-assignment-9-80a8e",
  storageBucket: "hero-assignment-9-80a8e.appspot.com",
  messagingSenderId: "538813009046",
  appId: "1:538813009046:web:7724bc6c72924fc8b886b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
