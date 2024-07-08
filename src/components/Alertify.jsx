import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Alertify({ show, setShowAlert, topic, message, color, buttonText }) {
  const [alertShown, setAlertShown] = useState(false);
  useEffect(() => {
    setAlertShown(show);
  }, [show]);
  const handleClose = () => {
    setAlertShown(false);
    setShowAlert(false);
  };

  return (
    <>
      {/* <Button onClick={() => setAlertShown(true)} className="mb-3">
        Show Alert
      </Button> */}

      {alertShown && (
        <Alert
          className="w-25 top-50 start-50 translate-middle"
          position={"top-center"}
          style={{ zIndex: 1 }}
          onClose={handleClose}
          show={alertShown}
          variant={color}
          animation={true}
          delay={2000}
          dismissible
          autohide
        >
          <Alert.Heading>{topic}</Alert.Heading>
          <p>{message}</p>
          <div className="d-flex justify-content-end">
            <Button onClick={handleClose} variant={color}>
              {buttonText}
            </Button>
          </div>
        </Alert>
      )}
    </>
  );
}

export default Alertify;
