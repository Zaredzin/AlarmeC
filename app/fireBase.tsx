import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; // Nota: usa 'firebase/compat/firestore'
import { getDatabase } from 'firebase/database';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyCp-A0vBbyK0DaN5yI-jvs3KT6y-lD7Yqg",
  authDomain: "alarme-68993.firebaseapp.com",
  projectId: "alarme-68993",
  storageBucket: "alarme-68993.appspot.com",
  messagingSenderId: "262843479599",
  appId: "1:262843479599:web:23da39cbc21e8b2f10b8da",
  measurementId: "G-1TGDLLYH8Q"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { auth, firestore, database };
