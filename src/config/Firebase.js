// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAz4GeXM3_HcjaKKT5Jr4K85Y5zPeG7y6o",
    authDomain: "contact-list-52f43.firebaseapp.com",
    projectId: "contact-list-52f43",
    storageBucket: "contact-list-52f43.appspot.com",
    messagingSenderId: "1051811266147",
    appId: "1:1051811266147:web:4734d7d2ad9d62b2028256"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
export const fireDatabase=getFirestore(app);