import 'firebase/compat/auth';
import "react-phone-input-2/lib/style.css";
// import Login from './Pages/Login';
import Register from './Pages/Register';
import Toastify from './components/Toastify';
import Alertify from './components/Alertify';
// import ResetPassword from './Pages/ResetPassword';
// import ResetForm from './Pages/ResetForm';

function App() {
  return (
    <>
      <div className='container w-100'>
        <h1 className="fs-1 text-dark">Phone Verification</h1>
        {/* <Login /> */}
        <br />
        <Register />
        <br />
        {/* <ResetPassword /> */}
        <br />
        {/* <ResetForm /> */}
        <Toastify />
        <Alertify />
      </div>
    </>
  );
}

export default App;
