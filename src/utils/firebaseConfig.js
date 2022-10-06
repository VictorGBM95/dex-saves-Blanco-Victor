// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3LvXcxskpeelloGp0tXOQao0dKFctFs4",
    authDomain: "coderhouse-dexsaves.firebaseapp.com",
    projectId: "coderhouse-dexsaves",
    storageBucket: "coderhouse-dexsaves.appspot.com",
    messagingSenderId: "897992372360",
    appId: "1:897992372360:web:fab8e6f2ab0d19df9d2f3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);