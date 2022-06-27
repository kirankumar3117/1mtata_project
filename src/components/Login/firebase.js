import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth"

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaI8CEcCfiEgqbEAXH1rTt6pMLkOLHR0s",
    authDomain: "otp-1mg.firebaseapp.com",
    projectId: "otp-1mg",
    storageBucket: "otp-1mg.appspot.com",
    messagingSenderId: "747687426659",
    appId: "1:747687426659:web:5df9f0f9f8734aecad9656"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)