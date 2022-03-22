// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrRvnCQ9biY7e5u2DwGtDuXPIeNbAZ_44",
  authDomain: "khuay-coffee.firebaseapp.com",
  projectId: "khuay-coffee",
  storageBucket: "khuay-coffee.appspot.com",
  messagingSenderId: "532668944274",
  appId: "1:532668944274:web:4d8c940a8c58f7c46e3b4b",
  measurementId: "G-MRDEJCDK7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };