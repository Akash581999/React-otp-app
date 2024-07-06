import React, { useState } from "react";
import firebase from "firebase/compat/app";
import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
  getAuth,
} from "firebase/auth";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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

const auth = getAuth();

const ResetPassword = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const sendOtp = async () => {
    try {
      const reCaptcha = new RecaptchaVerifier("reCaptcha", {
        size: "invisible",
      });
      const confirmation = await signInWithPhoneNumber(auth, phone, reCaptcha);
      setConfirmationResult(confirmation);
      console.log(confirmation);
    } catch (error) {
      console.error(error);
    }
  };

  const verifyOtp = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        confirmationResult.verificationId,
        otp
      );
      const user = await auth.signInWithCredential(credential);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container bg-secondary p-3">
      <label>Enter Phone number:</label>
      <PhoneInput
        country={"in"}
        value={phone}
        onChange={(phone) => setPhone("+" + phone)}
      />
      <button type="submit" onClick={sendOtp} className="btn btn-primary">
        Send OTP
      </button>
      <div id="reCaptcha"></div>
      <br />
      <label>Enter OTP here:</label>
      <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
      <br />
      <button type="submit" onClick={verifyOtp} className="btn btn-primary">
        Verify OTP
      </button>
    </div>
  );
};

export default ResetPassword;
