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

    const handleSendOtp = () => {
        const reCaptcha = new firebase.auth.RecaptchaVerifier('reCaptcha');
        const phoneNo = `+91${phoneNumber}`; // Adjust the country code as per your requirement

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
                setMessage(`Phone number ${result.user.phoneNumber} has been verified.`);
            })
            .catch((error) => {
                console.error("Error verifying OTP:", error);
                setMessage(`Error verifying OTP: ${error.message}`);
            });
    };

    return (
        <div style={{ backgroundColor: "lightblue", padding: "20px", maxWidth: "400px", margin: "auto", marginTop: "50px", borderRadius: "10px" }}>
            <h2>Phone Verification</h2>
            <label>{message}</label>
            <br />
            <input
                type="text"
                className="form-control"
                id="PhoneNumber"
                placeholder="Enter phone number (+91XXXXXXXXXX)"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{ margin: "10px 0", padding: "5px" }}
            />
            <button onClick={handleSendOtp} style={{ padding: "10px 20px", cursor: "pointer" }}>Send OTP</button>
            <div id="reCaptcha" style={{ marginTop: "10px" }}></div>
            <br />
            <input
                type="text"
                className="form-control"
                id="otpInput"
                placeholder="Enter OTP"
                style={{ margin: "10px 0", padding: "5px" }}
            />
            <button onClick={() => handleVerifyOtp(document.getElementById('otpInput').value)} style={{ padding: "10px 20px", cursor: "pointer" }}>Verify OTP</button>
        </div>
    );
}

export default App;
