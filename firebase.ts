// Import the functions you need from the SDKs you need
import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from 'firebase/firestore'
import {FirebaseStorage, getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBEoXaEdfI7zvirjCJg--JTOWfnIXvrwK8",
  authDomain: "expose-application.firebaseapp.com",
  projectId: "expose-application",
  storageBucket: "expose-application.appspot.com",
  messagingSenderId: "630424164243",
  appId: "1:630424164243:web:4c5a5054f2b408bd387a66",
  measurementId: "G-1JPPFNC06H"
};

// Initialize Firebase
export const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);

export const bdFirestore: Firestore = getFirestore(firebaseApp);

export const storageFirebase: FirebaseStorage = getStorage(firebaseApp);