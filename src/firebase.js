// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyC-LpdRAYFDPCinty1XAWHDCJgIW8DhHAk",
  authDomain: "clone-451fa.firebaseapp.com",
  projectId: "clone-451fa",
  storageBucket: "clone-451fa.appspot.com",
  messagingSenderId: "684823713705",
  appId: "1:684823713705:web:ab6116b28de65ce40296b8",
  measurementId: "G-2SNRRWRBSK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
