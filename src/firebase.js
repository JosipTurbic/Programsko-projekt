import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
    apiKey: "AIzaSyBo4JsLH654JfqEEjctR_XshA2DnbO5gRU",
    authDomain: "programsko-projekt.firebaseapp.com",
    projectId: "programsko-projekt",
    storageBucket: "programsko-projekt.appspot.com",
    messagingSenderId: "888201494722",
    appId: "1:888201494722:web:181461ba805dcaa355bb5b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase};
  