import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCC3M913Di4o5wiUwyQuB3Ja1YDr2poRAk",
    authDomain: "campingbalapitiya-c27d1.firebaseapp.com",
    projectId: "campingbalapitiya-c27d1",
    storageBucket: "campingbalapitiya-c27d1.appspot.com",
    messagingSenderId: "35487371809",
    appId: "1:35487371809:web:98c91436d561e1b9cd8960",
    measurementId: "G-9JXYFCDZN8"
  };

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)