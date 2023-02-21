import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCv-P5KzfJR3KcdoC6GerXqb8AZOu-F7n8",
  authDomain: "noor-linkedin-clone.firebaseapp.com",
  projectId: "noor-linkedin-clone",
  storageBucket: "noor-linkedin-clone.appspot.com",
  messagingSenderId: "970491158063",
  appId: "1:970491158063:web:30a0d947d8ccbdca0c70da",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Firebase database
const db = firebaseApp.firestore();

// Firebase Auth

const auth = firebase.auth();

export { db, auth };
