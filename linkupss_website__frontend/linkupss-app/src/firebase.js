import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {getAuth,GoogleAuthProvider} from "firebase/auth";


const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
})

export const auth = app.auth() //creates authentication instance
export default app
const authApp = getAuth();
const provider = new GoogleAuthProvider();
export {provider,authApp};