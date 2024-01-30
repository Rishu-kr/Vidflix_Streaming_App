import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBc-w9tebvJbXA1cPtCJElrKpL2qwkiTXo",
  authDomain: "streaming-app-5a429.firebaseapp.com",
  projectId: "streaming-app-5a429",
  storageBucket: "streaming-app-5a429.appspot.com",
  messagingSenderId: "640370098374",
  appId: "1:640370098374:web:002edcb94b4f7edeeb57c7"
  };

 
const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export {firebase};
