// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBE7kKTdVZ8kwJWNAOYYwZ3Fs-iLgmlERM",
    authDomain: "safecase-f309f.firebaseapp.com",
    projectId: "safecase-f309f",
    storageBucket: "safecase-f309f.appspot.com",
    messagingSenderId: "285815015234",
    appId: "1:285815015234:web:785014b02a4a6173f52adb",
    measurementId: "G-XCEKP8X77E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
