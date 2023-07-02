// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiTgOVcmoxHG58WCvGUIt2G1p7maV6E9A",
  authDomain: "s8starwars.firebaseapp.com",
  projectId: "s8starwars",
  storageBucket: "s8starwars.appspot.com",
  messagingSenderId: "389574739770",
  appId: "1:389574739770:web:6fdd0fdb5aeafb3df93203"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)