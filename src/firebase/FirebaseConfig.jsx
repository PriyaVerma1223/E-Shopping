// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}  from "firebase/firestore"
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5c2HQHtLZWXwIHRo2C2qKEKe6g3Jg0wQ",
  authDomain: "myecom-d2f4c.firebaseapp.com",
  projectId: "myecom-d2f4c",
  storageBucket: "myecom-d2f4c.appspot.com",
  messagingSenderId: "711257133094",
  appId: "1:711257133094:web:aef17381b91740f28156e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }