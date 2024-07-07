import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBpIKtGFO6IRkK72_bQ4fxGAppCHpuzZDE",
    authDomain: "react-otp-app-1a6df.firebaseapp.com",
    projectId: "react-otp-app-1a6df",
    storageBucket: "react-otp-app-1a6df.appspot.com",
    messagingSenderId: "434954909594",
    appId: "1:434954909594:web:0bfa09b64e4dc2e33dac23",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default firebaseConfig;