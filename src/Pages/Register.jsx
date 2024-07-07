import React, { useState } from "react";
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

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOtp = () => {
    const phoneNo = `+91${phoneNumber}`;
    const reCaptcha = new firebase.auth.RecaptchaVerifier("reCaptcha");

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNo, reCaptcha)
      .then(function (confirmationResult) {
        let otpCode = prompt("Enter the OTP", "");

        if (otpCode !== null) {
          confirmationResult
            .confirm(otpCode)
            .then(function (result) {
              console.log(result.user);
              document.querySelector("label").textContent =
                result.user.phoneNumber + " Phone Number Verified";
            })
            .catch(function (error) {
              console.error("Error confirming OTP:", error);
            });
        }
      })
      .catch(function (error) {
        console.error("Error sending OTP:", error);
      });
  };

  return (
    <div className="container bg-secondary">
      <label className="text-info fs-1"></label><br/>
      <label htmlFor="PhoneNumber my-2">Enter Phone number:</label>
      <input
        type="text"
        className="form-control"
        id="PhoneNumber"
        placeholder="Enter phone number (+91XXXXXXXXXX)"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={handleOtp} className="btn btn-primary my-3">
        Send OTP
      </button>
      <div id="reCaptcha" className="text-info"></div>
    </div>
  );
};

export default Register;
