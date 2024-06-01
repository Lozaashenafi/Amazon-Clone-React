// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth"; // for authentication services
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKKAFpbd7PXnm-5Zp7azT1c2Vhnvp8HOg",
  authDomain: "clone-e20d7.firebaseapp.com",
  projectId: "clone-e20d7",
  storageBucket: "clone-e20d7.appspot.com",
  messagingSenderId: "361285493765",
  appId: "1:361285493765:web:cb70a194ae70e379db686c",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore();
