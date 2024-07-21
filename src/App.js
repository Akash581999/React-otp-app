import React from "react";
import 'firebase/compat/auth';
import "react-phone-input-2/lib/style.css";
import Register from './Pages/Register';

function App() {

  return (
    <>
      <div className='container w-100'>
        <h1 className="fs-1 text-dark">Phone Verification</h1>
        <Register />
      </div>
    </>
  );
}

export default App;
