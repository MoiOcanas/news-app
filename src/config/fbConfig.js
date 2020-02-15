import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDwoqMxXxhrrRMn1tno-_BWdYKXyN6d5Iw",
    authDomain: "gallery-fire.firebaseapp.com",
    databaseURL: "https://gallery-fire.firebaseio.com",
    projectId: "gallery-fire",
    storageBucket: "gallery-fire.appspot.com",
    messagingSenderId: "171311619988",
    appId: "1:171311619988:web:c6a4640025d678ad517981"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  const storage = firebase.storage();

  export {
    storage, firebase as default
  }