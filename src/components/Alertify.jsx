import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Alertify() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)} className="mb-3">
        Show Alert
      </Button>
      {show && (
        <Alert
          show={show}
          variant="primary"
          onClose={() => setShow(false)}
          animation={true}
          delay={2000}
          autohide
          dismissible
        >
          <Alert.Heading>Login Successfully!</Alert.Heading>
          <p>Welcome, Akash Kumar!</p>
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="primary">
              Ok
            </Button>
          </div>
        </Alert>
      )}
    </>
  );
}

export default Alertify;
