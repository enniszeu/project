import firebase from "firebase/app";
import "firebase/storage";

  var firebaseConfig = {
    apiKey: "AIzaSyBSxV8t_-j9fV7qXPf7lmicseVtaQhC994",
    authDomain: "ennisszeu.firebaseapp.com",
    databaseURL: "https://ennisszeu.firebaseio.com",
    projectId: "ennisszeu",
    storageBucket: "ennisszeu.appspot.com",
    messagingSenderId: "628683838167",
    appId: "1:628683838167:web:1a6900bf68f3fcd0119692",
    measurementId: "G-38N8NZE0S0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  const storage = firebase.storage();

  export { storage, firebase as default};