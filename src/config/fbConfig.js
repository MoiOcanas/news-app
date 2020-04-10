import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "YOUR API KEY",
    authDomain: "YOUR AUTHDOMAIN",
    databaseURL: "YOUR DATABASE URL",
    projectId: "YOUR PROJECT ID",
    storageBucket: "YOUR STORAGEBUCKET",
    messagingSenderId: "YOUR MESSAGING SERNDER ID",
    appId: "YOUR APP ID"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  const storage = firebase.storage();

  export {
    storage, firebase as default
  }