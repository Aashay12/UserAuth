// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-_Js74iTXF91DM_DugIoVExgKZf5UAIo",
  authDomain: "broncotransit-26626.firebaseapp.com",
  projectId: "broncotransit-26626",
  storageBucket: "broncotransit-26626.appspot.com",
  messagingSenderId: "514408657087",
  appId: "1:514408657087:web:b0ff239b45cc22e000160a",
  measurementId: "G-EC63KNZ55Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);    