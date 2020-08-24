import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATArL0x0c41wSwBPwyBw50_zgJVOLdyV4",
  authDomain: "my-clothing-75419.firebaseapp.com",
  databaseURL: "https://my-clothing-75419.firebaseio.com",
  projectId: "my-clothing-75419",
  storageBucket: "my-clothing-75419.appspot.com",
  messagingSenderId: "84484372615",
  appId: "1:84484372615:web:fc225c6e0009f263606022",
  measurementId: "G-EKBT45JP4P",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
