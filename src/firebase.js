import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB8U5S8Mq6bczIFGk5kDm05daCuxLo1s8I",
  authDomain: "instagram-clone-24f1b.firebaseapp.com",
  projectId: "instagram-clone-24f1b",
  storageBucket: "instagram-clone-24f1b.appspot.com",
  messagingSenderId: "489653119237",
  appId: "1:489653119237:web:0367d6148ebe06ac666f6c",
  measurementId: "G-8P4669X4T8",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
