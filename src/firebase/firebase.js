import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtIT6Z2lGMggLdFwqSEg7h1Xt-IO7LHqM",
  authDomain: "question-eb093.firebaseapp.com",
  projectId: "question-eb093",
  storageBucket: "question-eb093.appspot.com",
  messagingSenderId: "135160029634",
  appId: "1:135160029634:web:ff02e1fc94d30f3999365b",
  measurementId: "G-R2G9VQ29EX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider;
const db = firebaseApp.firestore();

export {auth, provider, db }
