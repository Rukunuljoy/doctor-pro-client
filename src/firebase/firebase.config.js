// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1v8s-vhSDXTnnknXQzeucZvMKRd3Ie_A",
  authDomain: "doctors-pro-b379a.firebaseapp.com",
  projectId: "doctors-pro-b379a",
  storageBucket: "doctors-pro-b379a.appspot.com",
  messagingSenderId: "620122820784",
  appId: "1:620122820784:web:3de2e99129d76137efab75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;