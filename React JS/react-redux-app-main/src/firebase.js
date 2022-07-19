import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBwdsTPz1r2ZgoBsYhBX-WeIR5eI9-I644",
  authDomain: "auth-redux-17027.firebaseapp.com",
  projectId: "auth-redux-17027",
  storageBucket: "auth-redux-17027.appspot.com",
  messagingSenderId: "979998902397",
  appId: "1:979998902397:web:db2d5be08192f7fdbb4914",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
