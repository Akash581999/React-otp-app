// import React, { useState } from 'react';
// import firebase from 'firebase/app';
import 'firebase/compat/auth';
// import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Login from './Pages/Login';
// import Register from './Pages/Register';
// import ResetPassword from './Pages/ResetPassword';

function App() {
  return (
    <>
      <div className='container w-100'>
        <Login />
        {/* <Register /> */}
        {/* <ResetPassword /> */}
      </div>
    </>
  );
}

export default App;
