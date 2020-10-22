import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyDJhLGJZV-JLZKk2bGudKB3cpOoCKi50Cs",
    authDomain: "backyard2-a7763.firebaseapp.com",
    databaseURL: "https://backyard2-a7763.firebaseio.com",
    projectId: "backyard2-a7763",
    storageBucket: "backyard2-a7763.appspot.com",
    messagingSenderId: "354088271311",
    appId: "1:354088271311:web:ebf71c0be13c633799e6ba",
    measurementId: "G-N788527LVY"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};