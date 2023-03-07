import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDMREkUHXRYYgVKU8GdZNfcNHyDaOAdwXQ",
  authDomain: "disneyplus-clone-be4d2.firebaseapp.com",
  projectId: "disneyplus-clone-be4d2",
  storageBucket: "disneyplus-clone-be4d2.appspot.com",
  messagingSenderId: "724161812647",
  appId: "1:724161812647:web:f4c93fc26216b4837da382",
  measurementId: "G-VF0LZXLDGM"
};

// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db=firebaseapp.firestore();
const auth=firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage;
firebase.auth().languageCode = 'it';

export {auth,provider,storage};
export default db;