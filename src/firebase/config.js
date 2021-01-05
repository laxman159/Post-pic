import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBK7a-ItQGzSOE1MMaORrlyqurnFlIxh_I",
  authDomain: "firegram-eaf4c.firebaseapp.com",
  projectId: "firegram-eaf4c",
  storageBucket: "firegram-eaf4c.appspot.com",
  messagingSenderId: "323022339696",
  appId: "1:323022339696:web:02db4f0645f458fead7eb5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
