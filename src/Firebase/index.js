// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJhYgBucVYA2SfXZXUfikw0Yum-ef8g3U",
    authDomain: "goldenbyteback.firebaseapp.com",
    projectId: "goldenbyteback",
    storageBucket: "goldenbyteback.appspot.com",
    messagingSenderId: "538797177684",
    appId: "1:538797177684:web:c509eb5fd30f8185c426c1",
    measurementId: "G-B1T6C2JJRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)