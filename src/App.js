import { useState } from "react";
import 'firebase/compat/auth';
import "react-phone-input-2/lib/style.css";
import Register from './Pages/Register';
// import Login from './Pages/Login';
// import ResetForm from './Pages/ResetForm';
// import ResetPassword from './Pages/ResetPassword';
// import Button from "react-bootstrap/Button";
// import Alertify from './components/Alertify';
// import Toastify from './components/Toastify';

function App() {
  // const [showAlert, setShowAlert] = useState(false);
  // const [showToast, setShowToast] = useState(false);

  // const handleShowAlert = () => {
  //   setShowAlert(true);
  // };
  // const handleShowToast = () => {
  //   setShowToast(true);
  // };

  return (
    <>
      <div className='container w-100'>
        <h1 className="fs-1 text-dark">Phone Verification</h1>
        <Register />
        {/* <br />
        <Login />
        <br />
        <ResetPassword />
        <br />
        <ResetForm /> */}

        {/* <Button onClick={handleShowAlert} className="mb-3 mx-3">
          Show Alert
        </Button>
        <Alertify
          show={showAlert}
          setShowAlert={setShowAlert}
          color={"success"}
          topic="Login Successfully!"
          message="Welcome, Akash Kumar!"
          buttonText="OK"
        /> */}

        {/*<Button onClick={handleShowToast} className="mb-3 mx-3">
          Show Toast
        </Button>
        <Toastify
          show={showToast}
          setShowToast={setShowToast}
          color={"info"}
          topic="Login Successfully!"
          message="Welcome, Akash Kumar!"
        /> */}
      </div>
    </>
  );
}

export default App;
