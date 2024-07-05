import React, { useState } from "react";
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState(null);

  const sendOtp = () => {
    try {
      const reCaptcha = new RecaptchaVerifier(auth, "reCaptcha", {});
      const confirmation = signInWithPhoneNumber(auth, phone, reCaptcha);
      setUser(confirmation);
      console.log(confirmation);
    } catch (error) {
      console.error(error);
    }
  };
  const verifyOtp = async () => {
    try {
      const data = await user.confirm(otp);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <PhoneInput
          country={"in"}
          value={phone}
          onChange={(phone) => setPhone("+" + phone)}
        />
        <button onClick={sendOtp}>Send otp</button>
        <div id="reCaptcha"></div>
        <br />
        <label>Enter otp here</label>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        ></input>
        <br />
        <button type="submit" onClick={verifyOtp}>
          Verify otp
        </button>
      </div>
    </div>
  );
};

export default Login;
