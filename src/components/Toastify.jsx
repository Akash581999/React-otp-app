import { useState, useEffect } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
// import Button from "react-bootstrap/Button";

function Toastify({ show, setShowToast, topic, message, color }) {
  const [toastShown, setToastShown] = useState(false);
  useEffect(() => {
    setToastShown(show);
  }, [show]);
  const handleClose = () => {
    setToastShown(false);
    setShowToast(false);
  };
  return (
    <>
      {/* <div className="mb-3">
        <Button onClick={() => setToastShown(true)}>Show Toast</Button>
      </div> */}

      {toastShown && (
        <ToastContainer
          className="p-3"
          position={"bottom-end"}
          style={{ zIndex: 1 }}
        >
          <Toast
            className="d-inline-block m-1"
            bg={color}
            show={toastShown}
            onClose={handleClose}
            delay={2000}
            animation={true}
            autohide
          >
            <Toast.Header className="">
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">{topic}</strong>
              <small className="text-muted">Just Now</small>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
          </Toast>
        </ToastContainer>
      )}
    </>
  );
}

export default Toastify;
