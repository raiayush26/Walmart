import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBohaQ9gExSnEQAia5FFsiiq65LJ55oYss",
    authDomain: "walmart-d07f5.firebaseapp.com",
    projectId: "walmart-d07f5",
    storageBucket: "walmart-d07f5.appspot.com",
    messagingSenderId: "939135917636",
    appId: "1:939135917636:web:382893b82d37d257dd2611",
    measurementId: "G-778JRTJ1B8"
  };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const auth = getAuth();
// const provider = auth.GoogleAuthProvider
export  {auth,app }
// Initialize Firebase Authentication and get a reference to the service
