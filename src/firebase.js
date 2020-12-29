// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC0OxrsM2raizbwlOW5ikHY2L7B6uNa-v8",
  authDomain: "challenge-7f24d.firebaseapp.com",
  projectId: "challenge-7f24d",
  storageBucket: "challenge-7f24d.appspot.com",
  messagingSenderId: "457860344826",
  appId: "1:457860344826:web:90c05980ed2a9fe4b4d243",
  measurementId: "G-EPB2MGEC7K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); 
const auth = firebase.auth(); 

export {db, auth};