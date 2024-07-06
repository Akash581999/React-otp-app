import 'firebase/compat/auth';
import "react-phone-input-2/lib/style.css";
// import Login from './Pages/Login';
// import Register from './Pages/Register';
import ResetPassword from './Pages/ResetPassword';

function App() {
  return (
    <>
      <div className='container w-100'>
        <h1 className="fs-1 text-dark">Phone Verification</h1>
        {/* <Login /> */}
        <br />
        {/* <Register /> */}
        <br />
        <ResetPassword />
      </div>
    </>
  );
}

export default App;
