import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBr92SNAgriUMAjKAJ5LMxsXBXGLDsfX4",
  authDomain: "amzn-clone-c0408.firebaseapp.com",
  projectId: "amzn-clone-c0408",
  storageBucket: "amzn-clone-c0408.appspot.com",
  messagingSenderId: "986617517662",
  appId: "1:986617517662:web:9c22f26985ff1ae5a686cf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
