import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";



const app= firebase.initializeApp({
    apiKey: "AIzaSyByjWPzXcuxjw3Tg5isNdhPyd3ZvlZIwuw",
    authDomain: "auction-1b1e9.firebaseapp.com",
    projectId: "auction-1b1e9",
    storageBucket: "auction-1b1e9.appspot.com",
    messagingSenderId: "838389280813",
    appId: "1:838389280813:web:1f4a3a8e6144e8dee8c8a4"
  
})

// const firebaseConfig = {
//     apiKey: "AIzaSyByjWPzXcuxjw3Tg5isNdhPyd3ZvlZIwuw",
//     authDomain: "auction-1b1e9.firebaseapp.com",
//     projectId: "auction-1b1e9",
//     storageBucket: "auction-1b1e9.appspot.com",
//     messagingSenderId: "838389280813",
//     appId: "1:838389280813:web:1f4a3a8e6144e8dee8c8a4"
//   };


  

 export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
 export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
