import firebase from 'firebase/compat/app';
// import {getFirestore} from "firebase/compat/firestore"
import 'firebase/compat/firestore';

const firebaseConfig = {
// TODO: use CDN from own firebase config
  };


  const app = firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore(app);