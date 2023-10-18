// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfK1ZSEHolFzj4uSY-IxK6MDUd9H1W7Qs",
  authDomain: "top-gear-61bd0.firebaseapp.com",
  projectId: "top-gear-61bd0",
  storageBucket: "top-gear-61bd0.appspot.com",
  messagingSenderId: "204348491508",
  appId: "1:204348491508:web:b817ba2532fce32294c0a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;