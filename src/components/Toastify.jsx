import { useState } from "react";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function Toastify() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="mb-3">
        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </div>

      <ToastContainer
        className="p-3"
        position={"bottom-end"}
        style={{ zIndex: 1 }}
      >
        <Toast
          onClose={() => setShow(false)}
          show={show}
          animation={true}
          delay={2000}
          autohide
          className="d-inline-block m-1 bg-info"
        >
          <Toast.Header className="bg-primary">
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Login Successfully!</strong>
            <small className="text-muted">Just Now</small>
          </Toast.Header>
          <Toast.Body>Welcome, Akash Kumar!!</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default Toastify;
