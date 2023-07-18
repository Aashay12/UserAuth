import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRc5ubvp0fHIxLzU1QihMpw6ELgsd-ki8",
  authDomain: "bt-hub.firebaseapp.com",
  projectId: "bt-hub",
  storageBucket: "bt-hub.appspot.com",
  messagingSenderId: "1095948764489",
  appId: "1:1095948764489:web:1185a585f48966a9038698",
  measurementId: "G-P8GY743JP7",
};

// initialize firebase app
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();


