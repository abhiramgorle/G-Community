import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
import {
    getAuth,onAuthStateChanged
  } from "firebase/auth";
  import {
    getFirestore,
  } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyA4Eq08xvvjwX_lFGVLr6Sb2T2918tlTb8",
    authDomain: "g-community-a714f.firebaseapp.com",
    projectId: "g-community-a714f",
    storageBucket: "g-community-a714f.appspot.com",
    messagingSenderId: "1026570630693",
    appId: "1:1026570630693:web:21e11fd93d76482af4b1cc"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth,db,onAuthStateChanged};