import firebase from 'firebase/compat/app';
// import {getFirestore} from "firebase/compat/firestore"
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCHmyQAkzECZru9pXCJAiHKjc-fMN0M2jw",
    authDomain: "fir-playground-f0019.firebaseapp.com",
    databaseURL: "https://fir-playground-f0019-default-rtdb.firebaseio.com",
    projectId: "fir-playground-f0019",
    storageBucket: "fir-playground-f0019.appspot.com",
    messagingSenderId: "69849678247",
    appId: "1:69849678247:web:662603f22e42ca4a17f682"
  };


  const app = firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore(app);