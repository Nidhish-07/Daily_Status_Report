// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyApxfE_-uvh9pRBswtALdVaqxDkBc33HaE",
    authDomain: "skill-database-d2bbe.firebaseapp.com",
    databaseURL: "https://skill-database-d2bbe-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "skill-database-d2bbe",
    storageBucket: "skill-database-d2bbe.appspot.com",
    messagingSenderId: "894353169912",
    appId: "1:894353169912:web:b42c1ab658680ab3d80a0d",
    measurementId: "G-881YGFFB1L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getDatabase(app)
export const auth=getAuth();