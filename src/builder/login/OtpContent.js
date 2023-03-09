import { Form, Button, Image } from "react-bootstrap";
import "./Login.css";
import Reset from "../Images/Reset.png";
import { Link } from "react-router-dom";

const OtpContent = () => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>OTP</Form.Label>
        <div className="d-flex justify-content-between align-items-center gap-4 mb-3">
          <Form.Control className="rounded" type="text" maxLength={1} />
          <Form.Control className="rounded" type="text" maxLength={1} />
          <Form.Control className="rounded" type="text" maxLength={1} />
          <Form.Control className="rounded" type="text" maxLength={1} />
          <Form.Control className="rounded" type="text" maxLength={1} />
          <Form.Control className="rounded" type="text" maxLength={1} />
        </div>
        <div className="d-flex justify-content-center align-items-center my-4">
          <Form.Text className="text-muted me-3">
            Didn't get OTP. Resend In 30 Sec
          </Form.Text>
          <Image
            src={Reset}
            fluid
            className="rounded my-2 user-img"
            alt="Reset"
          />
        </div>
        <Button
          variant="primary"
          className="w-100 rounded-pill bg-color-primary"
          as={Link}
          to="/builder/home-dashboard"
        >
          Claim
        </Button>
      </Form.Group>
    </>
  );
};

export default OtpContent;
