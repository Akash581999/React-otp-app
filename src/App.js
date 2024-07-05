import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBpIKtGFO6IRkK72_bQ4fxGAppCHpuzZDE",
  authDomain: "react-otp-app-1a6df.firebaseapp.com",
  projectId: "react-otp-app-1a6df",
  storageBucket: "react-otp-app-1a6df.appspot.com",
  messagingSenderId: "434954909594",
  appId: "1:434954909594:web:0bfa09b64e4dc2e33dac23"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [message, setMessage] = useState("");

  const handleSendOtp = (phoneNumber) => {
    // const phoneNo = `+91${phoneNumber}`;//With India country code
    const phoneNo = phoneNumber;//Without India country code
    const reCaptcha = new firebase.auth.RecaptchaVerifier('reCaptcha');

    firebase.auth().signInWithPhoneNumber(phoneNo, reCaptcha)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
        setMessage("OTP sent successfully. Please check your phone.");
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
        setMessage(`Error sending OTP: ${error.message}`);
      });
  };

  const handleVerifyOtp = (otpCode) => {
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, otpCode);

    firebase.auth().signInWithCredential(credential)
      .then((result) => {
        console.log(result.user);
        setMessage(`Your Phone number ${result.user.phoneNumber} is verified.`);
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);
        setMessage(`Error verifying OTP: ${error.message}`);
      });
  };

  return (
    <>
      <div className='container bg-secondary w-100'>
        <h1 className='fs-1 text-dark'>Phone Verification</h1>
        <div className='text-success my-2'>{message}</div>
        <br />
        <div>
          <label htmlFor='PhoneNumber'>Enter Phone Number:</label>
          <input
            type="text"
            className="form-control"
            id="PhoneNumber"
            placeholder="+91(Enter phone number) here"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={() => handleSendOtp(phoneNumber)} className='btn btn-primary my-2'>Send OTP</button>
          <div id="reCaptcha" className='text-info my-2'></div>
          <br />

          <label htmlFor='otpInput'>Enter otp:</label>
          <input
            type="text"
            className="form-control"
            id="otpInput"
            placeholder="Enter OTP here"
          />
          <button onClick={() => handleVerifyOtp(document.getElementById('otpInput').value)} className='btn btn-primary my-2'>Verify OTP</button>
        </div>
      </div>
    </>
  );
}

export default App;
