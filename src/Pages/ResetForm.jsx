import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; // Include Firestore if needed

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
} else {
  firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();

const ResetForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mode, setMode] = useState("phoneNumber");

  const handleSendOTP = async (e, phoneNumber) => {
    e.preventDefault();
    try {
      //const phoneNo = "+919634708314";
      const phoneNo = `+91${phoneNumber}`; //With India country code
      const appVerifier = new firebase.auth.RecaptchaVerifier("reCaptcha", {
        size: "invisible",
      });
      const confirmation = await firebase
        .auth()
        .signInWithPhoneNumber(phoneNo, appVerifier);
      setConfirmationResult(confirmation);
      console.log("OTP sent");
      alert("OTP sent to your phone number!");
      setMode("otp");
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert(`Error sending OTP: ${error.message}`);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      await confirmationResult.confirm(otp);
      alert("OTP verified. Proceeding to reset password!");
      setMode("resetPassword");
    } catch (error) {
      alert(`Error verifying OTP: ${error.message}`);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await auth.currentUser.updatePassword(newPassword);
      alert("Password reset successfully!");
    } catch (error) {
      alert(`Error resetting password: ${error.message}`);
    }
  };

  const renderForm = () => {
    switch (mode) {
      case "phoneNumber":
        return (
          <form onSubmit={handleSendOTP}>
            <label htmlFor="phoneNumber">
              Enter your registered phone number:
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <div id="reCaptcha"></div>
            <button
              type="submit"
              // onClick={() => handleSendOTP(phoneNumber)}
            >
              Send OTP
            </button>
          </form>
        );
      case "otp":
        return (
          <form onSubmit={handleVerifyOTP}>
            <label htmlFor="otp">Enter OTP sent to your phone:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              required
            />
            <button type="submit">Verify OTP</button>
          </form>
        );
      case "resetPassword":
        return (
          <form onSubmit={handlePasswordReset}>
            <label htmlFor="newPassword">Enter new password:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <label htmlFor="confirmPassword">Confirm new password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit">Reset Password</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      {renderForm()}
    </div>
  );
};

export default ResetForm;
