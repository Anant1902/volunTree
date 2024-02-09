import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBXzDBhYDGfvYMY86diZ4vkHcBdREU8HRo",
    authDomain: "voluntree-d62b0.firebaseapp.com",
    projectId: "voluntree-d62b0",
    storageBucket: "voluntree-d62b0.appspot.com",
    messagingSenderId: "1043155450004",
    appId: "1:1043155450004:web:8df24b27ee0b16050e1c81",
    measurementId: "G-RK5XM9CPEZ"
  };

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);