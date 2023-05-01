// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKjzwPGCbOmwoANc6MsmHPIuxJGMplLUU",
  authDomain: "chef-hunter-assignment-10.firebaseapp.com",
  projectId: "chef-hunter-assignment-10",
  storageBucket: "chef-hunter-assignment-10.appspot.com",
  messagingSenderId: "352595169619",
  appId: "1:352595169619:web:4d9964a0b4819c9be211a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default (app)