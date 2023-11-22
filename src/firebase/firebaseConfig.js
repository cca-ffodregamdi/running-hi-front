import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdeU96BA8U3sgmgxnk-9a9w22JNrQlzoU",
  authDomain: "running-hi-6e3dc.firebaseapp.com",
  projectId: "running-hi-6e3dc",
  storageBucket: "running-hi-6e3dc.appspot.com",
  messagingSenderId: "642367018705",
  appId: "1:642367018705:web:b176d1734d816a857257f0",
  measurementId: "G-TWM5NQX4BK",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
